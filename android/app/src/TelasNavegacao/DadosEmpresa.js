import React from 'react';
import { View, Text } from 'react-native';
import EmpresaStyles from '../Styles/EmpresaStyles';

function DadosEmpresa() {
  const { container, title, text } = EmpresaStyles;

  return (
    <View style={container}>
      <Text style={title}>História da BAZZAAR</Text>
      <Text style={text}>
        A BAZZAAR é uma empresa de moda com uma história única. Fundada em 2017 por um grupo de jovens empreendedores apaixonados por estilo e inovação, a BAZZAAR rapidamente se tornou uma das principais marcas de moda do país.
      </Text>
      <Text style={text}>
        Nossa missão é oferecer aos nossos clientes as últimas tendências da moda, combinadas com qualidade excepcional e atendimento ao cliente de primeira classe. Estamos comprometidos em inspirar as pessoas a expressar sua individualidade através da moda e ajudá-las a se sentirem confiantes e estilosas em todas as ocasiões.
      </Text>
      <Text style={text}>
        Ao longo dos anos, expandimos nossa linha de produtos para incluir uma ampla variedade de roupas e acessórios para homens e mulheres de todas as idades. Desde roupas casuais até peças de alta costura, temos algo para todos os gostos e estilos.
      </Text>
    </View>
  );
}

export default DadosEmpresa;