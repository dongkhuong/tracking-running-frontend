import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Newsfeed_Navigator from '../main/newsfeed/Newsfeed_Navigator';

const DrawerNavigator = createDrawerNavigator({
    NewsFeed: {
        screen: Newsfeed_Navigator
    }
})
export default createAppContainer(DrawerNavigator)