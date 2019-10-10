import React, { Component } from "react"
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native"
import { Input } from 'react-native-elements'
import metrics from '../../constants/Metric'
import colors from '../../constants/Color'
import styles from './Styles'
import Icon from 'react-native-ionicons'
class Register extends Component {
    render() {
        // const {  } = this.props
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, alignItems: 'center', paddingTop:50}}>
                    <Text style={{fontSize: 30, color: '#0036BD', fontWeight: 'bold'}}>Register</Text>
                    <Text style={{color: colors.darkGray, marginTop: 10}}>Sign to continue</Text>
                </View>
                <View style={{flex: 4, alignItems: 'center'}}>
                <View style={{flexDirection: 'row' ,width: metrics.DEVICE_WIDTH*0.9}}>
                    <Input
                    placeholder='FirstName'
                    containerStyle={{width: metrics.DEVICE_WIDTH*0.45}}
                    leftIcon={
                        <Icon name='person' size={24} color={colors.primaryColor} style={{width: 30}}/>
                    }
                    />
                    <Input
                    placeholder='LastName'
                    containerStyle={{width: metrics.DEVICE_WIDTH*0.45}}
                    leftIcon={
                        <Icon name='person' size={24} color={colors.primaryColor} style={{width: 30}}/>
                    }
                    />
                </View>
                <Input
                placeholder='Email@address.com'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9}}
                leftIcon={
                    <Icon name='mail' size={24} color={colors.primaryColor} style={{width: 30}}/>
                }
                />
                <Input
                placeholder='Phone'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9}}
                leftIcon={
                    <Icon name='phone-portrait' size={24} color={colors.primaryColor} style={{width: 30}}/>
                }
                />
                <Input
                placeholder='Password'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9}}
                leftIcon={
                    <Icon name='lock' size={24} color={colors.primaryColor} style={{width: 30}}/>
                }
                />
                <Input
                placeholder='Confirm Password'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9}}
                leftIcon={
                    <Icon name='lock' size={24} color={colors.primaryColor} style={{width: 30}}/>
                }
                />
                <View>
                    <TouchableOpacity style={{paddingVertical: 10, backgroundColor: '#0036BD', width: metrics.DEVICE_WIDTH*0.85, alignItems: 'center', borderRadius: 5, marginTop: 30}}>
                        <Text style={{fontWeight: 'bold', color: colors.white}}>SIGN UP</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
                        <Text style={{marginRight: 5}}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{color: '#4843AC'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>
        );
    }
}
export default Register