import React, {JSX} from 'react';
import {View, Text, Button} from 'react-native';
import Menu from '../components/Menu';
import style from './styles/style';

const Profile = (): JSX.Element => {
  return (
    <View>
      <Text style={style.titleText}>Profile</Text>
      <Button title="Button" />
      <Menu />
    </View>
  );
};

export default Profile;
