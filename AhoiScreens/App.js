import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screens/signin';
import SignUp from './screens/signup';
import MainTabNavigator from './navigation/MainTabNavigator';
import HomeFilledScreen from './screens/homefilled';
import DownloadReceipt from './screens/downloadreciept';
import Invoice from './screens/invoice';
import AllRequests from './screens/AllRequests';
import ServiceDetails from './screens/servicedetails';
import ServiceDetailsSchedule from './screens/servicedetailschedule';
import ServiceDetailPayment from './screens/servicedetailpayment';
import ServiceDetailReview from './screens/servicedetailreview';
import ManageAddress from './screens/manageaddress';
import Terms from './screens/terms';
import EditPayment from './screens/EditPayment';

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
        {/* Authentication Screens */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        
        {/* Main App with Tab Navigation */}
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
        
        {/* Additional Screens */}
        <Stack.Screen 
          name="HomeFilled" 
          component={HomeFilledScreen}
        />
        
        {/* Modal and Detail Screens */}
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
        <Stack.Screen 
          name="ServiceDetails" 
          component={ServiceDetails}
        />
        <Stack.Screen 
          name="ServiceDetailsSchedule" 
          component={ServiceDetailsSchedule}
        />
        <Stack.Screen 
          name="ServiceDetailPayment" 
          component={ServiceDetailPayment}
        />
        <Stack.Screen 
          name="ServiceDetailReview" 
          component={ServiceDetailReview}
        />
        <Stack.Screen 
          name="ManageAddress" 
          component={ManageAddress}
        />
        <Stack.Screen 
          name="Terms" 
          component={Terms}
        />
        <Stack.Screen 
          name="EditPayment" 
          component={EditPayment}
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
