import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Newsfeed_Navigator from '../main/newsfeed/Newsfeed_Navigator'
import Progress_Navigator from '../main/progress/Progress_Navigator'
import Activity_Navigator from '../main/activity/Activity_Navigator'
import Training_Navigator from '../main/training/Training_Navigator'
import Profile_Navigator from '../main/profile/Profile_Navigator'

const RouteConfigs = {
    activeColor: 'red',
    inactiveColor: '#3e2465',
}
const MaterialBottomTabNavigator = createMaterialBottomTabNavigator({
    NewsFeed: {
        screen: Newsfeed_Navigator
    },
    Progress: {
        screen: Progress_Navigator
    },
    Activity: {
        screen: Activity_Navigator
    },
    Training: {
        screen: Training_Navigator
    },
    Profile: {
        screen: Profile_Navigator
    }
}, RouteConfigs)

export default createAppContainer(MaterialBottomTabNavigator)