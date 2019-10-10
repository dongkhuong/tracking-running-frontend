import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements';
import Training from './Training';
export default Training_Navigator = createAppContainer(createStackNavigator({
    Training: {
        screen: Training,
        navigationOptions: () => ({
            header: null
        })
    }
})) 