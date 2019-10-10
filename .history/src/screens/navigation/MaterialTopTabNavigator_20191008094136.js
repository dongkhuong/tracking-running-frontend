import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-elements';
import colors from '../../constants/Color'
import Detail from '../main/progress/Detail';
const TabNavigatorConfig = {
    activeColor: colors.primaryColor,
    inactiveColor: colors.inActiveColorBottom,
    barStyle: { backgroundColor: '#ffffff'},
}
const MaterialTopTabNavigator = createMaterialTopTabNavigator({
    Detail: {
        screen: Detail,
        navigationOptions: {
            tabBarLabel: 'Detail',
            tabBarIcon: ({focused}) => (
                <Icon name="new-releases" color={focused ? colors.primaryColor : colors.inActiveColorBottom}/>
            )
        }
    },
}, TabNavigatorConfig)

export default createAppContainer(MaterialTopTabNavigator)