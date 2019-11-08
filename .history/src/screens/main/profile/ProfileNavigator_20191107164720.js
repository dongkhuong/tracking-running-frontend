import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Profile from './Profile'
import Settings from './Settings' 
import colors from '../../../constants/Color'
import RightTopButton from '../../../components/RightTopButton'
import EditProfile from './EditProfile';
import Friend from './Friend';
export default ProfileNavigator = createAppContainer(createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Profile',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
            headerRight: <RightTopButton nameRedirect="Settings" name="settings" color={colors.white} navigation={navigation}/>,
        })
    },
    Settings: {
        screen: Settings,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Settings',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    EditProfile: {
        screen: EditProfile,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'User Profile',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    Friend: {
        screen: Friend,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Friend',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    }
})) 