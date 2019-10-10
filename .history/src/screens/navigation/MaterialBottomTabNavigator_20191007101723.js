import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Newsfeed_Navigator from '../main/newsfeed/Newsfeed_Navigator'
import Progress_Navigator from '../main/progress/Progress_Navigator'
import Activity_Navigator from '../main/activity/Activity_Navigator'
import Training_Navigator from '../main/training/Training_Navigator'
import Profile_Navigator from '../main/profile/Profile_Navigator'
import { Icon } from 'react-native-elements';
import colors from '../../constants/Color'
const RouteConfigs = {
    activeColor: colors.activeColorBottom,
    inactiveColor: colors.inActiveColorBottom,
    barStyle: { backgroundColor: '#ffffff' },
}
const MaterialBottomTabNavigator = createMaterialBottomTabNavigator({
    NewsFeed: {
        screen: Newsfeed_Navigator,
        navigationOptions: {
            tabBarLabel: 'NewsFeed',
            tabBarIcon: ({focused}) => (
                <Icon name="new-releases" color={focused ? colors.activeColorBottom : colors.inActiveColorBottom}/>
            )
        }
    },
    Progress: {
        screen: Progress_Navigator,
        navigationOptions: {
            tabBarLabel: 'Progress',
            tabBarIcon: () => (
                <Icon name="settings" color={focused ? colors.activeColorBottom : colors.inActiveColorBottom}/>
            )
        }
    },
    Activity: {
        screen: Activity_Navigator,
        navigationOptions: {
            tabBarLabel: 'Activity',
            tabBarIcon: () => (
                <Icon name="settings" color={focused ? colors.activeColorBottom : colors.inActiveColorBottom}/>
            )
        }
    },
    Training: {
        screen: Training_Navigator,
        navigationOptions: {
            tabBarLabel: 'Training',
            tabBarIcon: () => (
                <Icon name="settings" color={focused ? colors.activeColorBottom : colors.inActiveColorBottom}/>
            )
        }
    },
    Profile: {
        screen: Profile_Navigator,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
                <Icon name="settings" color={focused ? colors.activeColorBottom : colors.inActiveColorBottom}/>
            )
        }
    }
}, RouteConfigs)

export default createAppContainer(MaterialBottomTabNavigator)