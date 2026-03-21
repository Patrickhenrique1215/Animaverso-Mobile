import styles from "./index.styles";
import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

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
                    <Text style={styles.tituloSecao}>Lançamentos</Text>
                </LinearGradient>
            </ScrollView>
        </ScrollView>
    )
}