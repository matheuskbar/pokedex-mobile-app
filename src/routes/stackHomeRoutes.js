import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Details from '../pages/Details';

const Stack = createNativeStackNavigator();

export default function StackHomeRoutes() {
    return (
        <Stack.Navigator 
         screenOptions={{
            headerShown: false,
         }}>
            <Stack.Screen
             name='HomeDetalhes'
             component={Home}
            />

            <Stack.Screen
             name='Detalhes'
             component={Details}
             options={{
                
             }}
            />
        </Stack.Navigator>
    )
}
