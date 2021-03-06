import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Newsfeed_Navigator from '../main/newsfeed/Newsfeed_Navigator';
import Progress_Navigator from '../main/progress/Progress_Navigator';
import Activity_Navigator from '../main/activity/Activity_Navigator';
import Training_Navigator from '../main/training/Training_Navigator';

const DrawerNavigator = createDrawerNavigator({
    NewsFeed: {
        screen: Newsfeed_Navigator
    },
    // Progress: {
    //     screen: Progress_Navigator
    // },
    // Activity: {
    //     screen: Activity_Navigator
    // },
    // Training: {
    //     screen: Training_Navigator
    // },
    // Profile: {
    //     screen: Progress_Navigator
    // }
})
export default createAppContainer(DrawerNavigator)