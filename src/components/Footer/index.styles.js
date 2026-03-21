import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 5,
    },

    desenv: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Mouse',
        fontSize: 10,
        opacity: 0.5,
        fontWeight: 200,

    },

    linkdesenv: {
        textDecorationLine: 'underline',
        fontFamily: 'Mouse',
        color: 'white',
    },

    viewtmdb: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },

    imgtmdb: {
        width: 90,
        height: 6,
        opacity: 0.5,
    }
})

export default styles;