import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const modalDetails = StyleSheet.create({
  
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  
  modalContainer: {
    width: width * 0.9,
    maxHeight: height * 0.85,
    backgroundColor: '#141414',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 40,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'white',
    paddingBottom: 20,
  },
  
  
  modal: {
    backgroundColor: '#141414',
  },
  
  modalContent: {
    paddingBottom: 20,
  },
  
  topo: {
    position: 'relative',
    width: '100%',
    aspectRatio: 16 / 9,
    overflow: 'hidden',
    backgroundColor: '#000',
  },

  imgBackdrop: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  
  closeBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  
  closeBtnText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  
  titleEButtons: {
    position: 'absolute',
    left: 20, 
    bottom: 2,
    right: 20,
  },
  
  tituloModal: {
    fontFamily: 'Mouse',
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  
  notaModal: {
    fontFamily: 'Mouse',
    fontSize: 16,
    color: '#FFD700', 
    marginBottom: 16,
    fontWeight: '600',
  },
  
  botoesContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  
  buttonAssistir: {
    backgroundColor: '#E50914',
    paddingVertical: 10, 
    paddingHorizontal: 24, 
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 38,
    minHeight: 38,
  },
  
  buttonAssistirText: {
    color: '#FFFFFF',
    fontFamily: 'Mouse',
    fontSize: 18,
    lineHeight: 18,
    margin: 0,
    includeFontPadding: false,
  },
  
  addMyLista: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 0,
    paddingHorizontal: 24,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 38,
    minHeight: 38,
   
  },
  
  addMyListaText: {
    color: '#FFFFFF',
    fontSize: 38,
    fontFamily: 'Mouse',
    lineHeight: 38,
    margin: 0,
    includeFontPadding: false,
  },
  
  sinopse: {
    padding: 20,
    
  },
  
  titleSinopse: {
    fontSize: 18,
   fontFamily: 'Mouse',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  
  textoSinopse: {
    fontFamily: 'Mouse',
    fontSize: 14,
    color: '#CCCCCC',
    lineHeight: 20,
  },
  
  // Container de informações da mídia
  infosMidia: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 20,
    
  },
  
  // Coluna de informações
  infoColuna: {
    flex: 1,
    gap: 8,
    
  },
  
  infoText: {
    fontFamily: 'Mouse',
    fontSize: 12,
    color: '#CCCCCC',
    lineHeight: 18,
  },
  
  // Seção de imagens adicionais
  imagensMidia: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  
  // Scroll horizontal de imagens
  imagensScroll: {
    marginTop: 10,
  },
  
  // Imagem adicional
  imagemAdicional: {
    width: 150,
    height: 84,
    borderRadius: 6,
    marginRight: 10,
    resizeMode: 'cover',
  },
});

export default modalDetails;