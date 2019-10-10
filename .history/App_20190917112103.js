import React, { Component } from 'react';
import { View } from 'react-native'
import { Router } from './src/Router'
import Login from './src/screens/login/Login';
class App extends Component{
  render(){
    return(
      <View>
        <Router/>
      </View>
    )
  }
}


export default App;
