import React, {JSX} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RestourantCard from '../components/RestourantCard';
import style from './styles/style';
import Menu from '../components/Menu';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../App';
import {NativeStackNavigatorProps} from '@react-navigation/native-stack/lib/typescript/src/types';

const Restourants = (): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigatorProps<RootStackParams>>();

  return (
    <View>
      <Text style={style.titleText}>Restourant</Text>
      <View style={style.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RestourantScreen', {name: 'Sushi Bar'});
          }}>
          <RestourantCard name="Sushi Bar" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RestourantScreen', {name: 'Pizzeria Tetto'});
          }}>
          <RestourantCard name="Pizzeria Tetto" />
        </TouchableOpacity>
        <TouchableOpacity>
          <RestourantCard name="Chinese world" />
        </TouchableOpacity>
        <TouchableOpacity>
          <RestourantCard name="Indian House" />
        </TouchableOpacity>
        <TouchableOpacity>
          <RestourantCard name="Tai rice" />
        </TouchableOpacity>
      </View>
      <Menu />
    </View>
  );
};

export default Restourants;
