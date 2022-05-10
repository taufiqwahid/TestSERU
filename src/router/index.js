import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import SplashScreen from '../pages/SplashScreen';
import Wizard1 from '../pages/Wizard1';
import Wizard2 from '../pages/Wizard2';
import Wizard3 from '../pages/Wizard3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Wizard1" component={Wizard1} />
      <Stack.Screen name="Wizard2" component={Wizard2} />
      <Stack.Screen name="Wizard3" component={Wizard3} />
    </Stack.Navigator>
  );
}
