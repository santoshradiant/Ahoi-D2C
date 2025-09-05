import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ServiceDetailsScreen from '../screens/servicedetails';
import ServiceDetailsScheduleScreen from '../screens/servicedetailschedule';
import ServiceDetailPaymentScreen from '../screens/servicedetailpayment';
import ServiceDetailReviewScreen from '../screens/servicedetailreview';

const Stack = createStackNavigator();

export default function ServiceRequestStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen} />
      <Stack.Screen name="ServiceDetailsSchedule" component={ServiceDetailsScheduleScreen} />
      <Stack.Screen name="ServiceDetailPayment" component={ServiceDetailPaymentScreen} />
      <Stack.Screen name="ServiceDetailReview" component={ServiceDetailReviewScreen} />
    </Stack.Navigator>
  );
}



