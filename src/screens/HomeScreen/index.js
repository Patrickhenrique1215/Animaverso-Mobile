import { useState, useCallback } from 'react';
import { StyleSheet, View, FlatList, ImageBackground } from 'react-native';

import Header from "../../components/Header";
import AreaListas from '../../components/AreaListas';
import Footer from '../../components/Footer';
import ResultadosBusca from '../../components/ResultadosBusca';

export default function HomeScreen() {
  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  const voltarInicio = useCallback(() => {
    setBusca("");
    setResultados([]);
  }, []);

  const renderContent = () => {
    if (busca) {
      return <ResultadosBusca resultados={resultados} loading={loading} />;
    }
    return <AreaListas />;
  };

  return (
    <ImageBackground 
      source={require('../../../assets/back.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Header 
          setBusca={setBusca} 
          setResultados={setResultados}
          setLoading={setLoading}
          voltarInicio={voltarInicio}
        />

        <FlatList
          data={[{}]} 
          renderItem={() => renderContent()}
          keyExtractor={() => "content"}
          contentContainerStyle={styles.scrollContent}
        />

        <Footer />
      </View>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingTop: 90 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)', // escurece a imagem
  },
});
