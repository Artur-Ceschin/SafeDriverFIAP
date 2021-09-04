import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {View, Text, StatusBar} from 'react-native';
import {SignIn} from './screens/SignIn';
import {SignUp} from './screens/SignUp';
import {Home} from './screens/Home';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3F8AE0',
    accent: '#f1c40f',
    onSurface: 'orange',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#3F8AE0" barStyle="light-content" />
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <Home />
    </PaperProvider>
  );
}
