import React from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView, TextInput } from 'react-native';
import {useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

    const AtualizarVeiculoScreen = ({navigation, route}) => {

    const schema = yup.object({
        marca: yup.string()
            .required("Informe seu email"),
        modelo: yup.string().required("Informe a senha"),
        ano: yup.number("Não é permitido letras")
            .required("O ano do veículo é obrigatorio")
            .integer("Não é permitido números negativos")
            .max(4, "Ano precisa ter apenas 4 digitos")
            .min(4, "Ano precisa ter 4 digitos"),
        cor: yup.string("Inválido")
                .required("A cor do veículo é obrigatória"),
        placa: yup.string().required("A placa do veículo é obrigatória"),
        chassi: yup.string().required("O chassi do veículo é obrigatório")
    })    

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            marca: route.params.info.marca,
            modelo: route.params.info.modelo,
            ano: route.params.info.ano,
            cor: route.params.info.cor,
            placa: route.params.info.placa,
            chassi: route.params.info.chassi
        },
        resolver: yupResolver(schema)
    })

    
    const atualizar = (data) => {
        console.log(data)
        navigation.replace('Home')
    };

    return (
        <View style={styles.container}>

            <View style={styles.container__header}>
              <Text style={styles.container__header_text}>CADASTRO DE VEÍCULO</Text>  
            </View>

            <View style={styles.container__content}>
                <ScrollView style={styles.container__scroll_view}>
                
                <Controller
                control={control}
                name="marca"
                render={({ field: { onChange, value}}) => (
                    <TextInput style={styles.container__cadastro_mt__input}
                    placeholder = 'MARCA'
                    placeholderTextColor={'#000'}/>
                )}/>
                {errors.marca && <Text style={styles.container__login__input_erros}>{errors.marca?.message}</Text>}


                <Controller
                control={control}
                name="modelo"
                render={({ field: { onChange, value}}) => (
                    <TextInput style={styles.container__cadastro_mt__input}
                        placeholder = 'MODELO'
                        placeholderTextColor={'#000'}/>
                )}/>
                {errors.modelo && <Text style={styles.container__login__input_erros}>{errors.modelo?.message}</Text>}
                

                <Controller
                control={control}
                name="ano"
                render={({ field: { onChange, value}}) => (
                    <TextInput style={styles.container__cadastro_mt__input}
                        placeholder = 'ANO'
                        placeholderTextColor={'#000'}/>
                )}/>
                {errors.ano && <Text style={styles.container__login__input_erros}>{errors.ano?.message}</Text>}   

                <Controller
                control={control}
                name="cor"
                render={({ field: { onChange, value}}) => (
                    <TextInput style={styles.container__cadastro_mt__input}
                        placeholder = 'COR'
                        placeholderTextColor={'#000'}/>
                )}/>
                {errors.cor && <Text style={styles.container__login__input_erros}>{errors.cor?.message}</Text>}  
                    

                <Controller
                control={control}
                name="placa"
                render={({ field: { onChange, value}}) => (
                    <TextInput style={styles.container__cadastro_mt__input}
                        placeholder = 'PLACA'
                        placeholderTextColor={'#000'}/> 
                )}/>
                {errors.placa && <Text style={styles.container__login__input_erros}>{errors.placa?.message}</Text>}
                
                <Controller
                control={control}
                name="chassi"
                render={({ field: { onChange, value}}) => (
                    <TextInput style={styles.container__cadastro_mt__input}
                        placeholder = 'CHASSI DO VEÍCULO'
                        placeholderTextColor={'#000'}/>
                )}/>
                {errors.chassi && <Text style={styles.container__login__input_erros}>{errors.chassi?.message}</Text>}

                </ScrollView>
            </View>

            <Pressable 
                style={styles.container__cadastro_mt__btn}
                onPress={handleSubmit(atualizar)}>
                <Text>CADASTRAR</Text>
            </Pressable>
           
        </View>
    )    
}

export default AtualizarVeiculoScreen;

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
    },
    container__login__input_erros: {
        color: '#D6D58E',  
        fontWeight: 'bold',
        width: '75%',
        marginTop: 5
    }
})