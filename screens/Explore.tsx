import React, {JSX} from 'react';
import style from './styles/style';
import {View, Text} from 'react-native';
import RestourantCard from '../components/RestourantCard';
import Menu from '../components/Menu';

const Explore = (): JSX.Element => {
  return (
    <View>
      <Text style={style.titleText}>Explore</Text>
      <View style={style.container}>
        <RestourantCard name="Restaurant1" />
        <RestourantCard name="Restaurant2" />
        <RestourantCard name="Restaurant3" />
        <RestourantCard name="Restaurant4" />
      </View>
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

export default Explore;
