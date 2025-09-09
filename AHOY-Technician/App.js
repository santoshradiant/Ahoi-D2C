import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screens/signin';
import SignUp from './screens/signup';
import Tasks from './screens/Tasks';
import AllTasks from './screens/AllTasks';
import TaskDetails from './screens/TaskDetails';
import CompleteJobDetails from './screens/CompleteJobDetails';
import History from './screens/History';
import HistoryDetails from './screens/HistoryDetails';
import TermsAndPrivacy from './screens/TermsAndPrivacy';
import EditProfile from './screens/EditProfile';

import MainTabNavigator from './navigation/MainTabNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="MainTabs"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Authentication Screens */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        
        {/* Tasks Screen */}
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen name="AllTasks" component={AllTasks} />
        <Stack.Screen 
          name="TaskDetails" 
          component={TaskDetails} 
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="CompleteJobDetails" 
          component={CompleteJobDetails} 
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
        
        {/* History Screen */}
        <Stack.Screen name="History" component={History} />
        <Stack.Screen 
          name="HistoryDetails" 
          component={HistoryDetails} 
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
        
        {/* Terms and Privacy Screen */}
        <Stack.Screen name="Terms" component={TermsAndPrivacy} />
        
        {/* Edit Profile Screen */}
        <Stack.Screen 
          name="EditProfile" 
          component={EditProfile} 
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
        
        {/* Main App with Tab Navigation */}
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
