import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

class Icone extends Component{
  render(){
    if(this.props.escolha == 'pedra'){
      return(
        <View style={styles.txtJogador}>
          <Text>{this.props.jogador}</Text>
          <Image source={require('../../images/pedra.png')} />
        </View>  
      );

    }else if(this.props.escolha == 'papel'){
      return(
        <View style={styles.txtJogador}>
          <Text>{this.props.jogador}</Text>
          <Image source={require('../../images/papel.png')} />
        </View>  
      );

    }else if(this.props.escolha == 'tesoura'){
      return(
        <View style={styles.txtJogador}>
          <Text>{this.props.jogador}</Text>
          <Image source={require('../../images/tesoura.png')} />
        </View>  
      );
    }else{
      return false;
    }
  }
}

const styles = StyleSheet.create({
  txtJogador: {
    alignItems: 'center',
    marginBottom: 20
  }
});

export default Icone;