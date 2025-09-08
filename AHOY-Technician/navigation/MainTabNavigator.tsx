import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { Svg, Path } from 'react-native-svg';

// Import screens
import ProfileScreen from '../screens/profile';

const Tab = createBottomTabNavigator();

// Tab Icons
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
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <ProfileIcon color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
