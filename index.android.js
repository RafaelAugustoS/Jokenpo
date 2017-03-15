import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';




class app3 extends Component {

  constructor(props){
    super(props);

    this.state = {escolhaUsuario: '', escolhaComputador: '', resultado: ''}
  }

  jokenpo(escolhaUsuario){
    var numA = Math.floor(Math.random() * 3);
    var escolhaComputador = '';

    switch(numA){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    var resultado = '';
  
    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Usuario ganhou';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Computador Ganhou';
      }
    }

    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Usuario ganhou';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Computador Ganhou';
      }
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Usuario ganhou';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Computador Ganhou';
      }
    }

    this.setState({escolhaUsuario: escolhaUsuario, escolhaComputador: escolhaComputador, resultado: resultado});

  }

  render() {
    return (
      <View>
        <View>
          <Image soucer={require('./images/jokenpo.png')}/>
        </View>

        <View>

        </View>

        <View>
        </View>
        <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
        <Text>Escolha do Usuario: {this.state.escolhaUsuario}</Text>
        <Text>Resultado : {this.state.resultado}</Text>
        <Button title="pedra" onPress={() => {this.jokenpo('pedra')}}/>
        <Button title="papel" onPress={() => {this.jokenpo('papel')}}/>
        <Button title="tesoura" onPress={() => {this.jokenpo('tesoura')}}/>
      </View>  
    );
  }
}



AppRegistry.registerComponent('app3', () => app3);
