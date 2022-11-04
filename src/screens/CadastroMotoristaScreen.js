import React from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView, TextInput } from 'react-native';
import {useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

    const CadastroMotoristaScreen = ({navigation}) => {

    const schema = yup.object({
        nome: yup.string()
            .required("O nome é obrigatório"),
        email: yup.string()
            .email("Email inválido")
            .required("Informe seu email"),
        senha: yup.string()
            .required("Informe a senha")
            .min(6, "A senha deve conter pelo menos 6 digitos"),
        cpf: yup.number()
            .required("CPF é obrigatório")
            .integer("CPF inválido")
            .min(11, "O número mínimo para o CPF está incorreto")
            .max(11, "O número máximo para o CPF está incorreto")
            .positive("CPF inválido"),
        cnh: yup.number()
            .required("CNH é obrigatório")
            .integer("CNH inválido")
            .min(11, "O número mínimo para a CNH está incorreto")
            .max(11, "O número máximo para o CNH está incorreto")
            .positive("CNH inválido"),
        ddd: yup.number()
            .required("O DDD é obrigatório")
            .integer("DDD inválido")
            .max(3, "O número do DDD está incorreto")
            .positive("DDD inválido"),
        telefone: yup.number()
            .required("O telefone é obrigatório")
            .integer("Numero de telefone inválido")
            .min(7, "Numero de telefone inválido")
            .max(10, "Numero de telefone inválido")
            .positive("Numero de telefone inválido"),
        regiao: yup.string()
            .required("A região de trabalho é obrigatória")
    })    

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    
    const cadastrar = (data) => {
        console.log(data)
    };

    return (
        <View style={styles.container}>

            <View style={styles.container__header}>
              <Text style={styles.container__header_text}>CADASTRO DE MOTORISTA</Text>  
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
                    {errors.nome && <Text style={styles.container__cadastro_mt__input_erro}>{errors.nome?.message}</Text>}

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
                    {errors.email && <Text style={styles.container__cadastro_mt__input_erro}>{errors.email?.message}</Text>}

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
                    {errors.senha && <Text style={styles.container__cadastro_mt__input_erro}>{errors.senha?.message}</Text>}

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
                    {errors.cpf && <Text style={styles.container__cadastro_mt__input_erro}>{errors.cpf?.message}</Text>}

                    <Controller
                    control={control}
                    name="cnh"
                    render={({ field: { onChange, value}}) => (
                        <TextInput style={styles.container__cadastro_mt__input}
                            placeholder = 'Nº CNH'
                            placeholderTextColor={'#000'}
                            onChangeText={onChange}
                            value={value}/> 
                    )}/>
                    {errors.cnh && <Text style={styles.container__cadastro_mt__input_erro}>{errors.cnh?.message}</Text>}


                    <Controller
                    control={control}
                    name="ddd"
                    render={({ field: { onChange, value}}) => (
                        <TextInput style={styles.container__cadastro_mt__input}
                            placeholder = 'DDD'
                            placeholderTextColor={'#000'}
                            onChangeText={onChange}
                            value={value}/>
                    )}/>
                    {errors.ddd && <Text style={styles.container__cadastro_mt__input_erro}>{errors.ddd?.message}</Text>}


                    <Controller
                    control={control}
                    name="telefone"
                    render={({ field: { onChange, value}}) => (
                        <TextInput style={styles.container__cadastro_mt__input}
                            placeholder = 'Nº TELEFONE'
                            placeholderTextColor={'#000'}
                            onChangeText={onChange}
                            value={value}/>
                    )}/>
                    {errors.telefone && <Text style={styles.container__cadastro_mt__input_erro}>{errors.telefone?.message}</Text>}

                    <Controller
                    control={control}
                    name="regiao"
                    render={({ field: { onChange, value}}) => (
                        <TextInput style={styles.container__cadastro_mt__input}
                            placeholder = 'REGIÃO DE TRABALHO'
                            placeholderTextColor={'#000'}
                            onChangeText={onChange}
                            value={value}/> 
                    )}/>
                    {errors.regiao && <Text style={styles.container__cadastro_mt__input_erro}>{errors.regiao?.message}</Text>}

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

export default CadastroMotoristaScreen;

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
    container__cadastro_mt__input_erro: {
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