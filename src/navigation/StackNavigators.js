import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabsNavigator from './BottomTabsNavigator';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#ee125a',
                },
            }}
        >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Home' component={BottomTabsNavigator} />
        </Stack.Navigator>
    );
}