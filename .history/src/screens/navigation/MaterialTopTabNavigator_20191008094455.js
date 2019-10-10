import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-elements';
import colors from '../../constants/Color'
import Detail from '../main/progress/Detail';
import History from '../main/progress/History';
const TabNavigatorConfig = {
    activeColor: colors.primaryColor,
    inactiveColor: colors.inActiveColorBottom,
    barStyle: { backgroundColor: '#ffffff'},
}
const MaterialTopTabNavigator = createMaterialTopTabNavigator({
    Detail: {
        screen: Detail
    },
    History: {
        screen: History
    },
}, TabNavigatorConfig)

export default createAppContainer(MaterialTopTabNavigator)