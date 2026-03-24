import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const modalDetails = StyleSheet.create({
  // Overlay do modal
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  
  // Container do modal (para capturar cliques)
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
  },
  
  // ScrollView do modal
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
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  
  closeBtnText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  titleEButtons: {
    position: 'absolute',
    left: 20, 
    bottom: 20,
    right: 20,
  },
  
  tituloModal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  
  notaModal: {
    fontSize: 16,
    color: '#FFD700', 
    marginBottom: 16,
    fontWeight: '600',
  },
  
  botoesContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  
  buttonAssistir: {
    backgroundColor: '#E50914',
    paddingVertical: 10, 
    paddingHorizontal: 24, 
    borderRadius: 5,
  },
  
  buttonAssistirText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  
  addMyLista: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  
  addMyListaText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  sinopse: {
    padding: 20,
  },
  
  titleSinopse: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  
  textoSinopse: {
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