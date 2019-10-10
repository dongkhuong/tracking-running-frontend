import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements'
import Profile from './Profile'
import Settings from './Settings' 
import MenuButton from '../../../components/MenuButton'
import TextPage from '../../../components/TextPage'
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
import GoBackButton from '../../../components/GoBackButton';
import RightTopButton from '../../../components/RightTopButton';
export default Profile_Navigator = createAppContainer(createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            header: 
            <Header
            leftComponent={<MenuButton name="menu" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
            centerComponent={<TextPage color={colors.white} fontSize={fonts.fontTitlePage}>Profile</TextPage>}
            rightComponent={<RightTopButton nameRedirect="SearchFriend" name="search" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
            />
        })
    },
    Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => ({
            header: 
            <Header
            leftComponent={<GoBackButton name="arrow-back" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
            centerComponent={<TextPage color={colors.white} fontSize={fonts.fontTitlePage}>Add Friend</TextPage>}
            rightComponent={{ icon="home", color="white" }}
            />
        })
    },
})) 