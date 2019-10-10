import React, { Component } from 'react'
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
        header: () => (
            <Header
            backgroundColor={colors.primaryColor}
            centerComponent={{ text: 'Add Friend', style: {fontSize: fonts.fontTitleHeader, color: colors.white}}}/>
        )
    },
    AddFriend: {
        screen: AddFriend,
        navigationOptions: ({ navigation }) => ({
            header: 
            <Header
            leftComponent={<GoBackButton name="arrow-back" color={colors.white} navigation={navigation}/>}
            centerComponent={{ text: 'Add Friend', style: {fontSize: fonts.fontTitleHeader, color: colors.white}}}
            rightComponent={<RightTopButton nameRedirect="SearchFriend" name="search" color={colors.white} navigation={navigation}/>}
            containerStyle={{paddingTop: 0, height: metrics.DEVICE_WIDTH*0.13}}
            backgroundColor={colors.primaryColor}
            />
        })
    },
    SearchFriend: {
        screen: SearchFriend,
        navigationOptions: ({ navigation }) => ({
            header: 
            <Header
            leftComponent={<GoBackButton name="arrow-back" color={colors.white} navigation={navigation}/>}
            centerComponent={{ text: 'Search Friend', style: {fontSize: fonts.fontTitleHeader, color: colors.white}}}
            // rightComponent={<RightTopButton nameRedirect="SearchFriend" name="search" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
            containerStyle={{paddingTop: 0, height: metrics.DEVICE_WIDTH*0.13}}
            backgroundColor={colors.primaryColor}
            />
        })
    }
})) 