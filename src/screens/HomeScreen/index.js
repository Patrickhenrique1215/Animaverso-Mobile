import { ScrollView, ImageBackground} from 'react-native';
import { useState } from 'react';
import Header from "../../components/Header";
import AreaListas from '../../components/AreaListas';
import Footer from '../../components/Footer';
import ResultadosBusca from '../../components/ResultadosBusca';

export default function HomeScreen() {

  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState([]);


  return (
    <ImageBackground 
      source={require('../../../assets/back.png')}
      style={{flex: 1}}
      resizeMode='cover'
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
        <Header 
          setBusca={setBusca} 
          setResultados={setResultados}
        />

        {busca ? (  
          <ResultadosBusca resultados={resultados} />
        ) : (
          <AreaListas />
        )}
        <Footer />
      </ScrollView>
    </ImageBackground>
  );
}

