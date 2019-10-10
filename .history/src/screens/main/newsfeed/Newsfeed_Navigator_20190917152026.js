import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements'
import NewsFeed from './Newsfeed'
import MenuButton from '../../../components/MenuButton'
import TextPage from '../../../components/TextPage'
import metrics from '../../../constants/Color'
import fonts from '../../../constants/Font'
export default NewsFeed_Navigator = createAppContainer(createStackNavigator({
    NewsFeed: {
        screen: NewsFeed,
        navigationOptions: ({ navigation }) => ({
            header: 
            <Header
            leftComponent={<MenuButton name="menu" color={metrics.white} size={25} navigation={navigation}/>}
            centerComponent={<TextPage color={metrics.white} fontSize={}>NewsFeed</TextPage>}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
        })
    }
})) 