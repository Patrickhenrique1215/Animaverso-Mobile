import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  ImageBackground,
  Animated
} from 'react-native';
import styles from './index.styles';
import { LinearGradient } from 'expo-linear-gradient';

const API_KEY = "d8d845616ef648907b00e45d63d0584f";
const BASE_URL = "https://api.themoviedb.org/3";

const CACHE_VERSION = 2; // incrementa quando mudar a lógica
const cache = new Map();

export default function Header({ setBusca, setResultados, setLoading, voltarInicio }) {

    //States
    const [menuAberto, setMenuAberto] = useState(false);
    const [texto, setTexto] = useState("");  

    //Refs
    const slideAnim = useRef(new Animated.Value(-20)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    //Funções
    const toggleMenu = () => setMenuAberto(!menuAberto);


{/*
    // Função genérica para buscar por gênero ou classificação
    async function buscarConteudo({ nomeBusca, filmesConfig, seriesConfig }) {
      setLoading(true);

      try {
        const paginas = [1,2,3,4];

        // monta URLs de filmes
        const requestsFilmes = paginas.map(page =>
          fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&page=${page}&without_original_language=ja${filmesConfig}`)
        );

        // monta URLs de séries
        const requestsSeries = paginas.map(page =>
          fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&language=pt-BR&page=${page}&without_original_language=ja${seriesConfig}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);
        const json = await Promise.all(respostas.map(r => r.json()));

        const todos = json.flatMap(d => d.results);

        const unicos = Array.from(
          new Map(
            todos.map(item => [
              `${item.id}-${item.title ? "movie" : "tv"}`,
              item
            ])
          ).values()
        );

        const filtrados = unicos.filter(item =>
          item.id &&
          item.poster_path &&
          item.vote_average >= 5 &&
          item.vote_count >= 200
        );

        setResultados(filtrados);
        setBusca(nomeBusca);

      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

*/}

const buscarConteudo = useCallback(async ({ nomeBusca, filmesConfig, seriesConfig }) => {
  const cacheKey = `v${CACHE_VERSION}-${nomeBusca}`;
  
  if (cache.has(cacheKey)) {
    setResultados(cache.get(cacheKey));
    setBusca(nomeBusca);
    return;
  }

  setLoading(true);
  try {
    const paginas = [1, 2, 3, 4];
    const requestsFilmes = paginas.map(p =>
      fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&page=${p}&without_original_language=ja${filmesConfig}`)
    );
    const requestsSeries = paginas.map(p =>
      fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&language=pt-BR&page=${p}&without_original_language=ja${seriesConfig}`)
    );

    const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);
    const json = await Promise.all(respostas.map(r => r.json()));
    const todos = json.flatMap(d => d.results);

    // ✅ 1. filtra primeiro (remove itens sem id/poster)
    const filtrados = todos.filter(item =>
      item.id &&
      item.poster_path &&
      item.vote_average >= 5 &&
      item.vote_count >= 200
    );

    // ✅ 2. deduplica em cima dos já filtrados
    const unicos = Array.from(
      new Map(filtrados.map(item => [
        `${item.id}-${item.media_type ?? (item.title ? "movie" : "tv")}`,
        item
      ])).values()
    );

    // ✅ 3. salva e seta os unicos (não os filtrados!)
    cache.set(cacheKey, unicos);
    setResultados(unicos);
  
    setBusca(nomeBusca);
  } catch (e) {
    console.log(e);
  } finally {
    setLoading(false);
  }
}, [setBusca, setResultados, setLoading]);



    //Funçao de buscar no CAMPO DE BUSCA
    {/*
    async function buscarFilmes() {
      if (texto.trim() === "") return;

      setLoading(true); // 👈 IMPORTANTE

      try {
          const resposta = await fetch(
              `${BASE_URL}/search/multi?query=${texto}&api_key=${API_KEY}&language=pt-BR`
          );

          const dados = await resposta.json();

          const filtrados = dados.results.filter(item =>
              item.poster_path &&
              item.media_type !== "person" &&
              item.genre_ids?.includes(16)
          );

          setBusca(texto);
          setResultados(filtrados);

      } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
  }
*/}

