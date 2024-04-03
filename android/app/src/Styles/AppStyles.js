import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  imagemPrincipal: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  produtosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  produto: {
    flex: 1,
    alignItems: 'center',
  },
  imagemProduto: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  precoProduto: {
    fontSize: 14,
    color: 'green',
  },
  textoContainer: {    
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBemVindo: {  
    marginTop: 20,  
    fontSize: 18,
    fontWeight: 'bold',    
  },
  textoApresentacao: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'justify',
  },    
  textoEndereco: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 90,     
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',    
  },
  imagemRedesSociais: {
    width: 55,
    height: 50,
    marginLeft: 10,
  },
  textoAceitamosCartoes: {
    fontSize: 13,
  },
  textoRedes: {
    fontSize: 13,
  },
  imagemCartoes: {
    width: 110,
    height: 45,
    marginLeft: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 20,     
  },  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  cartText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 21,
    height: 21,
    marginRight: 5,    
  },
  searchInput: {    
    fontSize: 14,
    paddingVertical: 5,
  },
  redesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
});

export default AppStyles;