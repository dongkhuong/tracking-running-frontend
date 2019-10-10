import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Newsfeed_Navigator from '../main/newsfeed/Newsfeed_Navigator'
import Progress_Navigator from '../main/progress/Progress_Navigator'
import Activity_Navigator from '../main/activity/Activity_Navigator'
import Training_Navigator from '../main/training/Training_Navigator'
import Profile_Navigator from '../main/profile/Profile_Navigator'
import { Icon } from 'react-native-elements';
import Color from '../../constants/Color'
const RouteConfigs = {
    activeColor: '#003BC1',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#ffffff' },
}
const MaterialBottomTabNavigator = createMaterialBottomTabNavigator({
    NewsFeed: {
        screen: Newsfeed_Navigator,
        navigationOptions: {
            tabBarLabel: 'NewsFeed',
            tabBarIcon: ({focused}) => (
                <Icon name="new-releases" color={focused ? '#003BC1' : '#C1C7D0'}/>
            )
        }
    },
    Progress: {
        screen: Progress_Navigator,
        navigationOptions: {
            tabBarLabel: 'Progress',
            tabBarIcon: () => (
                <Icon name="settings" color='#C1C7D0'/>
            )
        }
    },
    Activity: {
        screen: Activity_Navigator,
        navigationOptions: {
            tabBarLabel: 'Activity',
            tabBarIcon: () => (
                <Icon name="settings" color='#C1C7D0'/>
            )
        }
    },
    Training: {
        screen: Training_Navigator,
        navigationOptions: {
            tabBarLabel: 'Training',
            tabBarIcon: () => (
                <Icon name="settings" color='#C1C7D0'/>
            )
        }
    },
    Profile: {
        screen: Profile_Navigator,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
                <Icon name="settings" color='#C1C7D0'/>
            )
        }
    }
}, RouteConfigs)

export default createAppContainer(MaterialBottomTabNavigator)