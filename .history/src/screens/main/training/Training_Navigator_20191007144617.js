import React, { Component } from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Training from './Training'
import colors from '../../../constants/Color'
export default Training_Navigator = createAppContainer(createStackNavigator({
    Training: {
        screen: Training,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Training',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    }
})) 