import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    caixaSuperior: {
        flex: 1,
    },

    tituloSecao: {
        color: '#b0d1f7',
        fontFamily: 'Mouse',
        fontSize: 28,
        marginBottom: 8,
        marginLeft: 9,

    },

    scrollviewPrincipal: {
       flex: 1,
    },

    containerCards: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    cardLinkRes: {
        position: 'relative',
        width: (width / 2) - 16,
        aspectRatio: 2 / 3,
        marginHorizontal: 8,
        borderRadius: 8,
        shadowColor: '#706c6c',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 3, 
        overflow: 'hidden',
        marginBottom: 20
    },
  
    imgCardRes: {
        width: '100%',
        height: 280,
        resizeMode: 'cover', 
    },

})

export default styles;