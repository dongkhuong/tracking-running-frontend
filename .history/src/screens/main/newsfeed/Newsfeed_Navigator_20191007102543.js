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
import GoBackButton from '../../../components/GoBackButton';
import SearchFriend from './SearchFriend'
export default NewsFeed_Navigator = createAppContainer(createStackNavigator({
    NewsFeed: {
        screen: NewsFeed,
        navigationOptions: ({}) => ({
            header: 
            <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{paddingTop: 0, height:50}}
          />
        })
        // navigationOptions: ({ navigation }) => ({
        //     header: 
        //     <Header
        //     leftComponent={<MenuButton name="menu" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
        //     centerComponent={<TextPage color={colors.white} fontSize={fonts.fontTitlePage}>NewsFeed</TextPage>}
        //     rightComponent={<RightTopButton nameRedirect="AddFriend" name="person-add" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
        //     />
        // })
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