const buscarFilmes = useCallback(async () => {
  if (texto.trim() === "") return;
  setLoading(true);
  try {
    const resposta = await fetch(
      `${BASE_URL}/search/multi?query=${texto}&api_key=${API_KEY}&language=pt-BR`
    );
    const dados = await resposta.json();
    const filtrados = dados.results.filter(item =>
      item.poster_path && item.media_type !== "person" && item.genre_ids?.includes(16)
    );
    setBusca(texto);
    setResultados(filtrados);
  } catch (e) {
    console.log(e);
  } finally {
    setLoading(false);
  }
}, [texto, setBusca, setResultados, setLoading]);



   {/*const actions = {*/}
   const actions = useMemo(() => ({
  // Gêneros
  'Família': () => buscarConteudo({
    nomeBusca: "familia",
    filmesConfig: "&with_genres=16,10751",
    seriesConfig: "&with_genres=16,10751"
  }),
  'Comédia': () => buscarConteudo({
    nomeBusca: "comedia",
    filmesConfig: "&with_genres=16,35",
    seriesConfig: "&with_genres=16,35"
  }),
  'Aventura': () => buscarConteudo({
    nomeBusca: "aventura",
    filmesConfig: "&with_genres=16,12",
    seriesConfig: "&with_genres=16,12"
  }),
  'Drama': () => buscarConteudo({
    nomeBusca: "drama",
    filmesConfig: "&with_genres=16,18",
    seriesConfig: "&with_genres=16,18"
  }),
  'Ação': () => buscarConteudo({
    nomeBusca: "acao",
    filmesConfig: "&with_genres=16,28",
    seriesConfig: "&with_genres=16,28"
  }),
  'Fantasia': () => buscarConteudo({
    nomeBusca: "fantasia",
    filmesConfig: "&with_genres=16,14",
    seriesConfig: "&with_genres=16,14"
  }),
  'Romance': () => buscarConteudo({
    nomeBusca: "romance",
    filmesConfig: "&with_genres=16,10749",
    seriesConfig: "&with_genres=16,10749"
  }),
  'Mistério': () => buscarConteudo({
    nomeBusca: "misterio",
    filmesConfig: "&with_genres=16,9648",
    seriesConfig: "&with_genres=16,9648"
  }),
  'Horror': () => buscarConteudo({
    nomeBusca: "horror",
    filmesConfig: "&with_genres=16,27",
    seriesConfig: "&with_genres=16,27"
  }),

  // Classificações específicas
  'L - Livre': () => buscarConteudo({
    nomeBusca: "livre",
    filmesConfig: "&with_genres=16,10751&certification_country=US&certification=G",
    seriesConfig: "&with_genres=16,10751&with_content_ratings=TV-G"
  }),
  '10': () => buscarConteudo({
    nomeBusca: "10",
    filmesConfig: "&with_genres=16&certification_country=BR&certification.gte=10",
    seriesConfig: "&with_genres=16&with_content_ratings=10|TV-Y7|TV-G|PG"
  }),
  '12': () => buscarConteudo({
    nomeBusca: "12",
    filmesConfig: "&with_genres=16&certification_country=US&certification.gte=PG-13",
    seriesConfig: "&with_genres=16&with_content_ratings=12|12A|TV-PG|PG"
  }),
  '14': () => buscarConteudo({
    nomeBusca: "14",
    filmesConfig: "&with_genres=16&certification_country=BR&certification.gte=14",
    seriesConfig: "&with_genres=16&with_content_ratings=14|15|TV-14"
  }),
  '16': () => buscarConteudo({
    nomeBusca: "16",
    filmesConfig: "&with_genres=16&certification_country=GB&certification.gte=15",
    seriesConfig: "&with_genres=16&with_content_ratings=16|18|TV-MA|R|NC-17"
  }),
  '18': () => buscarConteudo({
    nomeBusca: "18",
    filmesConfig: "&with_genres=16&certification_country=US&certification.gte=NC-17",
    seriesConfig: "&with_genres=16&with_content_ratings=18|TV-MA"
  }),
  }), [buscarConteudo]);

