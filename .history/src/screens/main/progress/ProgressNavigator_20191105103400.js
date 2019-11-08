import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Progress from './Progress'
import History from './History'
import colors from '../../../constants/Color'
import RightTopButton from '../../../components/RightTopButton'
import MaterialTopTabNavigator from '../../navigation/MaterialTopTabNavigator'
import AddManualEntry from './AddManualEntry';
import AddGoal from './AddGoal';
import CreatePost from './CreatePost';
export default ProgressNavigator = createAppContainer(createStackNavigator({
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
        screen: MaterialTopTabNavigator,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Detail',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    AddManualEntry: {
        screen: AddManualEntry,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Add Manual Entry',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    AddGoal: {
        screen: AddGoal,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Add Goal',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    },
    CreatePost: {
        screen: CreatePost,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Add Goal',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    }

})) 