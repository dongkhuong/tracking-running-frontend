import React, { Component } from "react"
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native"
import { Input } from 'react-native-elements'
import metrics from '../../constants/Metric'
import colors from '../../constants/Color'
import styles from './Styles'
import Icon from 'react-native-ionicons'
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password:"",
            firstname: "",
            lastname: "",
            phone: "",
            confirmPassword: ""
        }
    }
    _signUpAsync = async () => {
        if(this.state.confirmPassword !== this.state.password) {
           ToastAndroid.show('Password Not matching', ToastAndroid.SHORT)
    }
    }
    render() {
        // const {  } = this.props
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, alignItems: 'center', paddingTop:50}}>
                    <Text style={styles.bigTitle}>Register</Text>
                    {/* <Text style={{color: colors.darkGray, marginTop: 5}}>Sign to continue</Text> */}
                </View>
                <View style={{flex: 4, alignItems: 'center'}}>
                <View style={{flexDirection: 'row' ,width: metrics.DEVICE_WIDTH*0.9}}>
                    <Input
                    placeholder='FirstName'
                    containerStyle={{width: metrics.DEVICE_WIDTH*0.45}}
                    leftIcon={
                        <Icon name='person' size={24} color={colors.primaryColor} style={{width: 30}}/>
                    }
                    autoCompleteType={'off'}
                    onChangeText={firstname => this.setState({firstname: firstname})}
                    value={this.state.firstname}
                    />
                    <Input
                    placeholder='LastName'
                    containerStyle={{width: metrics.DEVICE_WIDTH*0.45}}
                    leftIcon={
                        <Icon name='person' size={24} color={colors.primaryColor} style={{width: 30}}/>
                    }
                    autoCompleteType={'off'}
                    onChangeText={lastname => this.setState({lastname: lastname})}
                    value={this.state.lastname}
                    />
                </View>
                <Input
                placeholder='Email@address.com'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9}}
                leftIcon={
                    <Icon name='mail' size={24} color={colors.primaryColor} style={{width: 30}}/>
                }
                autoCompleteType={'off'}
                onChangeText={email => this.setState({email: email})}
                value={this.state.email}
                />
                <Input
                placeholder='Phone'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9}}
                leftIcon={
                    <Icon name='phone-portrait' size={24} color={colors.primaryColor} style={{width: 30}}/>
                }
                autoCompleteType={'off'}
                onChangeText={phone => this.setState({phone: phone})}
                value={this.state.phone}
                />
                <Input
                placeholder='Password'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9}}
                leftIcon={
                    <Icon name='lock' size={24} color={colors.primaryColor} style={{width: 30}}/>
                }
                autoCompleteType={'off'}
                onChangeText={password => this.setStat_signUpAsync({password: password})}
                value={this.state.password}
                />
                <Input
                placeholder='Confirm Password'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9}}
                leftIcon={
                    <Icon name='lock' size={24} color={colors.primaryColor} style={{width: 30}}/>
                }
                autoCompleteType={'off'}
                onChangeText={confirmPassword => this.setState({confirmPassword: confirmPassword})}
                value={this.state.confirmPassword}
                />
                <View>
                    <TouchableOpacity style={styles.submitButton} onPress={this._signUpAsync}>
                        <Text style={{fontWeight: 'bold', color: colors.white}}>SIGN UP</Text>
                    </TouchableOpacity>
                    <View style={styles.accountArea}>
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