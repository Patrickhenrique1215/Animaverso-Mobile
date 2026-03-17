import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function Header() {

    //States
    const [menuAberto, setMenuAberto] = useState(false);

    //Funções
    const toggleMenu = () => setMenuAberto(!menuAberto);

    return (
        <View style={styles.header}>

        <TouchableOpacity>
            <Image
            source={require('../../../assets/logosemfundo.png')} 
            style={styles.logo}
            resizeMode="contain"
            />
        </TouchableOpacity>

        <View style={styles.dropdownContainer}>
            <TouchableOpacity style={styles.dropdownButton} onPress={toggleMenu}>
            <Text style={styles.dropdownText}>Categorias</Text>
            <Text style={styles.chevron}>▼</Text>
            </TouchableOpacity>

            {menuAberto && (
            <View style={styles.dropdownContent}>
                <ScrollView style={{ maxHeight: 320 }}>
                
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
                        <TouchableOpacity key={item} style={styles.item}>
                        <Text style={styles.itemText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Classificação indicativa</Text>
                    <View style={styles.grid}>
                    {['L - Livre', '10', '12', '14', '16', '18'].map((item) => (
                        <TouchableOpacity key={item} style={styles.item}>
                        <Text style={styles.itemText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                    </View>
                </View>
                </ScrollView>
            </View>
            )}
        </View>

        <TextInput
            style={styles.inputPesquisar}
            placeholder="Pesquisar"
            placeholderTextColor="#aaa"
            // value={texto}
            // onChangeText={setTexto}
        />
        </View>
    );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    width: 90,
    height: 40,
  },

  dropdownContainer: {
    position: 'relative',
  },

  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(164,164,175,0.5)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  dropdownText: {
    color: 'white',
    fontSize: 14,
  },

  chevron: {
    color: 'white',
    marginLeft: 6,
    fontSize: 14,
  },

  dropdownContent: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: 260,
    backgroundColor: 'rgba(0,0,0,0.95)',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
    zIndex: 1000,
    elevation: 5, // sombra no Android
  },

  section: {
    marginBottom: 16,
  },

  sectionTitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 6,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'rgba(234,227,227,1)',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8, // ⚠️ funciona só em versões mais novas
  },

  item: {
    borderBottomWidth: 1,
    borderColor: 'rgba(225,220,220,0.4)',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },

  itemText: {
    color: '#e8e9f0',
    fontSize: 14,
  },

  inputPesquisar: {
    backgroundColor: '#111',
    color: 'white',
    borderRadius: 6,
    paddingHorizontal: 8,
    height: 36,
    width: 120,
  },
});