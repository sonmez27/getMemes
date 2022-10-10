import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Memes from './src/screens/Memes';
import SplashScreen from './src/screens/Splash';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Memes" component={Memes} />
        </Stack.Navigator>
      </NavigationContainer>
  
  );
}
