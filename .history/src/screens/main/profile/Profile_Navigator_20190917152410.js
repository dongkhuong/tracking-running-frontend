import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements'
import Profile from './Profile'
import MenuButton from '../../../components/MenuButton'
export default Profile_Navigator = createAppContainer(createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            header: 
            <Header
            leftComponent={<MenuButton name="menu" color="white" size={25} navigation={navigation}/>}
            centerComponent={<TextPage color={metrics.white} fontSize={fonts.fontTitlePage}>Profile</TextPage>}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
        })
    }
})) 