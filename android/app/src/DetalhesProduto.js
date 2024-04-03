import * as React from 'react';
import { View, Text } from 'react-native';
import DetalhesStyles from './Styles/DetalhesStyles';

function DetalhesProduto({ route }) {
  const { productName, price } = route.params;
  
  const descriptions = {
    'Vestido': 'Um lindo vestido perfeito para qualquer ocasião.',
    'Conjunto Feminino': 'Conjunto composto por blusa e saia. Ideal para looks casuais.',
    'Camisas polo': 'Camisas polo de alta qualidade e conforto.',
    'Conjunto Masculino': 'Conjunto de camiseta e bermuda com design moderno e elegante.'
  };

  return (
    <View style={DetalhesStyles.container}>
      <Text style={DetalhesStyles.productName}>{productName}</Text>
      <Text style={DetalhesStyles.price}>{price}</Text>
      <Text style={DetalhesStyles.description}>{descriptions[productName]}</Text>      
    </View>
  );
}

export default DetalhesProduto;