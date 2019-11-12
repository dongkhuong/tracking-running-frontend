import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import TabAllClubs from '../main/clubs/TabAllClubs';
import TabOther from '../main/clubs/TabOther';
import colors from '../../constants/Color'
const TabNavigatorConfig = {
    barStyle: { backgroundColor: '#ffffff'},
}
const MaterialTopTabNavigator = createMaterialTopTabNavigator({
    TabAllClubs: {
        screen: TabAllClubs,
        navigationOptions: {
            tabBarLabel: 'ALL',
        }
    },
    TabOther: {
        screen: TabOther,
        navigationOptions: {
            tabBarLabel: 'OTHER',
        }
    },
}, 
{
    tabBarOptions: {
        style: {
            backgroundColor: colors.white,
        },
        labelStyle: {
            color: colors.primaryColor,
            fontWeight: 'bold'
        },
        indicatorStyle: {
            backgroundColor: colors.primaryColor
        },
        pressColor: colors.primaryColor
    }
})

export default createAppContainer(MaterialTopTabNavigator)