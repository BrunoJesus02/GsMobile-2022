import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabsNavigator from './BottomTabsNavigator';
import LoginScreen from '../screens/LoginScreen';
import CadastroMotoristaScreen from '../screens/CadastroMotoristaScreen';
import CadastroUsuarioScreen from '../screens/CadastroUsuarioScreen';
import CadastroVeiculoScreen from '../screens/CadastroVeiculoScreen';
import AtualizarVeiculoScreen from '../screens/AtualizarVeiculoScreen';

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
        <Stack.Screen name='CadastroMt' component={CadastroMotoristaScreen} />
        <Stack.Screen name='CadastroPs' component={CadastroUsuarioScreen} />
        <Stack.Screen name='CadastroVeic' component={CadastroVeiculoScreen} />
        <Stack.Screen name='AtualizarVeic' component={AtualizarVeiculoScreen} />
        <Stack.Screen name='Home' component={BottomTabsNavigator} />
        </Stack.Navigator>
    );
}