{/* }; */}



    //Efeito dropdown descer suave
    useEffect(() => {
    if (menuAberto) {
        Animated.parallel([
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        })
        ]).start();
    } else {
        Animated.parallel([
        Animated.timing(slideAnim, {
            toValue: -20,
            duration: 200,
            useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        })
        ]).start();
    }
    }, [menuAberto]);


    return (
      <LinearGradient
        colors={['black', 'rgba(0,0,0,0.8)', 'transparent']}
        style={styles.header}
        start={{x: 0, y: 0}} 
        end={{x: 0, y: 1}}
        
      >

        <Pressable onPress={voltarInicio} style={({ hovered, pressed }) => ({
            alignSelf: 'flex-start',
            opacity: pressed ? 0.6 : hovered ? 0.8 : 1,
            transform: [{ scale: pressed ? 0.95 : 1 }]
        })}>
            <Image
            source={require('../../../assets/logosemfundo.png')} 
            style={styles.logo}
            resizeMode="contain"
            />
        </Pressable>

        <Pressable style={({ hovered, pressed }) => [
    styles.dropdownButton,
    {
      opacity: pressed ? 0.6 : hovered ? 0.8 : 1,
      transform: [{ scale: pressed ? 0.95 : 1 }]
    }
  ]} onPress={toggleMenu}>
          <Text style={styles.dropdownText}>Categorias</Text>
          <Text style={styles.chevron}>▼</Text>
        </Pressable>

        <TextInput
            style={styles.inputPesquisar}
            placeholder="Pesquisar"
            placeholderTextColor="#918f8f"
            value={texto}
            onChangeText={setTexto}
            onSubmitEditing={buscarFilmes}
        />

        
            <Animated.View
                pointerEvents={menuAberto ? 'auto' : 'none'}
                style={[
                    styles.dropContent, 
                    {
                    opacity: opacityAnim,
                    transform: [
                        { translateY: slideAnim },
                        { scale: opacityAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0.95, 1]
                        })}
                        ]
                    }
                ]}
                >
                <ImageBackground 
                    style={{ width: '100%' }} // 👈 importante
                    source={require('../../../assets/back.png')}
                    resizeMode='cover'
                >
                <LinearGradient
                    colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.7)']}
                    style={styles.overlay}
                >

                <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Gêneros</Text>
                    <View style={styles.grid}>
                    {[
                        'Família',
                        'Comédia',
                        'Aventura',
                        'Drama',
                        'Ação',
                        'Fantasia',
                        'Romance',
                        'Mistério',
                        'Horror',
                    ].map((item) => (
                        <Pressable 
                          key={item}
                          style={({ hovered, pressed }) => [
                            styles.item,
                            {
                            opacity: pressed ? 0.6 : hovered ? 0.8 : 1,
                            transform: [{ scale: pressed ? 0.95 : 1 }]
                            }
                        ]}
                          onPress={() => {
                            if (actions[item]) {
                              actions[item]();
                              setMenuAberto(false); 
                            }
                          }}
            
                        >
                          <Text style={styles.itemText}>{item}</Text>
                        </Pressable>
                    ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Classificação indicativa</Text>
                    <View style={styles.grid}>
                    {['L - Livre', '10', '12', '14', '16', '18'].map((item, index) => (
                        <Pressable 
                          key={item}
                          style={({ hovered, pressed }) => [
                            styles.item,
                            {
                            opacity: pressed ? 0.6 : hovered ? 0.8 : 1,
                            transform: [{ scale: pressed ? 0.95 : 1 }]
                            }
                        ]}
                          onPress={() => {
                            if (actions[item]) {
                              actions[item]();
                              setMenuAberto(false); // Fecha o menu após selecionar
                            }
                          }}
                        >
                        <Text style={styles.itemText}>{item}</Text>
                        </Pressable>
                    ))}
                    </View>
                </View>
              </ScrollView>
          </LinearGradient>    
          </ImageBackground>
          </Animated.View>
        
      </LinearGradient>
    );
}
