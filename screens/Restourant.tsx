import React, {JSX} from 'react';
import {View, Text} from 'react-native';
import RestourantCard from '../components/RestourantCard';
import style from './styles/style';
import Menu from '../components/Menu';

const Restourant = (): JSX.Element => {
  return (
    <View>
      <Text style={style.titleText}>Restourant</Text>
      <View style={style.container}>
        <RestourantCard name="Restaurant5" />
        <RestourantCard name="Restaurant6" />
        <RestourantCard name="Restaurant7" />
        <RestourantCard name="Restaurant8" />
        <RestourantCard name="Restaurant9" />
      </View>
      <Menu />
    </View>
  );
};

export default Restourant;
