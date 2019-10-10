import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements'
import Progress from './Progress'
import MenuButton from '../../../components/MenuButton'
import TextPage from '../../../components/TextPage'
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
export default Progress_Navigator = createAppContainer(createStackNavigator({
    Progress: {
        screen: Progress,
        navigationOptions: ({ navigation }) => ({
            header:
            <Header
            leftComponent={<MenuButton name="menu" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
            centerComponent={<TextPage color={colors.white} fontSize={fonts.fontTitlePage}>Progress</TextPage>}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{ backgroundColor: colors.white }}
            />
        })
    }
})) 