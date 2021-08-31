import React from 'react';

import {View, Text, StatusBar} from 'react-native';
import {SignIn} from './screens/SignIn';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#3F8AE0" barStyle="light-content" />
      <SignIn />
    </>
  );
}
