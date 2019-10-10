import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Progress from './Progress'
import History from './History'
import colors from '../../../constants/Color'
import RightTopButton from '../../../components/RightTopButton';
import Detail from './Detail';
export default Progress_Navigator = createAppContainer(createStackNavigator({
    Progress: {
        screen: Progress,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Progress',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    History: {
        screen: History,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'History',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    Detail: {
        screen: Detail,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'TH 3, 01/10/2019',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    }
})) 