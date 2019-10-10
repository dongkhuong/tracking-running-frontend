import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements'
import Progress from './Progress'
import MenuButton from '../../../components/MenuButton'
export default Progress_Navigator = createAppContainer(createStackNavigator({
    Progress: {
        screen: Progress,
        navigationOptions: () => ({
            header:
            <Header
            leftComponent={<MenuButton name="menu" color="white" size={25} navigation={navigation}/>}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
        })
    }
})) 