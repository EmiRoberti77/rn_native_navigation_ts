/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './screens/Profile';
import Restourant from './screens/Restourant';
import Explore from './screens/Explore';

const RootStack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Explore" component={Explore} />
        <RootStack.Screen name="Profile" component={Profile} />
        <RootStack.Screen name="Restaurant" component={Restourant} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
export default App;
