import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Newsfeed_Navigator from '../main/newsfeed/Newsfeed_Navigator'
import Progress_Navigator from '../main/progress/Progress_Navigator'
import Activity_Navigator from '../main/activity/Activity_Navigator'
import Training_Navigator from '../main/training/Training_Navigator'
import Profile_Navigator from '../main/profile/Profile_Navigator'
import { Icon } from 'react-native-elements';

const RouteConfigs = {
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
}
const MaterialBottomTabNavigator = createMaterialBottomTabNavigator({
    NewsFeed: {
        screen: Newsfeed_Navigator,
        navigationOptions: {
            tabBarLabel: 'NewsFeed',
            tabBarIcon: () => (
                <Icon name="newspaper"/>
            )
        }
    },
    Progress: {
        screen: Progress_Navigator,
        navigationOptions: {
            tabBarLabel: 'Progress',
            tabBarIcon: () => (
                <Icon name="settings"/>
            )
        }
    },
    Activity: {
        screen: Activity_Navigator,
        navigationOptions: {
            tabBarLabel: 'Activity',
            tabBarIcon: () => (
                <Icon name="settings"/>
            )
        }
    },
    Training: {
        screen: Training_Navigator,
        navigationOptions: {
            tabBarLabel: 'Training',
            tabBarIcon: () => (
                <Icon name="settings"/>
            )
        }
    },
    Profile: {
        screen: Profile_Navigator,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
                <Icon name="settings"/>
            )
        }
    }
}, RouteConfigs)

export default createAppContainer(MaterialBottomTabNavigator)