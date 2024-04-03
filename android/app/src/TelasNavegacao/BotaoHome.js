import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BotaoHome() {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('TelaInicial'); 
  };

  return (
    <TouchableOpacity onPress={navigateToHome}>
      <Text>Home</Text>
    </TouchableOpacity>
  );
}

export default BotaoHome;