import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements';
import NewsFeed from './Newsfeed';
import MenuButton from '../../../components/MenuButton';
export default NewsFeed_Navigator = createAppContainer(createStackNavigator({
    NewsFeed: {
        screen: NewsFeed,
        navigationOptions: () => ({
            header: 
            <Header
            leftComponent={<MenuButton name="menu" color="white" size={25}/>}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
        })
    }
})) 