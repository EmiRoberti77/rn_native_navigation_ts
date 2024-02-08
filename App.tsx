/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Explore from './screens/Explore';
import Restourant from './screens/Restourant';
import Profile from './screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  Explore: undefined;
  Restourant: undefined;
  Profile: undefined;
};

function App(): React.JSX.Element {
  const RootStack = createNativeStackNavigator<RootStackParams>();
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Explore" component={Explore} />
        <RootStack.Screen name="Restourant" component={Restourant} />
        <RootStack.Screen name="Profile" component={Profile} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
export default App;
