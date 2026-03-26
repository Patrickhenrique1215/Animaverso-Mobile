import { Pressable, ScrollView, View, Text, Modal } from 'react-native';
import { useState, useEffect, useRef } from "react";
import { Image } from 'expo-image';  
import { LinearGradient } from 'expo-linear-gradient';

import listas from '../../styles/listas';
import modalDetails from '../../styles/modalDetails';

const API_KEY = "d8d845616ef648907b00e45d63d0584f"; 
const BASE_URL = "https://api.themoviedb.org/3";

export default function ListaDisney(){

    //States
    const [animacoes, setAnimacoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalAberto, setModalAberto] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState(null);
    const [detalhesModal, setDetalhesModal] = useState(null);
    const [cardsAbertos, setCardsAbertos] = useState({});

    //Refs
    const containerRef = useRef(null);

    // Função para toggle do card
    const toggleCard = (id) => {
        setCardsAbertos(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Função para formatar duração
    const formatarDuracao = (detalhes) => {
        if (!detalhes) return 'Carregando...';
        
        if (detalhes.runtime) {
        return `${detalhes.runtime} min`;
        } else if (detalhes.episode_run_time?.[0]) {
        return `${detalhes.episode_run_time[0]} min/ep`;
        }
        return 'N/D';
    };

    //Função pra formatar idiomas
    const getNomeIdioma = (codigo) => {
        if (!codigo) return 'N/D'; // ← Proteção contra undefined/null
        
        const idiomas = {
        'en': 'Inglês',
        'pt': 'Português', 
        'es': 'Espanhol',
        'fr': 'Francês',
        'ja': 'Japonês',
        'ko': 'Coreano'
        };
        return idiomas[codigo] || codigo.toUpperCase();
    };


    // Função pra traduzir status
    const getStatusTraduzido = (status) => {
        const traducoes = {
        'Released': 'Lançado',
        'Returning Series': 'Em exibição',
        'Ended': 'Finalizada',
        'In Production': 'Em produção',
        'Canceled': 'Cancelada',
        'Planned': 'Planejado'
        };
        return traducoes[status] || status;
    };

    //Função para abrir modal
    const abrirModal = (item) => {
        setItemSelecionado(item);
        setModalAberto(true);
    };

    //Funçao pra fechar modal
    const closeModal = (item) => {
        setItemSelecionado(null);
        setModalAberto(false);
    }

    //useEffwect para buscar animaçoes DISNEY
    useEffect(() => {
        const fetchAnimacoes = async () => {
        try {
            // Filmes e séries de animação da Disney
            const [filmesRes, seriesRes] = await Promise.all([
            fetch(
                `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&with_companies=2&sort_by=popularity.desc&language=pt-BR`
            ),
            fetch(
                `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16&with_companies=2&sort_by=popularity.desc&language=pt-BR`
            )
            ]);

            const filmes = await filmesRes.json();
            const series = await seriesRes.json();

            // Junta e pega top 20 mais populares
            const todasAnimacoesDisney = [
            ...filmes.results,
            ...series.results
            ].slice(0, 30);

            setAnimacoes(todasAnimacoesDisney);
        } catch (error) {
            console.error("Erro ao buscar animações da Disney:", error);
        } finally {
            setLoading(false);
        }
        };

        fetchAnimacoes();
    }, []);


    // useEffect para carregar detalhes do card selecionado
    useEffect(() => {
      if (itemSelecionado) {
        const fetchTudo = async () => {
          // Detalhes principais
          const detalhesUrl = itemSelecionado.title 
            ? `${BASE_URL}/movie/${itemSelecionado.id}`
            : `${BASE_URL}/tv/${itemSelecionado.id}`;
          
          const [detalhesRes, ratingRes] = await Promise.all([
            fetch(`${detalhesUrl}?api_key=${API_KEY}&language=pt-BR&append_to_response=credits,images`),
            fetch(`${detalhesUrl}/${
              itemSelecionado.title ? 'release_dates' : 'content_ratings'
            }?api_key=${API_KEY}`)
          ]);
          
          const detalhes = await detalhesRes.json();
          const ratingData = await ratingRes.json();
          
          // Pega classificação BR
          const classificacaoBR = ratingData.results?.find(r => 
            r.iso_3166_1 === 'BR'
          )?.certification || ratingData.results?.find(r => 
            r.iso_3166_1 === 'BR'
          )?.rating || 'Classificação indicativa não informada';
          
          setDetalhesModal({ ...detalhes, classificacao: classificacaoBR });
        };
        fetchTudo();
      }
    }, [itemSelecionado]);

    //Render condicional
    if (loading) {
        return <Text>Carregando...</Text>;
    }

    return(
        <ScrollView>
            <ScrollView 
                ref={containerRef}
                style={listas.containerPrincipal}
                horizontal 
                showsHorizontalScrollIndicator={false}
            >
                {animacoes
                    .filter(animacao => animacao.poster_path)
                    .map((animacao) => (
                        
                        <Pressable 
                            key={animacao.id}
                            style={listas.cardLink}
                            onPress={() => toggleCard(animacao.id)}
                        >        
                            <Image 
                                source={{uri: `https://image.tmdb.org/t/p/w500${animacao.poster_path}`}}
                                style={listas.imgCard}
                                accessibilityLabel={animacao.title || animacao.name}
                            />
                            {cardsAbertos[animacao.id] && (
                                <View style={listas.hoverContainer}>
                                <LinearGradient
                                    colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.8)', 'transparent']}
                                    locations={[0, 0.5, 1]}
                                    start={{x: 0.5, y: 1}}  // começa na parte inferior central
                                    end={{x: 0.5, y: 0}}     // termina na parte superior central
                                    style={listas.gradientOverlay}
                                >
                                <View style={listas.hoverCard}>
                                    <View style={listas.topoHoverCard}>
                                        <Text style={listas.tituloHover}>{animacao.title || animacao.name}</Text>
                                        <Text style={listas.notaHover}> ★ {animacao.vote_average?.toFixed(1)}</Text>
                                    </View>
                                    <View style={listas.botoesHoverCard}>
                                        <Pressable style={listas.button}>
                                            <Image 
                                                style={listas.buttonImage}
                                                source={require('../../../assets/play-button.png')} 
                                                accessibilityLabel='Botão de ASSISTIR'
                                            />
                                        </Pressable>
                                        <Pressable style={listas.button}>
                                            <Image 
                                                style={listas.buttonImage}
                                                source={require('../../../assets/adicionar.png')} 
                                                accessibilityLabel='Botão de adicionar à lista para ASSISTIR DEPOIS'
                                            />
                                        </Pressable>
                                        <Pressable 
                                            style={listas.button} 
                                            onPress={() => abrirModal(animacao)}
                                        >
                                            <Image 
                                                style={listas.buttonImage}
                                                source={require('../../../assets/angle-down-solid.png')} 
                                                accessibilityLabel={`Botão de VER MAIS DETALHES sobre ${animacao.title || animacao.name}`}
                                            />
                                        </Pressable>
                                    </View>
                                </View>
                                </LinearGradient>
                                </View>
                            )}    
                        </Pressable>
                       
                    ))}
            </ScrollView>
            
            {modalAberto && itemSelecionado && (
                <Modal
                    visible={true}
                    transparent={true}
                    animationType="fade" // ou "slide"
                    statusBarTranslucent={true}
                    onRequestClose={closeModal}
                >
                <Pressable 
                    style={modalDetails.modalOverlay} 
                    onPress={closeModal}
                >
                    <Pressable style={modalDetails.modalContainer}>
                        <ScrollView 
                            style={modalDetails.modal}
                            showsVerticalScrollIndicator={true}
                            contentContainerStyle={modalDetails.modalContent}
                        >
                            <View style={modalDetails.topo}>
                                <Image 
                                    style={modalDetails.imgBackdrop} 
                                    source={{uri: `https://image.tmdb.org/t/p/w1280${detalhesModal?.backdrop_path}`}}
                                />
                                <Pressable style={modalDetails.closeBtn} onPress={closeModal}>
                                    <Text style={modalDetails.closeBtnText}>x</Text>
                                </Pressable>
                                <View style={modalDetails.titleEButtons}>
                                    <Text style={modalDetails.tituloModal}>{detalhesModal?.title || detalhesModal?.name}</Text>
                                    <Text style={modalDetails.notaModal}>★ {detalhesModal?.vote_average?.toFixed(1)}</Text>
                                    <View style={modalDetails.botoesContainer}>
                                        <Pressable style={modalDetails.buttonAssistir}>
                                            <Text style={modalDetails.buttonAssistirText}>Assistir</Text>
                                        </Pressable>
                                        <Pressable style={modalDetails.addMyLista}>
                                            <Text style={modalDetails.addMyListaText}>+</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            
                            <View style={modalDetails.sinopse}>
                                <Text style={modalDetails.titleSinopse}>Sinopse:</Text>
                                <Text style={modalDetails.textoSinopse}>{detalhesModal?.overview}</Text>    
                            </View>
                            
                            <View style={modalDetails.infosMidia}>
                                <View style={modalDetails.infoColuna}>
                                    <Text style={modalDetails.infoText}>
                                        {detalhesModal?.release_date?.split('-')[0] || detalhesModal?.first_air_date?.split('-')[0]} 
                                        {' - '}
                                        {itemSelecionado.title ? 'Filme' : 'Série'}
                                    </Text>
                                    <Text style={modalDetails.infoText}>{detalhesModal?.classificacao || 'Não classificado'}</Text>
                                    <Text style={modalDetails.infoText}>IDIOMA ORIGINAL: {getNomeIdioma(detalhesModal?.original_language)}</Text>
                                    <Text style={modalDetails.infoText}>STATUS: {getStatusTraduzido(detalhesModal?.status)}</Text>
                                    <Text style={modalDetails.infoText}>DURAÇÃO: {formatarDuracao(detalhesModal)}</Text>
                                </View>
                                <View style={modalDetails.infoColuna}>
                                    <Text style={modalDetails.infoText}>Gêneros: {detalhesModal?.genres?.map(g => g.name).join(', ')}</Text>
                                    <Text style={modalDetails.infoText}>Elenco: {detalhesModal?.credits?.cast?.slice(0,5).map(a => a.name).join(', ')}</Text>
                                    <Text style={modalDetails.infoText}>Diretor: {detalhesModal?.credits?.crew?.filter(p => p.job === "Director").map(d => d.name).join(', ')}</Text>
                                    <Text style={modalDetails.infoText}>Produtoras: {detalhesModal?.production_companies?.map(p => p.name).join(', ')}</Text>
                                </View>
                            </View>
                            
                            {detalhesModal?.images?.backdrops?.length > 0 && (
                                <View style={modalDetails.imagensMidia}>
                                    <Text style={modalDetails.titleSinopse}>Imagens</Text>
                                    <ScrollView 
                                        horizontal 
                                        showsHorizontalScrollIndicator={false}
                                        style={modalDetails.imagensScroll}
                                    >
                                        {detalhesModal?.images?.backdrops?.slice(0,8).map(img => (
                                            <Image
                                                key={img.file_path}
                                                style={modalDetails.imagemAdicional}
                                                source={{uri: `https://image.tmdb.org/t/p/w780${img.file_path}`}}
                                                accessibilityLabel="Cenas e pôsteres"
                                            />
                                        ))}
                                    </ScrollView>
                                </View>
                            )}
                        </ScrollView>
                    </Pressable>
                </Pressable>
                </Modal>
            )}
        </ScrollView>
    )
}