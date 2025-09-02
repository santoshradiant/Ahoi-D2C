import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screens/signin';
import SignUp from './screens/signup';
import HomeScreen from './screens/home';
import HomeFilledScreen from './screens/homefilled';
import PaymentsScreen from './screens/payments';
import DownloadReceipt from './screens/downloadreciept';
import Invoice from './screens/invoice';
import AllRequests from './screens/AllRequests';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeFilled" component={HomeFilledScreen} />
        <Stack.Screen name="Payments" component={PaymentsScreen} />
        <Stack.Screen 
          name="DownloadReceipt" 
          component={DownloadReceipt}
          options={{
            presentation: 'modal',
          }}
        />
        <Stack.Screen 
          name="Invoice" 
          component={Invoice}
        />
        <Stack.Screen 
          name="AllRequests" 
          component={AllRequests}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
