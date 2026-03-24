import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const listas = StyleSheet.create({
  
cardLink: {
        position: 'relative',
        width: width * 0.38,
        aspectRatio: 2 / 3,
        marginHorizontal: 8,
        borderRadius: 8,

        shadowColor: '#706c6c',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 3, 
        overflow: 'hidden',
    },
  
  imgCard: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },

  hoverContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  
  hoverCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    paddingBottom: 8,
    zIndex: 1,
    
  },
  
  topoHoverCard: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    gap: 6,
  },
  
  tituloHover: {
    fontFamily: 'Mouse',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#64affa',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  
  notaHover: {
    color: '#FFD700', 
    fontFamily: 'Mouse',
    fontSize: 12,
    marginBottom: 18,
  },
  
  botoesHoverCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 2,
    marginBottom: 4,
    gap: 4,
  },
  
  button: {
    width: 40, 
    height: 40,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(175, 174, 174, 0.3)',
    borderRadius: 20, // 50% de 40px
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  
  buttonImage: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  
});

export default listas;