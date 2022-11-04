import React from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView, TextInput } from 'react-native';

    const CadastroVeiculoScreen = ({navigation}) => {

    return (
        <View style={styles.container}>

            <View style={styles.container__header}>
              <Text style={styles.container__header_text}>CADASTRO DE VEÍCULO</Text>  
            </View>

            <View style={styles.container__content}>
                <ScrollView style={styles.container__scroll_view}>
                
                <TextInput style={styles.container__cadastro_mt__input}
                placeholder = 'MARCA'
                placeholderTextColor={'#000'}/>

                <TextInput style={styles.container__cadastro_mt__input}
                    placeholder = 'MODELO'
                    placeholderTextColor={'#000'}/>

                <TextInput style={styles.container__cadastro_mt__input}
                    placeholder = 'ANO'
                    placeholderTextColor={'#000'}/>    

                <TextInput style={styles.container__cadastro_mt__input}
                    placeholder = 'COR'
                    placeholderTextColor={'#000'}/> 

                <TextInput style={styles.container__cadastro_mt__input}
                    placeholder = 'PLACA'
                    placeholderTextColor={'#000'}/> 

                <TextInput style={styles.container__cadastro_mt__input}
                    placeholder = 'CHASSI DO VEÍCULO'
                    placeholderTextColor={'#000'}/>
                    
                </ScrollView>
            </View>

            <Pressable 
                style={styles.container__cadastro_mt__btn}
                onPress={() => navigation.replace('Home')}>
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
        
    }
})