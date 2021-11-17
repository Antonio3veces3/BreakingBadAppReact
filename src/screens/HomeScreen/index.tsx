import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopNavigator from '../../navigators/TopNavigator';
const Tab = createMaterialTopTabNavigator();

const Component = () => {
    return (
        <TopNavigator/>
    );
};

export  default Component;