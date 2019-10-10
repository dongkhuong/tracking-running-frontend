import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements'
import Activity from './Activity'
import MenuButton from '../../../components/MenuButton'
export default Activity_Navigator = createAppContainer(createStackNavigator({
    Activity: {
        screen: Activity,
        navigationOptions: ({ navigation }) => ({
            header:
            <Header
            leftComponent={<MenuButton name="menu" color="white" size={25} navigation={navigation}/>}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
        })
    }
})) 