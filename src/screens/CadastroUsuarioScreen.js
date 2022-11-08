import React from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView, TextInput } from 'react-native';
import {useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

    const CadastroUsuarioScreen = ({navigation}) => {

    const schema = yup.object({
        nome: yup.string()
            .required("O nome é obrigatório"),
        email: yup.string()
            .email("Email inválido")
            .required("Informe seu email"),
        senha: yup.string()
            .required("Informe a senha"),
        cpf: yup.string()
            .required("CPF é obrigatório")
            .min(8, "O número mínimo para o CPF está incorreto")
            .max(11, "O número máximo para o CPF está incorreto"),
        rg: yup.string()
            .required("RG é obrigatório")
            .min(9, "O número mínimo para o RG está incorreto")
            .max(11, "O número máximo para o RG está incorreto")
    })    

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    
    const cadastrar = async (data) => {
        console.log(JSON.stringify({ 
            "nome": data.nome,
            "cpf": data.cpf,
            "rg": data.rg,
            "email": data.email,
            "password": data.senha,
        }))
        try {
            const response = await fetch('https://fiap-dbe-globalsolution.herokuapp.com/api/passageiro', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    "nome": data.nome,
                    "cpf": data.cpf,
                    "rg": data.rg,
                    "email": data.email,
                    "password": data.senha,
                })
            });
            const json = await response.text();
            console.log('status ', response.status);

            if (response.status === 201) {
                console.log("Cadastrou!")
                navigation.replace('Login')
            } else {
                console.log("mensagem de erro")
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.container__header}>
              <Text style={styles.container__header_text}>CADASTRO DE PASSAGEIRO</Text>  
            </View>

            <View style={styles.container__content}>
                <ScrollView style={styles.container__scroll_view}>
                
                    <Controller
                        control={control}
                        name="nome"
                        render={({ field: { onChange, value}}) => (
                            <TextInput style={styles.container__cadastro_mt__input}
                                placeholder = 'NOME COMPLETO'
                                placeholderTextColor={'#000'}
                                onChangeText={onChange}
                                value={value}/>
                    )}/>
                    {errors.nome && <Text style={styles.container__cadastro_ps__input_erro}>{errors.nome?.message}</Text>}

                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value}}) => (
                            <TextInput style={styles.container__cadastro_mt__input}
                                placeholder = 'E-MAIL'
                                placeholderTextColor={'#000'}
                                onChangeText={onChange}
                                value={value}/>
                    )}/>
                    {errors.email && <Text style={styles.container__cadastro_ps__input_erro}>{errors.email?.message}</Text>}

                    <Controller
                        control={control}
                        name="senha"
                        render={({ field: { onChange, value}}) => (
                            <TextInput style={styles.container__cadastro_mt__input}
                                placeholder = 'SENHA'
                                placeholderTextColor={'#000'}
                                onChangeText={onChange}
                                value={value}/>
                    )}/>
                    {errors.senha && <Text style={styles.container__cadastro_ps__input_erro}>{errors.senha?.message}</Text>}

                    <Controller
                        control={control}
                        name="cpf"
                        render={({ field: { onChange, value}}) => (
                            <TextInput style={styles.container__cadastro_mt__input}
                                placeholder = 'CPF'
                                placeholderTextColor={'#000'}
                                onChangeText={onChange}
                                value={value}/> 
                    )}/>
                    {errors.cpf && <Text style={styles.container__cadastro_ps__input_erro}>{errors.cpf?.message}</Text>}
                    
                    <Controller
                        control={control}
                        name="rg"
                        render={({ field: { onChange, value}}) => (
                            <TextInput style={styles.container__cadastro_mt__input}
                                placeholder = 'RG'
                                placeholderTextColor={'#000'}
                                onChangeText={onChange}
                                value={value}/> 
                    )}/>
                    {errors.rg && <Text style={styles.container__cadastro_ps__input_erro}>{errors.rg?.message}</Text>}
    
                </ScrollView>
            </View>

            <Pressable 
                style={styles.container__cadastro_mt__btn}
                onPress={handleSubmit(cadastrar)}>
                <Text>CADASTRAR</Text>
            </Pressable>
           
        </View>
    )    
}

export default CadastroUsuarioScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#005C53',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
    },
    container__header: {
        width: '100%'
    },
    container__header_text: {
        fontSize: 30,
        width: '70%',
        padding: 20,
        color: '#FFF',
        fontWeight: '200'
    },
    container__cadastro_mt__input: {
        backgroundColor: '#FFF',
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        paddingLeft: 20,
        marginTop: 25
    },
    container__cadastro_ps__input_erro: {
        color: '#D6D58E',  
        fontWeight: 'bold',
        width: '75%',
        marginTop: 5
    },
    container__cadastro_mt__btn: {
        backgroundColor: '#FFF',
        width: '40%',
        height: 55,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    container__content: {    
        width: '100%',
        height: '70%',
        alignItems: 'center'
    },
    container__scroll_view: {
        width: '75%',
        height: '20%',
        
    }
})