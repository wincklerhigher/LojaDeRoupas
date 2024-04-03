import * as React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStyles from './android/app/src/Styles/AppStyles';
import DetalhesProduto from './android/app/src/DetalhesProduto';
import BotaoHome from './android/app/src/TelasNavegacao/BotaoHome';
import NavegacaoInferior from './android/app/src/NavegacaoInferior';
import CategoriasProdutos from './android/app/src/TelasNavegacao/CategoriasProdutos';
import DadosEmpresa from './android/app/src/TelasNavegacao/DadosEmpresa';
import InformacoesCartoes from './android/app/src/TelasNavegacao/InformacoesCartoes';


function TelaInicial({ navigation }) {
  const navigateToDetalhesProduto = (productName, price) => {
    navigation.navigate('DetalhesProduto', {
      productName: productName,
      price: price
    });
  };

  // Header

  return (
    <ScrollView contentContainerStyle={AppStyles.scrollViewContent}>
      <View>        
        <View style={AppStyles.header}>          
          <View style={AppStyles.cartContainer}>
            <Image
              source={require('./android/app/src/Imagens/carrinho.png')}
              style={AppStyles.cartIcon}
            />
            <Text style={AppStyles.cartText}>Carrinho</Text>
          </View>          
          <View style={AppStyles.searchContainer}>
            <Image
              source={require('./android/app/src/Imagens/lupa.png')}
              style={AppStyles.searchIcon}
            />
            <TextInput
              placeholder="Buscar"
              style={AppStyles.searchInput}
            />
          </View>
        </View>
                
        {/* Imagem Tela Inicial */}

        <Image
          source={require('./android/app/src/Imagens/foto1.jpg')}
          style={AppStyles.imagemPrincipal}
        />

        {/* Modalidades de roupas */}
        
        <Text style={AppStyles.subtitulo}>Moda Feminina</Text>        
        <View style={AppStyles.produtosContainer}>          
          <TouchableOpacity onPress={() => navigateToDetalhesProduto("Vestido", "R$ 99,90")}>
            <View style={AppStyles.produto}>
              <Image
                source={require('./android/app/src/Imagens/vestido.png')}
                style={AppStyles.imagemProduto}
              />
              <Text style={AppStyles.nomeProduto}>Vestido</Text>
              <Text style={AppStyles.precoProduto}>R$ 99,90</Text>
            </View>
          </TouchableOpacity>          
          <TouchableOpacity onPress={() => navigateToDetalhesProduto("Conjunto Feminino", "R$ 109,90")}>
            <View style={AppStyles.produto}>
              <Image
                source={require('./android/app/src/Imagens/conjunto.png')}
                style={AppStyles.imagemProduto}
              />
              <Text style={AppStyles.nomeProduto}>Conjunto Feminino</Text>
              <Text style={AppStyles.precoProduto}>R$ 109,90</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <Text style={AppStyles.subtitulo}>Moda Masculina</Text>
        <View style={AppStyles.produtosContainer}>
          <TouchableOpacity onPress={() => navigateToDetalhesProduto("Camisas polo", "R$ 99,90")}>
            <View style={AppStyles.produto}>
              <Image
                source={require('./android/app/src/Imagens/camisaPolo.png')}
                style={AppStyles.imagemProduto}
              />
              <Text style={AppStyles.nomeProduto}>Camisas polo</Text>
              <Text style={AppStyles.precoProduto}>R$ 99,90</Text>
            </View>
          </TouchableOpacity>          
          <TouchableOpacity onPress={() => navigateToDetalhesProduto("Conjunto Masculino", "R$ 109,90")}>
            <View style={AppStyles.produto}>
              <Image
                source={require('./android/app/src/Imagens/conjuntoMasculino.png')}
                style={AppStyles.imagemProduto}
              />
              <Text style={AppStyles.nomeProduto}>Conjunto Masculino</Text>
              <Text style={AppStyles.precoProduto}>R$ 109,90</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={AppStyles.textoContainer}>
          <Text style={AppStyles.textoBemVindo}>
            Bem vindos ao BAZZAAR
          </Text>
        </View>

        {/* Apresentação */}

        <View style={AppStyles.textoContainer}>
          <Text style={AppStyles.textoApresentacao}>
            Descubra as últimas tendências da moda feminina e masculina no BAZZAAR. 
            Encontre peças exclusivas e estilosas para expressar sua personalidade e criar looks incríveis para todas as ocasiões.
          </Text>
        </View>

        <Text style={AppStyles.textoEndereco}>
          Endereço: Rua XX, Número YY - Bairro ZZ - Cidade/Estado
          {'\n'}
          {'\n'}
          Aberto de segunda a sexta das 10:00 às 21:00.
        </Text>

        {/* Footer */}
        
        <View style={AppStyles.footer}>
          <Text style={AppStyles.textoAceitamosCartoes}>Aceitamos os seguintes cartões:</Text>          
          <Image
            source={require('./android/app/src/Imagens/cards.jpg')}
            style={AppStyles.imagemCartoes}
          />
        </View>
        
        <View style={AppStyles.redesContainer}>
          <Text style={AppStyles.textoRedes}>Fique atento às novidades:</Text>
          <Image
            source={require('./android/app/src/Imagens/redes.png')}
            style={AppStyles.imagemRedesSociais}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} />
        <Stack.Screen name="Home" component={BotaoHome} />        
        <Stack.Screen name="InformacoesCartoes" component={InformacoesCartoes} />
        <Stack.Screen name="DadosEmpresa" component={DadosEmpresa} />
        <Stack.Screen name="CategoriasProdutos" component={CategoriasProdutos} />
      </Stack.Navigator>
      <NavegacaoInferior />
    </NavigationContainer>
  );
}

export default App;