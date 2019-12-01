import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { AuthNavigator } from './src/Router'
import metrics from './src/constants/Metric'
import Login from './src/screens/login/Login'
import TextPage from './src/components/TextPage'
import {Header} from 'react-native-elements'
import { AppNavigator } from './src/Router'
import CardShowcaseExample from './src/screens/demopage/CardShowcaseExample'
import { YellowBox } from 'react-native'
import MaterialBottomTabNavigator from './src/screens/navigation/MaterialBottomTabNavigator';
import MapGeolocation from './src/screens/demopage/MapGeolocation';
import DemoTimer from './src/screens/demopage/DemoTimer';
import CreatePost from './src/screens/main/progress/CreatePost';
import ListComment from './src/screens/main/newsfeed/ListComment';
import ClubDetail from './src/screens/main/clubs/ClubDetail';
import Challenge from './src/screens/main/clubs/Challenge';
import ListChallenge from './src/screens/main/clubs/ListChallenges';
import ChallengeDetail from './src/screens/main/clubs/ChallengeDetail';
class App extends Component{
  render(){
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ])
    return(
      <View style={styles.container}>
        {/* <AuthNavigator /> */}
        {/* <TextPage></TextPage> */}
        <AppNavigator />
        {/* <DemoTimer/> */}
        {/* <Login/> */}
        {/* <MaterialBottomTabNavigator/> */}
        {/* <MapGeolocation/> */}
        {/* <CreatePost/> */}
        {/* <ListComment/> */}
        {/* <ClubDetail/> */}
        {/* <Challenge/> */}
        {/* <ListChallenge/> */}
        {/* <ChallengeDetail/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: metrics.DEVICE_WIDTH,
    height: metrics.DEVICE_HEIGHT
  }
})
export default App;
