import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

import StackHomeRoutes from './stackHomeRoutes';
import StackExploreRoutes from './stackExploreRoutes';
import Search from '../pages/Search';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
        <Tab.Navigator
         screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: '#D90227',
            borderTopWidth: 0,
            paddingTop: 4,
            minHeight: 52,
          },
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: '#1E1E1E',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            paddingBottom: 2,
          },
         }}
        >
            <Tab.Screen 
             name='Início' 
             component={StackHomeRoutes}
             options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" size={size} color={color} />
              ),
             }} 
            />

            <Tab.Screen 
             name="Explorar" 
             component={StackExploreRoutes} 
             options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="explore" size={size} color={color} />
              ),             
             }}
            />

            <Tab.Screen 
             name="Pesquisar" 
             component={Search} 
             options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="search" size={size} color={color} />
              ),             
             }}
            />
        </Tab.Navigator>
  );
}