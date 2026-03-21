import styles from './index.style';
import {Pressable, ScrollView, Text, View, Image} from 'react-native';
import { useState, useEffect, useRef } from "react";

const API_KEY = "d8d845616ef648907b00e45d63d0584f"; 
const BASE_URL = "https://api.themoviedb.org/3";

export default function ResultadosBusca({resultados}){

    //States
    const [modalAberto, setModalAberto] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState(null);
    const [detalhesModal, setDetalhesModal] = useState(null);

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
  {/*const abrirModal = (item) => {
    setItemSelecionado(item);
    setModalAberto(true);
  };*/}

  //Funçao pra fechar modal
  {/*const closeModal = (item) => {
    setItemSelecionado(null);
    setModalAberto(false);
  }*/}



  // useEffect para carregar detalhes do card selecionado
    {/*}  useEffect(() => {
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
      }, [itemSelecionado]);*/}

    return(
        <ScrollView>
            <Text>RESULTADOS</Text>
            {resultados.length === 0 ? ( <Text>Sem resultados</Text> ) : ( 
                <ScrollView>
                    {resultados.map((item, index) => (
                        <View key={item.id || index}>
                            <Image 
                                source={{ uri: `https://image.tmdb.org/t/p/w300${item.poster_path}` }}
                                accessibilityLabel={item.title || item.name}
                                style={{ width: 200, height: 300 }} 
                            />
                            <View>
                                <View>
                                    <Text>{item.title || item.name}</Text>
                                    <Text> ★ {item.vote_average?.toFixed(1)}</Text>
                                </View>
                                <View>
                                    <Pressable><Image source={require('../../../assets/play-button.png')}></Image></Pressable>
                                    <Pressable><Image source={require('../../../assets/adicionar.png')}></Image></Pressable>
                                    <Pressable><Image source={require('../../../assets/angle-down-solid.png')}></Image></Pressable>
                                </View>
                            </View>
                        </View>
                    ))}    
                </ScrollView>
            )}    
        </ScrollView>
    )
}