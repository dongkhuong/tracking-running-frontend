import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements';
import Profile from './Profile';
export default Profile_Navigator = createAppContainer(createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: () => ({
            header: null
        })
    }
})) 