import { NavigationRouteContext } from '@react-navigation/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native';

const image= require('../../assets/Images/breakingbad.jpg');

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
    const {navigation} = props;

    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('Login');
        });
    }, []);
    return (
        <View style={styles.Container}>
            <ImageBackground source={image} style={styles.image}/>
        </View>
    );
};

const styles= StyleSheet.create({
    Container: {
        flex:1,
    },
    image: {
        flex: 1,
    }
});
export default Component;