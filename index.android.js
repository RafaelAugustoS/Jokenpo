import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Topo from './src/components/topo'
import Icone from './src/components/icone'


class app3 extends Component {

  constructor(props){
    super(props);

    this.state = {escolhaUsuario: '', escolhaComputador: '', resultado: ''}
  }

  jokenpo(escolhaUsuario){
    const numA = Math.floor(Math.random() * 3);
    let escolhaComputador = '';

    switch(numA){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: escolhaComputador = '';
    }

    let resultado = '';
  
    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Você ganhou';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Você perdeu';
      }
    }

    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Você ganhou';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Você perdeu';
      }
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Você ganhou';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Você perdeu';
      }
    }

    this.setState({escolhaUsuario, escolhaComputador, resultado});

  }

  render() {
    return (
      <View>
        <Topo></Topo>

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={() => {this.jokenpo('pedra')}}/>
          </View>
          <View style={styles.btnEscolha}>  
            <Button title="papel" onPress={() => {this.jokenpo('papel')}}/>
          </View>  
          <View style={styles.btnEscolha}>
            <Button title="tesoura" onPress={() => {this.jokenpo('tesoura')}}/>
          </View>  
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Usuario'></Icone>
        </View>
      </View>  
    );
  }
}





const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
  txtJogador: {
    alignItems: 'center',
    marginBottom: 20
  }
});

AppRegistry.registerComponent('app3', () => app3);
