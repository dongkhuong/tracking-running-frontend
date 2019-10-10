import React, { Component } from "react"
import { View, Text, Image, ImageBackground } from "react-native"
import styles from './Styles'
class Login extends Component {
    render() {
        // const {  } = this.props
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Image source={require('../../assets/images/runer-silhouette-running-fast.png')}/>
                    <Text>Welcome Back</Text>
                    <Text>Sign to continue</Text>
                </View>
                <View style={{flex: 2}}>

                </View>
            </View>
        );
    }
}
export default Login;