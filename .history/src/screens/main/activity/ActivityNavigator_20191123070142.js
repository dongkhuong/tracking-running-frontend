import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Activity from './Activity'
import colors from '../../../constants/Color'
const ActivityNavigator = createAppContainer(createStackNavigator({
    Activity: {
        screen: Activity,
        navigationOptions:({ navigation }) => ({
            headerTitle: 'Activity',
            headerTintColor: colors.white,
            headerBackground: <View style={{flex: 1, backgroundColor: colors.primaryColor}}></View>,
        })
    }
})) 
ActivityNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
}
export default ActivityNavigator