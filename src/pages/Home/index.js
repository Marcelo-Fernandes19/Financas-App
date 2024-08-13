import { View,Text, Button } from 'react-native';
import React, {useContext, useState} from 'react';
//import AppRoutes from '../../routes/app.routes';

import { AuthContext } from '../../contexts/auth';
import { Container, Nome , Background, Saldo, Title, List} from './styles';
import HistoricoList from '../../componentes/HistoricoList';

export default function Home() {

const [historico, setHistorico] = useState([
 {key: '1', tipo: 'receita', valor: 1200},
 {key: '2', tipo: 'despesa', valor: 200},
 {key: '3', tipo: 'receita', valor: 40},
 {key: '4', tipo: 'receita', valor: 89.62},
 {key: '5', tipo: 'despesa', valor: 500},
 {key: '6', tipo: 'despesa', valor: 310},
 {key: '7', tipo: 'receita', valor: 800},
]);

const {user} = useContext(AuthContext);

 return (
   <Background>
    <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>R$ 123,00 </Saldo>
    </Container>
    <Title>Ultimas Movimentações</Title>

  <List
   showsVerticalScrollIndicator={false}
   data={historico}
   keyExtractor={item => item.key}
   renderItem={({item}) =>(<HistoricoList data={item}/> )}

/>

   </Background>
  );
}