import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavegacaoStyles from './Styles/NavegacaoStyles';

function NavegacaoInferior() {
  const navigation = useNavigation();

  return (
    <View style={NavegacaoStyles.container}>
      <TouchableOpacity style={NavegacaoStyles.button} onPress={() => navigation.navigate('TelaInicial')}>
        <Text style={NavegacaoStyles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={NavegacaoStyles.button} onPress={() => navigation.navigate('InformacoesCartoes')}>
        <Text style={NavegacaoStyles.buttonText}>Cartões Aceitos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={NavegacaoStyles.button} onPress={() => navigation.navigate('DadosEmpresa')}>
        <Text style={NavegacaoStyles.buttonText}>Dados da Empresa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={NavegacaoStyles.button} onPress={() => navigation.navigate('CategoriasProdutos')}>
        <Text style={NavegacaoStyles.buttonText}>Categorias de Produtos</Text>
      </TouchableOpacity>      
    </View>
  );
}

export default NavegacaoInferior;