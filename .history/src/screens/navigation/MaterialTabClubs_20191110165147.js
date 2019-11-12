import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import TabAllClubs from '../main/clubs/TabAllClubs';
import TabOther from '../main/clubs/TabOther';

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
}, {
    tabBarOptions: {
        barStyle: { backgroundColor: '#ffffff'}
    }
})

export default createAppContainer(MaterialTopTabNavigator)