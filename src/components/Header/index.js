import { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  ImageBackground,
} from 'react-native';
import styles from './index.styles';
import { LinearGradient } from 'expo-linear-gradient';

const API_KEY = "d8d845616ef648907b00e45d63d0584f";
const BASE_URL = "https://api.themoviedb.org/3";

export default function Header({ setBusca, setResultados }) {

    //States
    const [menuAberto, setMenuAberto] = useState(false);
    //const [texto, setTexto] = useState("");  //para funcionar o campo de busca. ainda em produção

    //Refs
    //const dropdownRef = useRef(null);  //para fechar o modal quando clicado fora. ainda em produçao

    //Funções
    const toggleMenu = () => setMenuAberto(!menuAberto);

    //Funçao buscar FAMILIA
    async function familia() {

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,10751&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,10751&without_original_language=ja&language=pt-BR&page=${page}`)
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

        setBusca("familia");
        setResultados(filtrados);
    }
    
    const actions = {
      'Família': familia,
      
    };

    return (
      <LinearGradient
        colors={['black', 'rgba(0,0,0,0.8)', 'transparent']}
        style={styles.header}
        start={{x: 0, y: 0}} 
        end={{x: 0, y: 1}}
      >

        <Pressable>
            <Image
            source={require('../../../assets/logosemfundo.png')} 
            style={styles.logo}
            resizeMode="contain"
            />
        </Pressable>

        <Pressable style={styles.dropdownButton} onPress={toggleMenu}>
          <Text style={styles.dropdownText}>Categorias</Text>
          <Text style={styles.chevron}>▼</Text>
        </Pressable>

        <TextInput
            style={styles.inputPesquisar}
            placeholder="Pesquisar"
            placeholderTextColor="#918f8f"
            // value={texto}
            // onChangeText={setTexto}
        />

        {menuAberto && (
          <ImageBackground 
            style={styles.dropContent}
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
                          style={styles.item} 
                          onPress={() => {
                            if (actions[item]) {
                              actions[item]();
                              setMenuAberto(false); // Fecha o menu após selecionar
                            }
                          }}>
                          <Text style={styles.itemText}>{item}</Text>
                        </Pressable>
                    ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Classificação indicativa</Text>
                    <View style={styles.grid}>
                    {['L - Livre', '10', '12', '14', '16', '18'].map((item) => (
                        <Pressable key={item} style={styles.item}>
                        <Text style={styles.itemText}>{item}</Text>
                        </Pressable>
                    ))}
                    </View>
                </View>
              </ScrollView>
          </LinearGradient>    
          </ImageBackground>
        )}
      </LinearGradient>
    );
}
