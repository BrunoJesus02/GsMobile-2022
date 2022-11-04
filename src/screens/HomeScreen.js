import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import IconeMt from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeScreen = ({navigation}) => {

    const [ isMotorista, setMotorista ] = useState(true);
    
    return (
    <View style={styles.container}>

        <View style={styles.container__circulo}></View>

        <Text style={styles.container__welcome}>BEM VINDO, <Text style={styles.container__welcome__sub}>USUÁRIO</Text></Text>

        {
            (isMotorista)

            ?

            <View style={styles.container__content}>

                <View style={styles.container__content__mt__view_btn}>
                    <Pressable 
                        style={styles.container__content__mt__btn}
                        onPress={() => navigation.navigate('CadastroVeic')}>
                        <Text style={styles.container__content__mt__btn_text}>+ ADICIONAR VEÍCULO</Text>
                    </Pressable>
                </View>
          
                <ScrollView style={styles.container__content__scroll_view}>

                    <View style={styles.container__content__scroll_view__card}>
                        <Text style={styles.container__content__scroll_view__card_text}>Teste Da Honda</Text>

                        <Pressable
                        style={styles.container__content__scroll_view__card_btn}>
                            <IconeMt name="pencil" size={20}/>
                        </Pressable>

                        <Pressable
                        style={styles.container__content__scroll_view__card_btn}>
                            <IconeMt name="delete" size={20}/>
                        </Pressable>

                    </View>

                </ScrollView>

            </View>

            :

            <View style={styles.container__content}>
                
                <Text style={styles.container__content__ps__text}>MOTORISTAS DISPONÍVEIS</Text>

                <ScrollView style={styles.container__content__scroll_view}>

                    <View style={styles.container__content__ps__content__header}>
                        <Text style={styles.container__content__ps__content__header__text}>NOME</Text>
                        <Text style={styles.container__content__ps__content__header__text}>CORRIDAS</Text>
                        <Text style={styles.container__content__ps__content__header__text}>AÇÕES</Text>
                    </View>

                    <View style={styles.container__content__ps__content__card}>
                        <Text style={styles.container__content__ps__content__card_value}>Bruno Jesus</Text>
                        <Text style={styles.container__content__ps__content__card_value}>321</Text>
                        <Pressable
                        style={styles.container__content__ps__content__card_btn}>
                            <IconeMt name="delete" size={20}/>
                        </Pressable>
                    </View>

                </ScrollView>

            </View>
        }
    </View>
 )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#005C53',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 60
    },
    container__circulo: {
        backgroundColor: '#D6D58E',
        borderRadius: '50%',
        width: 100,
        height: 100,
        marginBottom: 20
    },
    container__welcome: {
        fontSize: 30,
        fontWeight: '200',
        color: '#FFF'
    },
    container__welcome__sub: {
        color: '#D6D58E'
    },
    container__content: {
        width: '100%',
        height: '75%',
        alignItems: 'center',
    },

    // Estilização da inteface vista como motorista

    container__content__mt__view_btn: {
        width: '100%',
        marginTop: 30
    },
    container__content__mt__btn: {
        backgroundColor: '#D9D9D9',
        width: '45%',
        height: 45,
        borderWidth: 5,
        borderColor: '#D6D58E',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    container__content__mt__btn_text: {
        fontSize: 14,
        fontWeight: '300'
    },
    container__content__scroll_view: {
        marginTop: 20,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#D6D58E',
        width: '80%',
    },
    container__content__scroll_view__card: {
        flexDirection: 'row',
        width: '100%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container__content__scroll_view__card_text: {
        flexGrow: 2,
        color: '#FFF',
        textTransform: 'uppercase',
        fontSize: 13
    },
    container__content__scroll_view__card_btn: {
        backgroundColor: '#D6D58E',
        borderRadius: '50%',
        width: 40,
        height: 40,
        borderColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 7
    },
    container__content__scroll_view__card__sep: {
        width: '30%',
        borderWidth: 1
    },

    // Estilização da inteface vista como passageiro

    container__content__ps__text: {
        fontSize: 25,
        fontWeight: '300',
        color: '#FFF',        
        marginTop: 35
    },
    container__content__ps__content__header: {
        flexDirection: 'row',
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container__content__ps__content__header__text: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    container__content__ps__content__card: {
        flexDirection: 'row',
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container__content__ps__content__card_value: {
        color: '#FFF',
        fontWeight: '300',
        width: '33%'
    },
    container__content__ps__content__card_btn: {
        backgroundColor: '#D6D58E',
        borderRadius: '50%',
        width: 40,
        height: 40,
        borderColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
    }
})