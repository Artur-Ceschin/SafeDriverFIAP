import React from 'react';
import {TextInput, Button} from 'react-native-paper';
import {Image, View, Text} from 'react-native';
import logoImg from '../../assets/logo.png';
import {styles} from './styles';

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} />
      <Text style={styles.title}>Faça seu Login</Text>
      <TextInput mode="outlined" label="Login" placeholder="email ou usuário" />
      <TextInput mode="outlined" label="senha" placeholder="senha" />
      <Button icon="camera" mode="contained">
        Cadastrar
      </Button>
      <Button icon="camera" mode="contained">
        Entrar
      </Button>
    </View>
  );
}
