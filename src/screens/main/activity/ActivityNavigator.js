import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Activity from './Activity'
import colors from '../../../constants/Color'
export default ActivityNavigator = createAppContainer(createStackNavigator({
    Activity: {
        screen: Activity,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Activity',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    }
})) 