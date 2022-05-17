import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import SplashScreen from '../pages/SplashScreen';
import Wizard1 from '../pages/Wizard1';
import Wizard2 from '../pages/Wizard2';
import Wizard3 from '../pages/Wizard3';
import StepRegister from '../pages/StepRegister';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="StepRegister" component={StepRegister} />
    </Stack.Navigator>
  );
}
