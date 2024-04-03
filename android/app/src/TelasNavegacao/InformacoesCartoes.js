import React from 'react';
import { View, Text } from 'react-native';
import CartoesStyles from '../Styles/CartoesStyles';

function InformacoesCartoes() {
    const { container, title, cartoesContainer, cartao } = CartoesStyles;

    return (
        <View style={container}>
          <Text style={title}>Informações dos Cartões Aceitos</Text>
          <View style={cartoesContainer}>
            <Text style={cartao}>Master</Text>
            <Text style={cartao}>Visa</Text>
            <Text style={cartao}>Elo</Text>
            <Text style={cartao}>American Express</Text>
            <Text style={cartao}>Hipercard</Text>
            <Text style={cartao}>Hiper</Text>
            <Text style={cartao}>Dinner's Club</Text>
          </View>
        </View>
      );
    }

export default InformacoesCartoes;