import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements'
import Training from './Training'
import MenuButton from '../../../components/MenuButton'
import TextPage from '../../../components/TextPage'
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
export default Training_Navigator = createAppContainer(createStackNavigator({
    Training: {
        screen: Training,
        navigationOptions: ({ navigation }) => ({
            header:
            <Header
            leftComponent={<MenuButton name="menu" color={colors.white}size={25} navigation={navigation}/>}
            centerComponent={<TextPage color={colors.white} fontSize={fonts.fontTitlePage}>Training</TextPage>}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
        })
    }
})) 