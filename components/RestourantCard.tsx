import React, {FC, JSX} from 'react';
import {View, Text} from 'react-native';
import style from '../screens/styles/style';

interface RestourantCardProps {
  name: string;
}

const RestourantCard: FC<RestourantCardProps> = ({name}): JSX.Element => {
  return (
    <View style={style.textContainer}>
      <Text style={style.textContainer}>Restourant:{name}</Text>
    </View>
  );
};

export default RestourantCard;
