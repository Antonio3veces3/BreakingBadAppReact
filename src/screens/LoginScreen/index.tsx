import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import {useForm} from '../../hooks/useForm';
import { LoginInterface } from '../../interfaces/LoginInterfaces';

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
       <View>
           <Text>Login</Text>
           <View>
               <TextInput 
               value={email as string}
               onChangeText={value => onChange('email',value)}
               placeholder= "Email"
               placeholderTextColor= "black"
               keyboardType= "email-address"/>
           </View>
           <View>
               <TextInput 
               value={password as string}
               onChangeText={value => onChange('password',value)}
               placeholder= "Password"
               secureTextEntry= {true}
               placeholderTextColor= "black"
               />
           </View>
           <TouchableOpacity onPress={doLogin}>
               <Text>Sign In</Text>
           </TouchableOpacity>
       </View>
    )
}

const styles= StyleSheet.create({
    Container: {

    },
});
export  default Component;