import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

import HomePage from './HomePage';
import Tasks from './Tasks';

const Navigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name='login' component={HomePage} />
            <Stack.Screen name='Tasks' component={Tasks} />
            
        </Stack.Navigator>
    );
}

export default Navigator;