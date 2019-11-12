import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import TabAllClubs from '../main/clubs/TabAllClubs';
import TabOther from '../main/clubs/TabOther';

const MaterialTopTabNavigator = createMaterialTopTabNavigator({
    TabAllClubs: {
        screen: TabAllClubs,
        navigationOptions: {
            tabBarLabel: 'All Clubs',
        }
    },
    TabOther: {
        screen: TabOther,
        navigationOptions: {
            tabBarLabel: 'Other Clubs',
        }
    },
})

export default createAppContainer(MaterialTopTabNavigator)