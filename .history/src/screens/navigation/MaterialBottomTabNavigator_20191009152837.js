import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import NewsfeedNavigator from '../main/newsfeed/NewsfeedNavigator'
import ProgressNavigator from '../main/progress/ProgressNavigator'
import ActivityNavigator from '../main/activity/ActivityNavigator'
import TrainingNavigator from '../main/training/TrainingNavigator'
import ProfileNavigator from '../main/profile/ProfileNavigator'
import Icon from 'react-native-ionicons'
import colors from '../../constants/Color'
const MaterialBottomTabNavigatorConfig = {
    activeColor: colors.primaryColor,
    inactiveColor: colors.inActiveColorBottom,
    barStyle: { backgroundColor: colors.white},
    
}
const MaterialBottomTabNavigator = createMaterialBottomTabNavigator({
    NewsFeed: {
        screen: NewsfeedNavigator,
        navigationOptions: {
            tabBarLabel: 'NewsFeed',
            tabBarIcon: ({focused}) => (
                <Icon name="today" color={focused ? colors.primaryColor : colors.inActiveColorBottom}/>
            )
        }
    },
    Progress: {
        screen: ProgressNavigator,
        navigationOptions: {
            tabBarLabel: 'Progress',
            tabBarIcon: ({focused}) => (
                <Icon name="clipboard" color={focused ? colors.primaryColor : colors.inActiveColorBottom}/>
            )
        }
    },
    Activity: {
        screen: ActivityNavigator,
        navigationOptions: {
            tabBarLabel: 'Activity',
            tabBarIcon: ({focused}) => (
                <Icon name="pin" color={focused ? colors.primaryColor : colors.inActiveColorBottom}/>
            )
        }
    },
    Training: {
        screen: TrainingNavigator,
        navigationOptions: {
            tabBarLabel: 'Training',
            tabBarIcon: ({focused}) => (
                <Icon name="book" color={focused ? colors.primaryColor : colors.inActiveColorBottom}/>
            )
        }
    },
    Profile: {
        screen: ProfileNavigator,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) => (
                <Icon name="person" color={focused ? colors.primaryColor : colors.inActiveColorBottom}/>
            )
        }
    }
}, MaterialBottomTabNavigatorConfig)

export default createAppContainer(MaterialBottomTabNavigator)