import React, { Component } from "react"
import { View, Text, Image, ImageBackground, TextInput } from "react-native"
// import { Input } from 'react-native-elements'
import metrics from '../../constants/Metric'
import colors from '../../constants/Color'
import styles from './Styles'
import Icon from 'react-native-ionicons'
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
                <View style={{flex: 2, alignItems: 'center'}}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, width: metrics.DEVICE_WIDTH*0.8}}
                    placeholder={'s'}/>
                </View>
            </View>
        );
    }
}
export default Login;