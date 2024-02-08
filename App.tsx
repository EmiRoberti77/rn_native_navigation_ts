/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
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

// <Menu />
// <View style={styles.container}>
//   <Text style={styles.titleText}>Restourant app</Text>
// </View>
// <View style={styles.container}>
//   <Text style={styles.titleText}>Explore</Text>
// </View>
// <View style={styles.container}>
//   <Text style={styles.titleText}>Restourant</Text>
// </View>
// <View style={styles.container}>
//   <Text style={styles.titleText}>Profile</Text>
// </View>

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'arial',
    alignItems: 'center',
    fontSize: 35,
    marginTop: 10,
    marginBottom: 5,
    alignSelf: 'center',
  },
  container: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'gray',
  },
});

export default App;
