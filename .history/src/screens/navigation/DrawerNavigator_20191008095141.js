import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import metrics from '../../constants/Metric'
import NewsfeedNavigator from '../main/newsfeed/NewsfeedNavigator'
import ProgressNavigator from '../main/progress/ProgressNavigator'
import ActivityNavigator from '../main/activity/ActivityNavigator'
import TrainingNavigator from '../main/training/TrainingNavigator'
import ProfileNavigator from '../main/profile/ProfileNavigator'
import MenuDrawer from '../../components/MenuDrawer';
const DrawerConfig = {
    drawerWidth: metrics.DEVICE_WIDTH*0.7,
    // contentComponent: ({ navigation }) => {
    //     return(<MenuDrawer navigation={navigation} />)
    // }
}
const DrawerNavigator = createDrawerNavigator({
    NewsFeed: {
        screen: NewsfeedNavigator
    },
    Progress: {
        screen: ProgressNavigator
    },
    Activity: {
        screen: ActivityNavigator
    },
    Training: {
        screen: TrainingNavigator
    },
    Profile: {
        screen: ProfileNavigator
    }
}, DrawerConfig)

export default createAppContainer(DrawerNavigator)