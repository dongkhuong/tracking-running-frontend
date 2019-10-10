import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Progress from './Progress'
import colors from '../../../constants/Color'
export default Progress_Navigator = createAppContainer(createStackNavigator({
    Progress: {
        screen: Progress,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Progress',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
})) 