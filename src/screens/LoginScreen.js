import React from 'react';
import { Text, View, StyleSheet, Pressable, Image, TextInput } from 'react-native';

const LoginScreen = () => {

    return (
    <View style={styles.container}>
        <Image source={require('../img/moto_logo.png')} style={styles.logo}/>

        <View style={styles.container__login}>
            <Text style={styles.container__login__text}>LOGIN</Text>
        </View>

        <TextInput style={styles.container__login__input}
          placeholder = 'E-MAIL'
          placeholderTextColor={'#000'}/>

        <TextInput style={styles.container__login__input}
          placeholder = 'SENHA'
          placeholderTextColor={'#000'}/>

        <Pressable 
          style={styles.container__login__btn}
          onPress={() => console.log('foi')}>
          <Text>ENTRAR</Text>
        </Pressable>

        <Text style={styles.container__login__info}>NÃO TEM CADASTRO? FAÇA AQUI</Text>

        <View style={styles.container__login__content__btnCadastro}>
            <Pressable 
            style={styles.container__login__content__btnCadastro_button}>
            <Text style={styles.container__login__content__btnCadastro_text}>SOU MOTORISTA</Text>
            </Pressable>

            <Pressable 
            style={styles.container__login__content__btnCadastro_button}>
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
        paddingTop: 80
    },
    logo: {
        height: 200,
        width: 300,
    },
    container__login: {
        width: '100%',
        marginTop: 60,   
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
        marginTop: 25
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
    }
})