import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import NewsFeed from './Newsfeed'
import colors from '../../../constants/Color'
import RightTopButton from '../../../components/RightTopButton'
import AddFriend from './AddFriend'
import SearchFriend from './SearchFriend';
import ListComment from './ListComment';
import FollowFriend from './FollowFriend';
const NewsFeedNavigator = createAppContainer(createStackNavigator({
    NewsFeed: {
        screen: NewsFeed,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'NewsFeed',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
            headerRight: <RightTopButton nameRedirect="AddFriend" name="person-add" color={colors.white} navigation={navigation}/>,
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
    },
    ListComment: {
        screen: ListComment,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Discussion',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    FollowFriend: {
        screen: FollowFriend,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Friends',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    }
    
})) 

NewsFeedNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
}

export default NewsFeedNavigator