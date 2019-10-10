import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import NewsFeed from './Newsfeed'
import colors from '../../../constants/Color'
import RightTopButton from '../../../components/RightTopButton'
import AddFriend from './AddFriend'
import SearchFriend from './SearchFriend'
export default NewsFeedNavigator = createAppContainer(createStackNavigator({
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