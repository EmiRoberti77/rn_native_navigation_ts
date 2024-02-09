import React, {JSX} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import style from '../screens/styles/style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigatorProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParams} from '../App';

const Menu = (): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigatorProps<RootStackParams>>();
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
        <Text style={style.textContainer}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Restourants')}>
        <Text style={style.textContainer}>Restaurants</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={style.textContainer}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
