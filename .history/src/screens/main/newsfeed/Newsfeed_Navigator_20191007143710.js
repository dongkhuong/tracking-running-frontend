import React, { Component } from 'react'
import { Text, ImageBackground, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements'
import NewsFeed from './Newsfeed'
import MenuButton from '../../../components/MenuButton'
import TextPage from '../../../components/TextPage'
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
import RightTopButton from '../../../components/RightTopButton'
import AddFriend from './AddFriend'
import GoBackButton from '../../../components/GoBackButton'
import SearchFriend from './SearchFriend'
import metrics from '../../../constants/Metric'
export default NewsFeed_Navigator = createAppContainer(createStackNavigator({
    NewsFeed: {
        screen: NewsFeed,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'NewsFeed',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
            headerRight: <RightTopButton nameRedirect="AddFriend" name="contacts" color={colors.white} navigation={navigation}/>,
        })
    },
    AddFriend: {
        screen: AddFriend,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Add friend',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
            headerRight: <RightTopButton nameRedirect="SearchFriend" name="search" color={colors.white} navigation={navigation}/>,
        })
    },
    SearchFriend: {
        screen: SearchFriend,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Search Friend',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    }
})) 