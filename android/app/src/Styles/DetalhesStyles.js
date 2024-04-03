import { StyleSheet } from 'react-native';

const DetalhesStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F8F8F8', 
      paddingHorizontal: 20, 
    },
    productName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333333', 
    },
    price: {
      fontSize: 20,
      marginBottom: 10,
      color: '#008080', 
    },
    description: {
      fontSize: 18,
      textAlign: 'center',
      color: '#666666', 
    },
  });
  
  export default DetalhesStyles;