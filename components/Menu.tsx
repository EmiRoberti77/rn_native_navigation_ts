import React, {JSX} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import style from '../screens/styles/style';
import {useNavigation} from '@react-navigation/native';

const Menu = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
        <Text style={style.textContainer}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Restaurant')}>
        <Text style={style.textContainer}>Restaurants</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={style.textContainer}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
