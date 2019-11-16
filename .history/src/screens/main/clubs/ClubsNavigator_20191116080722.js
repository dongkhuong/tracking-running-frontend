import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import colors from '../../../constants/Color'
import Clubs from './Clubs';
import RightTopButton from '../../../components/RightTopButton';
import SearchClub from './SearchClub';
import MaterialTabClubs from '../../navigation/MaterialTabClubs';
import ClubDetail from './ClubDetail';
import CommentClub from './CommentClub';
import FollowPost from './FollowPost';
import AddPost from './AddPost';
import Challenge from './Challenge';
const ClubsNavigator = createAppContainer(createStackNavigator({
    Clubs: {
        screen: Clubs,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Clubs',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
            headerRight: <RightTopButton nameRedirect="SearchClub" name="search" color={colors.white} navigation={navigation}/>,
        })
    },
    SearchClub: {
        screen: SearchClub,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Search Club',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    MaterialTabClubs: {
        screen: MaterialTabClubs,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'All Clubs',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    ClubDetail: {
        screen: ClubDetail,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Club Detail',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    CommentClub: {
        screen: CommentClub,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Discussion',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    FollowPost: {
        screen: FollowPost,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Who liked this post',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    AddPost: {
        screen: AddPost,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Add Post',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    Challenge: {
        screen: Challenge,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Challenge',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    }
    
})) 
ClubsNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
}

export default ClubsNavigator