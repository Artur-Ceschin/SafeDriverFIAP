import React from 'react';
import {TextInput, Button} from 'react-native-paper';
import {Image, View, Text} from 'react-native';
import profileImg from '../../assets/image/profile.png';
import {Container, FlexButtonContainer, ImageProfile} from './styles';
import {Header} from '../../Header';

export function SignUp() {
  return (
    <>
      <Header />
      <Container>
        <ImageProfile source={profileImg} />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginBottom: 15,
          }}>
          João Carlos
        </Text>
        <TextInput mode="outlined" label="Nome" />
        <TextInput mode="outlined" label="Data de nascimento" />
        <TextInput
          mode="outlined"
          label="Motorista profissional"
          keyboardType="decimal-pad"
        />

        <TextInput mode="outlined" label="CPF" keyboardType="numeric" />

        <TextInput mode="outlined" label="CNH" keyboardType="numeric" />

        <TextInput mode="outlined" label="Validade CNH" />

        <TextInput mode="outlined" label="Seguradora" />

        <TextInput mode="outlined" label="Empresa" />

        <TextInput
          mode="outlined"
          label="Senha"
          keyboardType="visible-password"
        />

        <FlexButtonContainer>
          <Button mode="contained">Salvar</Button>
        </FlexButtonContainer>
      </Container>
    </>
  );
}
