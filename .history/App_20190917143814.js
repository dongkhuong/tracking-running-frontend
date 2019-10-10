import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { AuthNavigator } from './src/Router'
import metrics from './src/constants/Metric'
import Login from './src/screens/login/Login';
import Newsfeed_Navigator from './src/screens/main/newsfeed/Newsfeed_Navigator';
import DrawerNavigator from './src/screens/navigation/DrawerNavigator'
import MenuButton from './src/components/MenuButton';
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        {/* <AuthNavigator /> */}
        {/* <Newsfeed_Navigator/> */}
        {/* <DrawerNavigator/> */}
        <MenuButton name="abc" color="red" size={30} backgroundButton="red"/>
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
