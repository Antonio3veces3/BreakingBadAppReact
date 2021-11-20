import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { CharactersInterface } from '../../interfaces/LoginInterfaces';
import {Icon} from 'react-native-elements';
import {useState} from 'react';

interface Props{
    character: CharactersInterface;
};

const Component = (props: Props) => {
    const {character}= props;
    const {name, img, nickname, status} = character;
    const [stateIcon, setStateIcon] = useState("coffin");
    const [colorIcon, setColorIcon] = useState("red");

    useEffect(() => {
        switch(status){
            case "Alive":
                setStateIcon("heart");
                setColorIcon("red");
                break;
                case "Deceased":
                    setStateIcon("skull-crossbones");
                    setColorIcon("black");
                    break;
                default: 
                setStateIcon("help-circle");
                setColorIcon("#D1C710");
                break;
        }
    }, [])

    return (
        <View style= {styles.Container}>
            <View style= {styles.ViewImage}>
                <Image source={{uri: img,}} style={styles.Img}/>
            </View>
            <View style= {styles.ViewNames}>
                <Text style={styles.Name}>{name}</Text>
                <Text style={styles.Nickname}>{nickname}</Text>
            </View>
            <View style= {styles.ViewIcon}>
                <Icon type="material-community"  name={stateIcon} color={colorIcon} size={30} />
                
            </View>
        </View>
    );
};

const styles=  StyleSheet.create({
    Container: {
        backgroundColor: 'white',
        borderColor: '#B8B8B8',
        borderWidth: 0.55,
        height: 100,
        borderBottomWidth: 0.3,
        flexDirection: 'row',
    },
    ViewImage: {
        alignSelf: 'center',
        marginLeft: 15,
    },
    Img: {
        width: 80,
        height: 80,
        borderRadius: 40, 
    },
    ViewNames:{
        marginLeft: 30,
        alignSelf: 'center',
        width: 10*15,
    },
    Name: {
        fontSize: 20,
        letterSpacing: 0.3,
        color: '#001400',
        fontWeight: 'bold',
    },
    Nickname: {
        fontSize: 18,
        fontStyle: 'italic',
        letterSpacing: 0.3,
        color: '#1D3B72',
    },
    ViewIcon: {
        flexDirection: 'column',
        marginLeft: 18,
        alignSelf: 'center'
    },
});
export default Component; 