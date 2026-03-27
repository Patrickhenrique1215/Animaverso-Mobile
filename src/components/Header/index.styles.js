import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    height: 90,
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000,
  },

  logo: {
    width: 80,
    height: 80
  },

  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(164,164,175,0.5)',
    borderRadius: 6,
    paddingHorizontal: 14,
    height: 36,
  },

  dropdownText: {
    color: 'white',
    fontFamily: 'Mouse',
    fontSize: 20,
  },

  chevron: {
    color: 'white',
    marginLeft: 6,
    fontFamily: 'Mouse',
    fontSize: 14,
  },

  inputPesquisar: {
    backgroundColor: '#e3dbdb',
    borderRadius: 6,
    height: 36,
    width: 120,
    fontFamily: 'Mouse',
    fontSize: 17,
    color: '#434141',
    paddingLeft: 8,
    paddingVertical: 0,
    textAlignVertical: 'center', // 👈 MUITO IMPORTANTE (Android)
    lineHeight: 36,
  },

  dropContent: {
    position: 'absolute',
    top: 64,
    left: 0,
    right: 0, 
    marginHorizontal: '5%',
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 8,
    padding: 0,
  },

  overlay: {
    width: '100%',
    margin: 0,
    paddingHorizontal: 30,
    paddingTop: 20,
  },


  scrollContent: {
    flexDirection: 'row',
    gap: 40,
  },

  section: {
    marginBottom: 16,
  },

  sectionTitle: {
    color: 'white',
    fontFamily: 'Mouse',
    fontSize: 24,
    marginBottom: 8,
    paddingLeft: 6,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'rgba(234,227,227,1)',
  },

  item: {
    borderBottomWidth: 1,
    borderColor: 'rgba(225,220,220,0.4)',
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginTop: 22,
  },

  itemText: {
    color: '#e8e9f0',
    fontFamily: 'Mouse',
    fontSize: 22,
  },

});

export default styles;