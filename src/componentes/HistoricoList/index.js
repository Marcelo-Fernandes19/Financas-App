import React from 'react';
import { Container, Tipo, IconView, TipoText, ValorText } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';  // Certifique-se de importar o ícone corretamente

export default function HistoricoList({data}) {
  return (
    <Container>
      <Tipo>
        <IconView tipo = {data.tipo}>
          <Icon 
          name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'}
           color= '#FFF'
           size={20} />
          <TipoText>{data.tipo}</TipoText>
        </IconView>
      </Tipo>
      <ValorText>
        R${data.valor}
      </ValorText>
    </Container>
  );
}
