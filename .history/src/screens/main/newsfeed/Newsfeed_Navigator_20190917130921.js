import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import NewsFeed from './Newsfeed';
export const NewsFeed_Navigator = createAppContainer(createStackNavigator({
    NewsFeed: {
        screen: NewsFeed,
        navigationOptions: () => ({
            header: null
        })
    }
})) 