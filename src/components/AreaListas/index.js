import styles from "./index.styles";
import { View, Text, ScrollView, Animated } from "react-native";
import { useRef, useEffect } from "react";
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

    //Refs
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(15)).current;

    //Efeito de fade in
    useEffect(() => {
        Animated.parallel([
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }),
        Animated.timing(translateY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        })
        ]).start();
    }, []);


    return(
        <ScrollView style={styles.caixota}>
            <Animated.View
                style={{
                opacity: fadeAnim,
                transform: [{ translateY }]
                }}
            >
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

            </Animated.View>
            <Animated.View
                style={{
                opacity: fadeAnim,
                transform: [{ translateY }]
                }}
            >
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
            </Animated.View>
            <Animated.View
                style={{
                opacity: fadeAnim,
                transform: [{ translateY }]
                }}
            >
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
            </Animated.View>
            <Animated.View
                style={{
                opacity: fadeAnim,
                transform: [{ translateY }]
                }}
            >
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
            </Animated.View>
            <Animated.View
                style={{
                opacity: fadeAnim,
                transform: [{ translateY }]
                }}
            >
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
            </Animated.View>
            <Animated.View
                style={{
                opacity: fadeAnim,
                transform: [{ translateY }]
                }}
            >
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
            </Animated.View>
            <Animated.View
                style={{
                opacity: fadeAnim,
                transform: [{ translateY }]
                }}
            >
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
            </Animated.View>
            <Animated.View
                style={{
                opacity: fadeAnim,
                transform: [{ translateY }]
                }}
            >
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
            </Animated.View>
            <Animated.View
                style={{
                opacity: fadeAnim,
                transform: [{ translateY }]
                }}
            >
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
            </Animated.View>

            <Animated.View
                style={{
                opacity: fadeAnim,
                transform: [{ translateY }]
                }}
            >
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
            </Animated.View><Animated.View
                style={{
                opacity: fadeAnim,
                transform: [{ translateY }]
                }}
            >
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
            </Animated.View>
            <Animated.View
                style={{
                opacity: fadeAnim,
                transform: [{ translateY }]
                }}
            >
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
            </Animated.View>
            <Animated.View
                style={{
                opacity: fadeAnim,
                transform: [{ translateY }]
                }}
            >
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
            </Animated.View>
            <Animated.View
                style={{
                opacity: fadeAnim,
                transform: [{ translateY }]
                }}
            >
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
            </Animated.View>
        </ScrollView>
    )
}