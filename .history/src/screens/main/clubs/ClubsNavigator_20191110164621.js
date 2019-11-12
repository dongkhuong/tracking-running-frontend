import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import colors from '../../../constants/Color'
import Clubs from './Clubs';
import RightTopButton from '../../../components/RightTopButton';
import SearchClub from './SearchClub';
import MaterialTabClubs from '../../navigation/MaterialTabClubs';
export default ClubsNavigator = createAppContainer(createStackNavigator({
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
})) 
