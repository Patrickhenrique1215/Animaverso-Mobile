import { useState, useRef, useEffect } from 'react';
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

export default function Header({ setBusca, setResultados, setLoading, voltarInicio }) {

    //States
    const [menuAberto, setMenuAberto] = useState(false);
    const [texto, setTexto] = useState("");  

    //Refs
    const slideAnim = useRef(new Animated.Value(-20)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    //Funções
    const toggleMenu = () => setMenuAberto(!menuAberto);

    //Funçao buscar FAMILIA
    async function familia() {
      setLoading(true);

      try {
          const paginas = [1,2,3,4,5,6,7,8,9];

          const requestsFilmes = paginas.map(page =>
              fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,10751&without_original_language=ja&language=pt-BR&page=${page}`)
          );

          const requestsSeries = paginas.map(page =>
              fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,10751&without_original_language=ja&language=pt-BR&page=${page}`)
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
          setBusca("familia");

      } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
  }

  //Funçao buscar COMEDIA
    async function comedia() {

      setLoading(true);

      try {

      const paginas = [1,2,3,4,5,6,7,8,9];

      const requestsFilmes = paginas.map(page =>
          fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,35&without_original_language=ja&language=pt-BR&page=${page}`)
      );

      const requestsSeries = paginas.map(page =>
          fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,35&without_original_language=ja&language=pt-BR&page=${page}`)
      );

      const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

      const json = await Promise.all(respostas.map(r => r.json()));

      // junta todos resultados
      const todos = json.flatMap(d => d.results);

      // remove duplicados
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
      setBusca("comedia");

      } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }

    }

     //Funçao buscar AVENTURA
    async function aventura() {
        setLoading(true);

      try {

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,12&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,12&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );
        setResultados(filtrados);
        setBusca("aventura");

         } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
        
    }

    //Funçao buscar DRAMA
    async function drama() {
        setLoading(true);

      try {

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,18&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,18&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setResultados(filtrados);
        setBusca("drama");
         } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
    }

    //Funçao buscar AÇÃO
    async function acao() {
        e.preventDefault();setLoading(true);

      try {

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,28&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,28&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setResultados(filtrados);
        setBusca("acao");

         } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
       
    }

    //Funçao buscar FANTASIA
    async function fantasia() {
        setLoading(true);

      try {

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,14&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,14&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setResultados(filtrados);
        setBusca("fantasia");

         } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
        
    }

    //Funçao buscar ROMANCE
    async function romance() {
        setLoading(true);

      try {

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,10749&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,10749&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setResultados(filtrados);
        setBusca("romance");

         } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
      
    }

    //Funçao buscar MISTERIO
    async function misterio() {
        setLoading(true);

      try {

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,9648&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,9648&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setResultados(filtrados);
        setBusca("misterio");

         } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
        
    }

    //Funçao buscar HORROR
    async function horror() {
        
      setLoading(true);

      try {
        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,27&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,27&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setResultados(filtrados);
        setBusca("horror");
       
         } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
    }


    //Funçao buscar classificaçao L - Livre
    async function buscarLivre() {
   setLoading(true);

      try {

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,10751&certification_country=US&certification=G&without_original_language=ja&language=pt-BR&sort_by=popularity.desc&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,10751&with_content_ratings=TV-G&without_original_language=ja&language=pt-BR&sort_by=popularity.desc&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );
setResultados(filtrados);
        setBusca("livre");
         } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
    } 

    //Funçao buscar classificaçao 10
    async function buscar10() {
        setLoading(true);

      try {

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&certification_country=BR&certification.gte=10&without_original_language=ja&language=pt-BR&with_keywords=210024|1721|9715|456&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16with_content_ratings=10|TV-Y7|TV-G|PG&without_original_language=ja&language=pt-BR&with_keywords=210024|1721|9715|456&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );
setResultados(filtrados);
        setBusca("10");
         } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
    } 

    //Função buscar classificaçao 12
    async function buscar12() {
        setLoading(true);

      try {

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&certification_country=US&certification.gte=PG-13&without_original_language=ja&language=pt-BR&sort_by=release_date.desc&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16with_content_ratings=12|12A|TV-PG|PG&without_original_language=ja&language=pt-BR&sort_by=release_date.desc&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );
setResultados(filtrados);
        setBusca("12");
         } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
    } 

    //Função buscar classificação 14
    async function buscar14() {
setLoading(true);

      try {
        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&certification_country=BR&certification.gte=14&without_original_language=ja&language=pt-BR&sort_by=primary_release_date.desc&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16with_content_ratings=14|15|TV-14&without_original_language=ja&language=pt-BR&sort_by=primary_release_date.desc&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );
setResultados(filtrados);
        setBusca("14");
         } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
    } 

    //Função buscar classificaçao 16
    async function buscar16() {
        setLoading(true);

      try {

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&certification_country=GB&certification.gte=15&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16with_content_ratings=16|18|TV-MA|R|NC-17&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );
setResultados(filtrados);
        setBusca("16");
     } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
    } 

    //Função buscar classificaçao 18
    async function buscar18() {
        setLoading(true);

      try {

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&certification_country=US&certification.gte=NC-17&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16with_content_ratings=18|TV-MA&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );
setResultados(filtrados);
        setBusca("18");
    } catch (e) {
          console.log(e);
      } finally {
          setLoading(false);
      }
    } 


    //Funçao de buscar no CAMPO DE BUSCA
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



    const actions = {
      'Família': familia,
      'Comédia': comedia,
      'Aventura': aventura,
      'Drama': drama,
      'Ação': acao,
      'Fantasia': fantasia,
      'Romance': romance,
      'Mistério': misterio,
      'Horror': horror,
      'L - Livre': buscarLivre,
      '10': buscar10,
      '12': buscar12,
      '14': buscar14,
      '16': buscar16,
      '18': buscar18
      
    };

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
                    ].map((item, index) => (
                        <Pressable 
                          key={`${item.id ?? index}-${item.media_type || (item.title ? "movie" : "tv")}`}
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
                          key={`${item.id ?? index}-${item.media_type || (item.title ? "movie" : "tv")}`} 
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
