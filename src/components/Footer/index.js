import { View, Text, Image, Linking } from 'react-native';
import styles from './index.styles';

export default function Footer(){
    return(
        <View style={styles.footer}>
            <Text style={styles.desenv}>Desenvolvido por <Text onPress={() => Linking.openURL('https://portfolio-patrick-henrique.vercel.app/')} style={styles.linkdesenv}>Patrick Henrique</Text> - 2026</Text>
            <View style={styles.viewtmdb}>
                <Text style={styles.desenv}>Este produto usa a API do </Text>
                <Image source={require('../../../assets/tmdb.png')} resizeMode='contain' style={styles.imgtmdb} />
                <Text style={styles.desenv}> , mas não é endossado ou certificado pelo TMDB.</Text>
            </View>
        </View>
    )
}

