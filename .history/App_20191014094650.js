import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { AuthNavigator } from './src/Router'
import metrics from './src/constants/Metric'
import Login from './src/screens/login/Login'
import DrawerNavigator from './src/screens/navigation/DrawerNavigator'
import MenuButton from './src/components/MenuButton'
import TextPage from './src/components/TextPage'
import {Header} from 'react-native-elements'
import { AppNavigator } from './src/Router'
import CardShowcaseExample from './src/screens/demopage/CardShowcaseExample'
import { YellowBox } from 'react-native'
import MaterialBottomTabNavigator from './src/screens/navigation/MaterialBottomTabNavigator';
import MapGeolocation from './src/screens/demopage/MapGeolocation';
class App extends Component{
  render(){
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ])
    return(
      <View style={styles.container}>
        {/* <AuthNavigator /> */}
        {/* <DrawerNavigator/> */}
        {/* <MenuButton name="menu" color="blue" size={30} backgroundButton="red"/> */}
        {/* <TextPage></TextPage> */}
        {/* <AppNavigator /> */}
        {/* <Login/> */}
        {/* <MaterialBottomTabNavigator/> */}
        <MapGeolocation/>
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
