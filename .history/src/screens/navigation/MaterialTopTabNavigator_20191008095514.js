import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-elements';
import colors from '../../constants/Color'
import DetailImage from '../main/progress/DetailImage';
import DetailMap from '../main/progress/DetailMap';
// const TabNavigatorConfig = {
//     activeColor: colors.primaryColor,
//     inactiveColor: colors.inActiveColorBottom,
//     barStyle: { backgroundColor: '#ffffff'},
// }
const MaterialTopTabNavigator = createMaterialTopTabNavigator({
    DetailImage: {
        screen: DetailImage
    },
    DetailMap: {
        screen: DetailMap
    },
})

export default createAppContainer(MaterialTopTabNavigator)