/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Explore from './screens/Explore';
import Restourants from './screens/Restourants';
import Profile from './screens/Profile';
import RestaurantScreen from './screens/RestaurantScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  Explore: undefined;
  Restourants: undefined;
  Profile: undefined;
  RestourantScreen: {name: string};
};

function App(): React.JSX.Element {
  const RootStack = createNativeStackNavigator<RootStackParams>();
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Explore" component={Explore} />
        <RootStack.Screen name="Restourants" component={Restourants} />
        <RootStack.Screen name="Profile" component={Profile} />
        <RootStack.Screen
          name="RestourantScreen"
          component={RestaurantScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
export default App;
