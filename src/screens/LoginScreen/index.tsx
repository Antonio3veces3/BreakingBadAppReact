import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image, ViewPropTypes, ScrollView, Button } from 'react-native';

import {useForm} from '../../hooks/useForm';
import { LoginInterface } from '../../interfaces/LoginInterfaces';

const image= require('../../assets/Images/loginBB.jpg');
interface Props extends NativeStackScreenProps <any, any> {}

const Component = (props: Props) => {
    const {navigation} = props;

    const {email, password, onChange}= useForm<LoginInterface>({
        email: '',
        password: '',
    });

    useEffect(() => {
        console.log(`Email -> ${email}`);
        console.log(`Password -> ${password}`);
    }, [email, password]); 

    const doLogin= ()=>{
        if(!(email === 'a' && password === 'a')) return;
        navigation.navigate('Home'); 
    }
    return (
       <View style={styles.Container}>
           <ScrollView>

           <View style={styles.ViewImage}>
                <Image source={image} style={styles.Image}></Image>
           </View>
           <Text style= {styles.title}>Breaking Bad</Text>
           <Text style={styles.Phrase}>"Come to lab"</Text>
           <View style={styles.ContainerInputs}>
           <View>
               <TextInput 
               value={email as string}
               onChangeText={value => onChange('email',value)}
               placeholder= "Email"
               placeholderTextColor= "#393842"
               keyboardType= "email-address"
               style={styles.InputEmail}
               numberOfLines={1}/>
           </View>
           <View >
               <TextInput 
               value={password as string}
               onChangeText={value => onChange('password',value)}
               placeholder= "Password"
               secureTextEntry= {true}
               placeholderTextColor= "#393842"
               style= {styles.InputPassword}
               numberOfLines={1}
               />
           </View>
           <View  style={styles.ButtonLogin}>
               <Button color="#023B1C" title="Sign In" onPress={doLogin}/>
           </View>
           </View>
           </ScrollView>
       </View>
    )
}

const styles= StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
    },
    ViewImage: {
        marginTop: 40,
        height: 250,
        width: 'auto',
        alignItems: 'center',
    },
    Image: {
        height: '90%',
        width: '90%',
    },
    ViewItems: {
        marginTop: 80,
    },
    title: {
        fontSize: 25,
        color: '#022704',
        textAlign: 'center',
        fontFamily: 'monospace',
        fontWeight: 'bold',
    },
    Phrase: {
        marginTop: 5,
        fontSize: 15,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    ContainerInputs: {
        alignItems: 'center',
        marginTop: 15,
    },
    InputEmail: {
        borderWidth: 0.5,
        height: 50,
        width: 300,
        borderRadius: 2,
        fontSize: 16,
        backgroundColor: '#D1E0CC',
        paddingLeft: 16,
        borderColor: '#ABD19F',
        
    },
    InputPassword: {
        borderWidth: 0.5,
        marginTop: 15,
        height: 50,
        width: 300,
        borderRadius: 2,
        fontSize: 16,
        backgroundColor: '#D1E0CC',
        paddingLeft: 16,
        borderColor: '#ABD19F',
    },
    ButtonLogin: {
        marginTop: 15,
        height: 50,
        width: 300,
        alignSelf: 'center',
        borderRadius: 5,
    },
});
export  default Component;