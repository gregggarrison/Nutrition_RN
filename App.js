
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet, useState} from 'react-native'


import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import Macro from './screens/Macro'
import FoodLog from './components/FoodLog'
import Nav from './components/Nav'
import ImageSearch from './screens/ImageSearch'
import Chart from './components/Chart'


const Stack = createStackNavigator();

function App({ navigation }) {



  return (
    <>
      <Nav navigation={navigation} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{headerShown: false  }}>
            {(props)=> <HomeScreen {...props} />}

          </Stack.Screen>
          <Stack.Screen name="Profile" component={ProfileScreen}  options={{headerStyle: {backgroundColor:"#F5B17B"  }}} />
          <Stack.Screen name="Macro" component={Macro}  options={{headerStyle: {backgroundColor:"#F5B17B"  }}} />
          <Stack.Screen name="Image Search" component={ImageSearch}  options={{headerStyle: {backgroundColor:"#F5B17B"  }}}/>               
          {/* <Stack.Screen name="Chart" component={Chart}  options={{headerStyle: {backgroundColor:"#F5B17B"  }}}/>                */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   stack: {
//     backgroundColor: "#ff8584",
//     color: "3ff8584
//   }
// })

export default App;