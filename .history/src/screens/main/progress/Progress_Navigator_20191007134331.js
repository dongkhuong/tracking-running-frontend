import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements'
import Progress from './Progress'
import MenuButton from '../../../components/MenuButton'
import TextPage from '../../../components/TextPage'
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
import metrics from '../../../constants/Metric'
import AddManualEntry from './AddManualEntry';
import GoBackButton from '../../../components/GoBackButton'
export default Progress_Navigator = createAppContainer(createStackNavigator({
    Progress: {
        screen: Progress,
        navigationOptions: ({ navigation }) => ({
            header:
            <Header
            leftComponent={{ text: 'Progress', style: {width: metrics.DEVICE_WIDTH*0.3, fontSize: fonts.fontTitleHeader, color: colors.white, fontFamily: 'Montserrat-Regular'}}}
            containerStyle={{paddingTop: 0, height: metrics.DEVICE_WIDTH*0.13}}
            backgroundColor={colors.primaryColor}
            />
        })
    },
    // AddManualEntry: {
    //     screen: AddManualEntry,
    //     navigationOptions: ({ navigation }) => ({
    //         header: 
    //         <Header
    //         leftComponent={<GoBackButton name="arrow-back" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
    //         centerComponent={<TextPage color={colors.white} fontSize={fonts.fontTitlePage}>Add Friend</TextPage>}
    //         // rightComponent={<RightTopButton nameRedirect="SearchFriend" name="search" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
    //         />
    //     })
    // },
})) 