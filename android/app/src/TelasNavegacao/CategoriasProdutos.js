import React from 'react';
import { View, Text } from 'react-native';
import CategoriasStyles from '../Styles/CategoriasStyles';

function CategoriasProdutos() {
  const { container, title, categoriasContainer, categoria } = CategoriasStyles;

  return (
    <View style={container}>
      <Text style={title}>Categorias de Produtos</Text>
      <View style={categoriasContainer}>
        <Text style={categoria}>Moda Feminina</Text>
        <Text style={categoria}>Moda Masculina</Text>
      </View>
    </View>
  );
}

export default CategoriasProdutos;