import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { CharactersInterface } from '../../interfaces/LoginInterfaces';

interface Props{
    character: CharactersInterface;
};

const Component = (props: Props) => {
    const {character}= props;
    const {name} = character;
    return (
        <View style= {styles.Container}><Text>{name}</Text></View>
    )
}

const styles=  StyleSheet.create({
    Container: {
        backgroundColor: 'grey',
        borderColor: 'white',
        borderWidth: 0.5,
        height: 100,
        borderBottomWidth: 0.5,
    }
});
export default Component; 