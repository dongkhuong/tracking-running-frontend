import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Training from './Training'
import colors from '../../../constants/Color'
import GetStarted from './GetStarted';
export default TrainingNavigator = createAppContainer(createStackNavigator({
    Training: {
        screen: Training,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Training',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    GetStarted: {
        screen: GetStarted,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Get Started',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    }
})) 