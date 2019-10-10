import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './screens/login/Login'
import Register from './screens/register/Register'

export const AuthNavigator = createAppContainer(createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({
            header: null
        })
    },
    Register: {
        screen: Register,
        navigationOptions: () => ({
            header: null
        })
    } 
}))