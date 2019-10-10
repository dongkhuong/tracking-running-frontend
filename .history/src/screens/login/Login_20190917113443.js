import React, { Component } from "react"
import { View, Text } from "react-native"
import { Button, Header } from 'react-native-elements';
class Login extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View>
               <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
            </View>
        );
    }
}
export default Login;