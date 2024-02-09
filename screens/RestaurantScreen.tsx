import React, {FC, JSX} from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import Menu from '../components/Menu';
import style from './styles/style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';
import RestourantCard from '../components/RestourantCard';

type Props = NativeStackNavigationProp<RootStackParams, 'RestourantScreen'>;

const RestaurantScreen: FC<Props> = ({
  route,
  navigation,
}: Props): JSX.Element => {
  const {name} = route.params;

  const createRelatedRestaurants = (): string[] => {
    var suggestionName: string = '';
    if ((name as string).startsWith('Sushi')) {
      suggestionName = 'Sushi';
    } else if ((name as string).startsWith('Pizzeria')) {
      suggestionName = 'Pizza House';
    } else if ((name as string).startsWith('India')) {
      suggestionName = 'Indian House';
    } else if ((name as string).startsWith('Chinese')) {
      suggestionName = 'Chinese House';
    } else if ((name as string).startsWith('Tai')) {
      suggestionName = 'Chinese Cooking';
    }

    const suggestionsArray: string[] = [];
    for (var i = 0; i < 3; i++) {
      suggestionsArray.push(suggestionName + i);
    }
    return suggestionsArray;
  };

  const bookTable = () => {
    console.info(`${name} booked`);
  };
  return (
    <View>
      <RestourantCard name={name} />
      <Text style={style.titleText}>+44 678 780 78</Text>
      <Button title="book a table" onPress={bookTable} />
      <View>
        <ScrollView>
          {createRelatedRestaurants().map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={navigation.navigate('RestaurantScreen', {name: item})}>
                <Text key={index} style={style.textContainer}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <Menu />
    </View>
  );
};

export default RestaurantScreen;
