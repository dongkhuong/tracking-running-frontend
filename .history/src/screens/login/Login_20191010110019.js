import React, { Component } from "react"
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native"
import { Input } from 'react-native-elements'
import metrics from '../../constants/Metric'
import colors from '../../constants/Color'
import styles from './Styles'
import Icon from 'react-native-ionicons'
class Login extends Component {
    render() {
        // const {  } = this.props
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, alignItems: 'center', paddingTop:50}}>
                    <Image source={require('../../assets/images/logoBig.png')} style={{width: 100, height:100}}/>
                    <Text style={{fontSize: 30, color: '#0036BD', fontWeight: 'bold'}}>Welcome Back</Text>
                    <Text style={{color: colors.darkGray}}>Sign to continue</Text>
                </View>
                <View style={{flex: 2, alignItems: 'center'}}>
                <Input
                placeholder='email@address.com'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9}}
                leftIcon={
                    <Icon name='mail' size={24} color={colors.primaryColor} style={{width: 40}}/>
                }
                />
                <Input
                placeholder='password'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9}}
                leftIcon={
                    <Icon name='lock' size={24} color={colors.primaryColor} style={{width: 40}}/>
                }
                />
                <View style={{width: metrics.DEVICE_WIDTH*0.9, alignItems: 'flex-end', marginTop: 20, marginRight: 20}}>
                    <TouchableOpacity>
                        <Text style={{color: '#4843AC'}}>Forgot Password?</Text>
                    </TouchableOpacity> 
                </View>
                <View>
                    <TouchableOpacity style={{paddingVertical: 10, backgroundColor: '#0036BD', width: metrics.DEVICE_WIDTH*0.85, alignItems: 'center', borderRadius: 5, marginTop: 30}}>
                        <Text style={{fontWeight: 'bold', color: colors.white}}>LOGIN</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
                        <Text style={{marginRight: 5}}>Don't have an account?</Text>
                        <TouchableOpacity>
                            <Text style={{color: '#4843AC'}}>create a new account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>
        );
    }
}
export default Login;