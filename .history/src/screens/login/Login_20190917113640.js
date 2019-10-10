import React, { Component } from "react"
import { View, Text } from "react-native"
import { Button, Header } from 'react-native-elements';
import { Icon } from 'react-native-elements'
class Login extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Icon
  name='rowing' />
            </View>
        );
    }
}
export default Login;