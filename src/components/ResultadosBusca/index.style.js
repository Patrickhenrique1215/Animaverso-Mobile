import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const cardWidth = (width - 16 * 3) / 2;
const cardMargin = (width - cardWidth * 2) / 4;

const styles = StyleSheet.create({

    flat: {
       width: '100%',
    },


    tituloSecao: {
        color: '#b0d1f7',
        fontFamily: 'Mouse',
        fontSize: 28,
        marginBottom: 8,
        marginLeft: 16,
        alignSelf: 'flex-start'

    },




    cardLinkRes: {
        position: 'relative',
        width: cardWidth,
        aspectRatio: 2 / 3,
        borderRadius: 8,
        shadowColor: '#706c6c',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 3, 
        overflow: 'hidden',
        marginBottom: 20,
        marginHorizontal: cardMargin,
    },
  
    imgCardRes: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
    },

})

export default styles;