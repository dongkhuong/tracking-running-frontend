import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements';
import Activity from './Activity';
export default Activity_Navigator = createAppContainer(createStackNavigator({
    Activity: {
        screen: Activity,
        navigationOptions: () => ({
            header: null
        })
    }
})) 