import React, {JSX} from 'react';
import {View, Text, Button} from 'react-native';
import Menu from '../components/Menu';

const Profile = (): JSX.Element => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Button" />
      <Menu />
    </View>
  );
};

export default Profile;
