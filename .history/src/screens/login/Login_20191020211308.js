import React, { Component } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Input } from 'react-native-elements'
import metrics from '../../constants/Metric'
import colors from '../../constants/Color'
import styles from './Styles'
import Icon from 'react-native-ionicons'
import axios from 'axios'
import { rootAPI } from '../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    _signInAsync = async () => {
        if(this.state.email!='' && this.state.password!='') {
            await axios.post('http://10.0.3.2:8000/api/login',{
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                AsyncStorage.setItem('token',response.data.data.token)
                AsyncStorage.setItem('currentUser',response.data.data.user)
                console.log(AsyncStorage.getItem('token'))
            })
            .catch(err => console.log(err))
        }
    }
    // componentDidMount() {
    //     axios.get('http://10.0.3.2:8000/api/displayAllUsers').then(res => console.log(res))
    // }
    render() {
        // const {  } = this.props
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, alignItems: 'center', paddingTop:50}}>
                    <Image source={require('../../assets/images/logoBig.png')} style={{width: 100, height:100, marginBottom: 10}}/>
                    <Text style={styles.bigTitle}>Login</Text>
                    {/* <Text style={{color: colors.darkGray, marginTop: 5}}>Sign to continue</Text> */}
                </View>
                <View style={{flex: 2, alignItems: 'center'}}>
                <Input
                placeholder='Email@address.com'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9}}
                leftIcon={
                    <Icon name='mail' size={24} color={colors.primaryColor} style={{width: 40}}/>
                }
                autoCompleteType={'off'}
                onChangeText={email => this.setState({email: email})}
                />
                <Input
                placeholder='Password'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9}}
                leftIcon={
                    <Icon name='lock' size={24} color={colors.primaryColor} style={{width: 40}}/>
                }
                autoCompleteType={'off'}
                onChangeText={password => this.setState({password: password})}
                />
                <View style={styles.forgotPasswordArea}>
                    <TouchableOpacity>
                        <Text style={{color: '#4843AC'}}>Forgot Password?</Text>
                    </TouchableOpacity> 
                </View>
                <View>
                    <TouchableOpacity onPress={this._signInAsync} style={styles.submitButton}>
                        <Text style={{fontWeight: 'bold', color: colors.white}}>LOGIN</Text>
                    </TouchableOpacity>
                    <View style={styles.accountArea}>
                        <Text style={{marginRight: 5}}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={{color: '#4843AC'}}>create a new account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>
        );
    }
}
export default Login