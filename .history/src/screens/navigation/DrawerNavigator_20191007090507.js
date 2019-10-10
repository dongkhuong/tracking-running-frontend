import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import metrics from '../../constants/Metric'
import Newsfeed_Navigator from '../main/newsfeed/Newsfeed_Navigator'
import Progress_Navigator from '../main/progress/Progress_Navigator'
import Activity_Navigator from '../main/activity/Activity_Navigator'
import Training_Navigator from '../main/training/Training_Navigator'
import Profile_Navigator from '../main/profile/Profile_Navigator'
import MenuDrawer from '../../components/MenuDrawer';
const RouteConfigs = {
    drawerWidth: metrics.DEVICE_WIDTH*0.7,
    // contentComponent: ({ navigation }) => {
    //     return(<MenuDrawer navigation={navigation} />)
    // }
}
const DrawerNavigator = createDrawerNavigator({
    NewsFeed: {
        screen: Newsfeed_Navigator
    },
    Progress: {
        screen: Progress_Navigator
    },
    Activity: {
        screen: Activity_Navigator
    },
    Training: {
        screen: Training_Navigator
    },
    Profile: {
        screen: Profile_Navigator
    }
}, DrawerConfig)

export default createAppContainer(DrawerNavigator)