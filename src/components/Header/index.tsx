import React, {ReactNode} from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';
import {Appbar} from 'react-native-paper';
import {View, Image, Text} from 'react-native';
import {ImageProfile} from './styles';
import drawerImg from '../assets/image/drawer.png';
import profileImg from '../assets/image/profile.png';

interface HeaderProps {
  title: string;
  action?: ReactNode;
}

export function Header() {
  const _goBack = () => console.log('Went back');

  const _handleMore = () => console.log('Shown more');
  return (
    <View>
      <Appbar.Header>
        {/* <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.Action size={50} icon={drawerImg} />
        <Appbar.Content title="Home" />
        <ImageProfile source={profileImg} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
    </View>
  );
}
