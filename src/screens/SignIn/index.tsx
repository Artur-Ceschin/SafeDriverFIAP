import React from 'react';
import {TextInput, Button} from 'react-native-paper';
import {Image, View, Text} from 'react-native';
import logoImg from '../../assets/logo.png';
import {Container, FlexButtonContainer} from './styles';

export function SignIn() {
  return (
    <Container>
      <Image source={logoImg} />
      <TextInput mode="outlined" label="Login" placeholder="email ou usuário" />
      <TextInput mode="outlined" label="senha" placeholder="senha" />
      <FlexButtonContainer>
        <Button
          style={{borderColor: '#3F8AE0', marginRight: 10}}
          mode="outlined">
          Cadastrar
        </Button>
        <Button mode="contained">Entrar</Button>
      </FlexButtonContainer>
    </Container>
  );
}
