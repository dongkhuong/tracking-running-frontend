import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './screens/login/Login'
import Register from './screens/register/Register'
import MaterialBottomTabNavigator from './screens/navigation/MaterialBottomTabNavigator'

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
            headerStyle: {
                backgroundColor: '#fff', 
                elevation:0
            }
        })
    } 
},{
    initialRouteName: 'Login',
})) 
export const AppNavigator = createAppContainer(createSwitchNavigator({
    AuthNavigator: {
        screen: AuthNavigator
    },
    MaterialBottomTabNavigator: {
        screen: MaterialBottomTabNavigator
    }
},{
    initialRouteName: 'AuthNavigator',
}))