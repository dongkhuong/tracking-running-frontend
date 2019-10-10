import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements'
import Activity from './Activity'
import MenuButton from '../../../components/MenuButton'
import TextPage from '../../../components/TextPage'
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
import metrics from '../../../constants/Metric'
export default Activity_Navigator = createAppContainer(createStackNavigator({
    Activity: {
        screen: Activity,
        navigationOptions: ({ navigation }) => ({
            header:
            <Header
            leftComponent={{ text: 'Activity', style: {width: metrics.DEVICE_WIDTH*0.3, fontSize: fonts.fontTitleHeader, color: colors.white, fontFamily: 'Mansalva-Regular'}}}
            containerStyle={{paddingTop: 0, height: metrics.DEVICE_WIDTH*0.13}}
            backgroundColor={colors.primaryColor}
            />
        })
    }
})) 