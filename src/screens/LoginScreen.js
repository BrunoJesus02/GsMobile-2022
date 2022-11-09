import React from 'react';
import { Text, View, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import {useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

    const LoginScreen = ({navigation}) => {

    const schema = yup.object({
        email: yup.string().email("Email inválido").required("Informe seu email"),
        senha: yup.string().required("Informe a senha")
    })    

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const login = async (data) => {
        try {
            const response = await fetch('https://fiap-dbe-globalsolution.herokuapp.com/api/auth', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    "email": data.email,
                    "password": data.senha
                })
            });
            const json = await response.text();
            if (response.status === 200) {
                await AsyncStorage.setItem('token', json)
                navigation.replace('Home')
            } else if (response.status === 403) {
                console.log("erro")
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
    <View style={styles.container}>
        <Image source={require('../img/moto_logo.png')} style={styles.logo}/>

        <View style={styles.container__login}>
            <Text style={styles.container__login__text}>LOGIN</Text>
        </View>

        <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value}}) => (
                <TextInput style={styles.container__login__input}
                placeholder = 'E-MAIL'
                placeholderTextColor={'#000'}
                onChangeText={onChange}
                value={value}/>
            )}/>
        {errors.email && <Text style={styles.container__login__input_erros}>{errors.email?.message}</Text>}

        <Controller
            control={control}
            name="senha"
            render={({ field: { onChange, value}}) => (
                <TextInput style={styles.container__login__input}
                placeholder = 'SENHA'
                placeholderTextColor={'#000'}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}/>
          )}/>
        {errors.senha && <Text style={styles.container__login__input_erros}>{errors.senha?.message}</Text>}

        <Pressable 
          style={styles.container__login__btn}
          onPress={handleSubmit(login)}>
          <Text>ENTRAR</Text>
        </Pressable>

        <Text style={styles.container__login__info}>NÃO TEM CADASTRO? FAÇA AQUI</Text>

        <View style={styles.container__login__content__btnCadastro}>
            <Pressable 
            style={styles.container__login__content__btnCadastro_button}
            onPress={() => navigation.replace('CadastroMt')}>
            <Text style={styles.container__login__content__btnCadastro_text}>SOU MOTORISTA</Text>
            </Pressable>

            <Pressable 
            style={styles.container__login__content__btnCadastro_button}
            onPress={() => navigation.replace('CadastroPs')}>
            <Text style={styles.container__login__content__btnCadastro_text}>SOU PASSAGEIRO</Text>
            </Pressable>
        </View>

    </View>
 )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#005C53',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 50
    },
    logo: {
        height: 200,
        width: 300,
    },
    container__login: {
        width: '100%',
        marginTop: 30,   
    },
    container__login__text: {
        marginLeft: 20,
        fontSize: 35,
        fontWeight: '200',
        color: '#FFF'
    },
    container__login__input: {
        backgroundColor: '#FFF',
        width: '80%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        paddingLeft: 20,
        marginTop: 40
    },
    container__login__btn: {
        backgroundColor: '#FFF',
        width: '40%',
        height: 55,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    container__login__info: {
        marginTop: 50,
        color: '#FFF',
        fontSize: 13,
        fontWeight: '200',
    },
    container__login__content__btnCadastro: {
        width: '75%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    container__login__content__btnCadastro_button: {
        backgroundColor: '#FFF',
        width: 120,
        height: 45,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container__login__content__btnCadastro_text: {
        fontSize: 12,
        fontWeight: '200'
    },
    container__login__input_erros: {
      color: '#D6D58E',  
      fontWeight: 'bold',
      width: '75%',
      marginTop: 5
    }
})