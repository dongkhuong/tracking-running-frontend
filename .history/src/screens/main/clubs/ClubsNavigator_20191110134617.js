import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import colors from '../../../constants/Color'
import GetStarted from './GetStarted';
import Clubs from './Clubs';
export default ClubsNavigator = createAppContainer(createStackNavigator({
    Clubs: {
        screen: Clubs,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Clubs',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    }
})) 