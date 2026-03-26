import styles from "./index.styles";
import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import ListaLancamentos from "../ListaLancamentos";
import ListaPopulares from "../ListaPopulares";
import ListaDisney from "../ListaDisney";
import ListaPixar from "../ListaPixar";
import ListaFamilia from "../ListaFamilia";
import ListaAcao from "../ListaAcao";
import ListaDC from "../ListaDC";
import ListaMarvel from "../ListaMarvel";
import ListaComedia from "../ListaComedia";
import ListaAventura from "../ListaAventura";
import ListaFantasia from "../ListaFantasia";
import ListaFiccao from "../ListaFiccao";
import ListaAdultos from "../ListaAdultos";
import ListaUltimos from "../ListaUltimos";

export default function AreaListas(){
    return(
        <ScrollView style={styles.caixota}>
            <ScrollView>
                <LinearGradient
                    colors={['black', 'black', 'transparent', 'transparent']}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.fundotitulo}
                >
                    <View style={styles.barrinhaAmarela}></View>
                    <Text style={styles.tituloSecao}>Lançamentos</Text>
                </LinearGradient>
                <ListaLancamentos/>
            </ScrollView>
            <ScrollView>
                <LinearGradient
                    colors={['black', 'black', 'transparent', 'transparent']}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.fundotitulo}
                >
                    <View style={styles.barrinhaAmarela}></View>
                    <Text style={styles.tituloSecao}>Populares</Text>
                </LinearGradient>
                <ListaPopulares />
            </ScrollView>
            <ScrollView>
                <LinearGradient
                    colors={['black', 'black', 'transparent', 'transparent']}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.fundotitulo}
                >
                    <View style={styles.barrinhaAmarela}></View>
                    <Text style={styles.tituloSecao}>Disney</Text>
                </LinearGradient>
                <ListaDisney/>
            </ScrollView>
            <ScrollView>
                <LinearGradient
                    colors={['black', 'black', 'transparent', 'transparent']}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.fundotitulo}
                >
                    <View style={styles.barrinhaAmarela}></View>
                    <Text style={styles.tituloSecao}>Pixar</Text>
                </LinearGradient>
                <ListaPixar />
            </ScrollView>
            <ScrollView>
                <LinearGradient
                    colors={['black', 'black', 'transparent', 'transparent']}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.fundotitulo}
                >
                    <View style={styles.barrinhaAmarela}></View>
                    <Text style={styles.tituloSecao}>Família</Text>
                </LinearGradient>
                <ListaFamilia/>
            </ScrollView>
            <ScrollView>
                <LinearGradient
                    colors={['black', 'black', 'transparent', 'transparent']}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.fundotitulo}
                >
                    <View style={styles.barrinhaAmarela}></View>
                    <Text style={styles.tituloSecao}>Ação</Text>
                </LinearGradient>
                <ListaAcao/>
            </ScrollView>
            <ScrollView>
                <LinearGradient
                    colors={['black', 'black', 'transparent', 'transparent']}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.fundotitulo}
                >
                    <View style={styles.barrinhaAmarela}></View>
                    <Text style={styles.tituloSecao}>DC</Text>
                </LinearGradient>
                <ListaDC/>
            </ScrollView>
            <ScrollView>
                <LinearGradient
                    colors={['black', 'black', 'transparent', 'transparent']}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.fundotitulo}
                >
                    <View style={styles.barrinhaAmarela}></View>
                    <Text style={styles.tituloSecao}>Marvel</Text>
                </LinearGradient>
                <ListaMarvel/>
            </ScrollView>
            <ScrollView>
                <LinearGradient
                    colors={['black', 'black', 'transparent', 'transparent']}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.fundotitulo}
                >
                    <View style={styles.barrinhaAmarela}></View>
                    <Text style={styles.tituloSecao}>Comédia</Text>
                </LinearGradient>
                <ListaComedia/>
            </ScrollView>

            <ScrollView>
                <LinearGradient
                    colors={['black', 'black', 'transparent', 'transparent']}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.fundotitulo}
                >
                    <View style={styles.barrinhaAmarela}></View>
                    <Text style={styles.tituloSecao}>Aventura</Text>
                </LinearGradient>
                <ListaAventura/>
            </ScrollView><ScrollView>
                <LinearGradient
                    colors={['black', 'black', 'transparent', 'transparent']}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.fundotitulo}
                >
                    <View style={styles.barrinhaAmarela}></View>
                    <Text style={styles.tituloSecao}>Fantasia</Text>
                </LinearGradient>
                <ListaFantasia/>
            </ScrollView>
            <ScrollView>
                <LinearGradient
                    colors={['black', 'black', 'transparent', 'transparent']}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.fundotitulo}
                >
                    <View style={styles.barrinhaAmarela}></View>
                    <Text style={styles.tituloSecao}>Ficção científica</Text>
                </LinearGradient>
                <ListaFiccao/>
            </ScrollView>
            <ScrollView>
                <LinearGradient
                    colors={['black', 'black', 'transparent', 'transparent']}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.fundotitulo}
                >
                    <View style={styles.barrinhaAmarela}></View>
                    <Text style={styles.tituloSecao}>Adultos</Text>
                </LinearGradient>
                <ListaAdultos/>
            </ScrollView>
            <ScrollView>
                <LinearGradient
                    colors={['black', 'black', 'transparent', 'transparent']}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.fundotitulo}
                >
                    <View style={styles.barrinhaAmarela}></View>
                    <Text style={styles.tituloSecao}>Últimos adicionados</Text>
                </LinearGradient>
                <ListaUltimos/>
            </ScrollView>
        </ScrollView>
    )
}