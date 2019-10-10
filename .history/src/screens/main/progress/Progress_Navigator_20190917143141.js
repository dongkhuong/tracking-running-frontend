import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements';
import Progress from './Progress';
export default Progress_Navigator = createAppContainer(createStackNavigator({
    Progress: {
        screen: Progress,
        navigationOptions: () => ({
            header: null
        })
    }
})) 