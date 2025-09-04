import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { Svg, Path } from 'react-native-svg';

// Import screens
import HomeScreen from '../screens/home';
import ServiceRequestStackNavigator from './ServiceRequestStackNavigator';
import PaymentsScreen from '../screens/payments';
import ProfileScreen from '../screens/profile';

const Tab = createBottomTabNavigator();

// Tab Icons
const HomeIcon = ({ color = '#c7cad1', size = 21 }: { color?: string; size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
    <Path
      d="M2.625 7.875L10.5 2.625L18.375 7.875V17.5C18.375 17.9473 18.1973 18.3763 17.8839 18.6897C17.5705 19.0031 17.1415 19.1808 16.6942 19.1808H4.30583C3.85854 19.1808 3.42951 19.0031 3.11612 18.6897C2.80272 18.3763 2.625 17.9473 2.625 17.5V7.875Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.875 19.1808V10.5H13.125V19.1808"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const RequestIcon = ({ color = '#c7cad1', size = 21 }: { color?: string; size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
    <Path
      d="M10.5 19.25C15.3325 19.25 19.25 15.3325 19.25 10.5C19.25 5.66751 15.3325 1.75 10.5 1.75C5.66751 1.75 1.75 5.66751 1.75 10.5C1.75 15.3325 5.66751 19.25 10.5 19.25Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 7V14"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 10.5H14"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const PaymentsIcon = ({ color = '#c7cad1', size = 21 }: { color?: string; size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
    <Path
      d="M18.375 3.9375H2.625C2.17772 3.9375 1.8125 4.30272 1.8125 4.75V16.25C1.8125 16.6973 2.17772 17.0625 2.625 17.0625H18.375C18.8223 17.0625 19.1875 16.6973 19.1875 16.25V4.75C19.1875 4.30272 18.8223 3.9375 18.375 3.9375Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.8125 8.75H19.1875"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ProfileIcon = ({ color = '#c7cad1', size = 21 }: { color?: string; size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
    <Path
      d="M17.5 18.375V16.625C17.5 15.7962 17.1708 15.0013 16.5847 14.4153C15.9987 13.8292 15.2038 13.5 14.375 13.5H6.625C5.79616 13.5 5.00134 13.8292 4.41529 14.4153C3.82924 15.0013 3.5 15.7962 3.5 16.625V18.375"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 10C12.2259 10 13.625 8.60089 13.625 6.875C13.625 5.14911 12.2259 3.75 10.5 3.75C8.77411 3.75 7.375 5.14911 7.375 6.875C7.375 8.60089 8.77411 10 10.5 10Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0b8494',
          borderTopWidth: 1,
          borderTopColor: 'rgba(0,0,0,0.1)',
          height: Platform.OS === 'ios' ? 92 : 80,
          paddingHorizontal: 16,
          paddingVertical: 8,
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#c7cad1',
        tabBarLabelStyle: {
          fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
          fontSize: 15,
          fontWeight: '500',
          lineHeight: 18,
          textAlign: 'center',
        },
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 7,
          paddingHorizontal: 7,
          borderRadius: 8.75,
          gap: 2.45,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="ServiceRequestStack"
        component={ServiceRequestStackNavigator}
        options={{
          tabBarLabel: 'Request',
          tabBarIcon: ({ color, size }) => <RequestIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <PaymentsIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <ProfileIcon color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
