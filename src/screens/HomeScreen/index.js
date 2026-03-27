import { ScrollView, ImageBackground, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Header from "../../components/Header";
import AreaListas from '../../components/AreaListas';
import Footer from '../../components/Footer';
import ResultadosBusca from '../../components/ResultadosBusca';

export default function HomeScreen() {

  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <ImageBackground 
      source={require('../../../assets/back.png')}
      style={{ flex: 1 }}
      resizeMode='cover'
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']}
        style={{ flex: 1 }}
      >

      <View style={{ flex: 1 }}>

        <Header 
          setBusca={setBusca} 
          setResultados={setResultados}
          setLoading={setLoading}
          voltarInicio={() => {
            setBusca("");
            setResultados([]);
          }}
        />

        <ScrollView contentContainerStyle={{ paddingTop: 90 }}>
          {busca ? (  
            <ResultadosBusca resultados={resultados} loading={loading} />
          ) : (
            <AreaListas />
          )}
          <Footer />
        </ScrollView>

      </View>
      </LinearGradient>
    </ImageBackground>
  );
}