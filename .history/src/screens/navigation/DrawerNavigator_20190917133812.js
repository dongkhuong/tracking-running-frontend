import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Newsfeed_Navigator from '../main/newsfeed/Newsfeed_Navigator';
import Login from '../login/Login';

const DrawerNavigator = createDrawerNavigator({
    Login: {
        screen: Login
    }
    ,NewsFeed: {
        screen: Newsfeed_Navigator
    }
})
export default createAppContainer(DrawerNavigator)