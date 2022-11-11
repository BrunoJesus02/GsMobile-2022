import React, { useEffect, useState }from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView, TextInput } from 'react-native';
import {useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';


    const CadastroVeiculoScreen = ({navigation}) => {

    const [ motorista, setMotorista ] = useState();

    const onInit = async () => {
    
        try {
            const token = await AsyncStorage.getItem('token')
            if(token != null) {
                try {
                    const tokenJson = await JSON.parse(token)
                    setMotorista(tokenJson)
                } catch (err) {
                    console.log(err)
                }
            } 
           
        } catch (e) {
            console.log('erro na requisição' + e)
        }
        console.log(motorista)
        };

    const schema = yup.object({
        modelo: yup.string().required("Informe o modelo"),
        ano: yup.string("Não é permitido letras")
            .required("O ano do veículo é obrigatorio")
            .max(99999, "Ano precisa ter apenas 4 digitos")
            .min(2, "Ano precisa ter 4 digitos"),
        cor: yup.string("Inválido")
                .required("A cor do veículo é obrigatória"),
        placa: yup.string().required("A placa do veículo é obrigatória"),
        chassi: yup.string().required("O chassi do veículo é obrigatório")
    })    

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    
    const cadastrar = async (data) => {
        try {
            const response = await fetch('https://fiap-dbe-globalsolution.herokuapp.com/api/veiculo', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "modelo": data.modelo,
                    "ano": data.ano,
                    "cor": data.cor,
                    "placa": data.placa,
                    "motorista": {
                            "id": motorista.id,
                            "nome": motorista.name,
                            "cpf": "16770851423",
                            "cnh": "12345678911",
                            "cadastroAtivo": true,
                            "dataCadastro": "2022-07-22",
                            "email": motorista.email
                        }
                })
            });
            if (response.status === 201) {
                navigation.replace('Home')
            } else {
                console.log("erro ", response.status)
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => { onInit(); }, []);

    return (
        <View style={styles.container}>

            <View style={styles.container__header}>
              <Text style={styles.container__header_text}>CADASTRO DE VEÍCULO</Text>  
            </View>

            <View style={styles.container__content}>
                <ScrollView style={styles.container__scroll_view}>
                
                <Controller
                control={control}
                name="modelo"
                render={({ field: { onChange, value}}) => (
                    <TextInput style={styles.container__cadastro_mt__input}
                        placeholder = 'MODELO'
                        placeholderTextColor={'#000'}
                        onChangeText={onChange}
                        value={value}/>
                )}/>
                {errors.modelo && <Text style={styles.container__login__input_erros}>{errors.modelo?.message}</Text>}
                

                <Controller
                control={control}
                name="ano"
                render={({ field: { onChange, value}}) => (
                    <TextInput style={styles.container__cadastro_mt__input}
                        placeholder = 'ANO'
                        placeholderTextColor={'#000'}
                        onChangeText={onChange}
                        value={value}/>
                )}/>
                {errors.ano && <Text style={styles.container__login__input_erros}>{errors.ano?.message}</Text>}   

                <Controller
                control={control}
                name="cor"
                render={({ field: { onChange, value}}) => (
                    <TextInput style={styles.container__cadastro_mt__input}
                        placeholder = 'COR'
                        placeholderTextColor={'#000'}
                        onChangeText={onChange}
                        value={value}/>
                )}/>
                {errors.cor && <Text style={styles.container__login__input_erros}>{errors.cor?.message}</Text>}  
                    

                <Controller
                control={control}
                name="placa"
                render={({ field: { onChange, value}}) => (
                    <TextInput style={styles.container__cadastro_mt__input}
                        placeholder = 'PLACA'
                        placeholderTextColor={'#000'}
                        onChangeText={onChange}
                        value={value}/> 
                )}/>
                {errors.placa && <Text style={styles.container__login__input_erros}>{errors.placa?.message}</Text>}
                
                <Controller
                control={control}
                name="chassi"
                render={({ field: { onChange, value}}) => (
                    <TextInput style={styles.container__cadastro_mt__input}
                        placeholder = 'CHASSI DO VEÍCULO'
                        placeholderTextColor={'#000'}
                        onChangeText={onChange}
                        value={value}/>
                )}/>
                {errors.chassi && <Text style={styles.container__login__input_erros}>{errors.chassi?.message}</Text>}

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

export default CadastroVeiculoScreen;

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