import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Explore from '../pages/Explore';
import Details from '../pages/Details';

const Stack = createNativeStackNavigator();

export default function StackExploreRoutes() {
    return (
        <Stack.Navigator 
         screenOptions={{
            headerShown: false,
         }}>
            <Stack.Screen
             name='ExplorarDetalhes'
             component={Explore}
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
