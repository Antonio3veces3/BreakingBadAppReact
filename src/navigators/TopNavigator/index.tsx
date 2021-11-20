import React from 'react'
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CharacterScreen from '../../screens/CharacterScreen';
import SettingSreen from '../../screens/SettingsScreen';
import PhrasesScreen from '../../screens/PhrasesScreen';

const Tab = createMaterialTopTabNavigator();

const Component = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Characters" component={CharacterScreen}/>
        <Tab.Screen name="Phrases" component={PhrasesScreen} />
        <Tab.Screen name="Settings" component={SettingSreen} />
      </Tab.Navigator>
    );
};

export  default Component;