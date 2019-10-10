import React, { Component } from 'react'
import { View } from 'react-native'
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
import GoBackButton from '../../../components/GoBackButton';
import SearchFriend from './SearchFriend'
export default NewsFeed_Navigator = createAppContainer(createStackNavigator({
    NewsFeed: {
        screen: NewsFeed,
        navigationOptions: ({ navigation }) => ({
            header: 
            <Header
            leftComponent={<MenuButton name="menu" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
            centerComponent={<TextPage color={colors.white} fontSize={fonts.fontTitlePage}>NewsFeed</TextPage>}
            rightComponent={
             <View style={{flexDirection: 'row', justifyContent:'center'}}>   
            <RightTopButton nameRedirect="AddFriend" name="person-add" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}
            />
            <RightTopButton nameRedirect="AddFriend" name="person-add" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>
            </View>
        }

            />
        })
    },
    AddFriend: {
        screen: AddFriend,
        navigationOptions: ({ navigation }) => ({
            header: 
            <Header
            leftComponent={<GoBackButton name="arrow-back" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
            centerComponent={<TextPage color={colors.white} fontSize={fonts.fontTitlePage}>Add Friend</TextPage>}
            rightComponent={<RightTopButton nameRedirect="SearchFriend" name="search" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
            />
        })
    },
    SearchFriend: {
        screen: SearchFriend,
        navigationOptions: ({ navigation }) => ({
            header: 
            <Header
            leftComponent={<GoBackButton name="arrow-back" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
            centerComponent={<TextPage color={colors.white} fontSize={fonts.fontTitlePage}>Search Friend</TextPage>}
            // rightComponent={<RightTopButton nameRedirect="SearchFriend" name="search" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
            />
        })
    }
})) 