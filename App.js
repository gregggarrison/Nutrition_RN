
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import Macro from './screens/Macro'
import FoodLog from './screens/FoodLog'
import Nav from './components/Nav'


const Stack = createStackNavigator();

function App({ navigation }) {
  return (
    <>
      <Nav navigation={navigation} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Macro" component={Macro} />
          <Stack.Screen name="Food Log" component={FoodLog} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;