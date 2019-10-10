import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './screens/login/Login'
import Register from './screens/register/Register'
import DrawerNavigator from './screens/navigation/DrawerNavigator'

export const AuthNavigator = createAppContainer(createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({
            header: null
        })
    },
    Register: {
        screen: Register,
    } 
},{
    initialRouteName: 'Login',
})) 
export const AppNavigator = createAppContainer(createSwitchNavigator({
    AuthNavigator: {
        screen: AuthNavigator
    },
    DrawerNavigator: {
        screen: DrawerNavigator
    }
},{
    initialRouteName: 'DrawerNavigator',
}))