import React, { Component } from "react"
import { View, Text, Image, TouchableOpacity, ToastAndroid, Keyboard } from "react-native"
import { Input } from 'react-native-elements'
import metrics from '../../constants/Metric'
import colors from '../../constants/Color'
import styles from './Styles'
import Icon from 'react-native-ionicons'
import axios from 'axios'
import { Constant } from '../../../common'
import AsyncStorage from '@react-native-community/async-storage'
import DeviceInfo from 'react-native-device-info';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            device_token: '',
            name: '',
            os: '',
            brand: '',
            ip: '',
            error: null
        }
    }
    _signInAsync = async () => {
        if(this.state.email!='' && this.state.password!='') {
            try{
                const login = await axios.post(Constant.rootAPI+'/login',{
                    email: this.state.email,
                    password: this.state.password,
                    device_token: this.state.device_token,
                    name: this.state.name,
                    os: this.state.os,
                    brand: this.state.brand,
                    ip: this.state.ip
                })
                const currentUser = login.data.data.user
                await AsyncStorage.setItem('token', login.data.data.token)
                await AsyncStorage.setItem('currentUserId',currentUser.id)
                ToastAndroid.show('Login Successfully!', ToastAndroid.SHORT)
                this.props.navigation.navigate('AuthLoading')
            } catch(err) {
                Keyboard.dismiss()
                ToastAndroid.show('Wrong email or password, try again!', ToastAndroid.SHORT)
                this.setState({error: 'red'})
            }
            // .then((response) => {
            //     AsyncStorage.setItem('token',response.data.data.token)
            //     const currentUser = response.data.data.user
            //     currentUser.then((i) => {
            //         AsyncStorage.setItem('currentUser',i)
            //     })
            //     // AsyncStorage.setItem('currentUser',response.data.data.user)
            //     ToastAndroid.show('Login Successfully!', ToastAndroid.SHORT)
            //     this.props.navigation.navigate('AuthLoading')
            // })
            // .catch(err => {
            //     Keyboard.dismiss()
            //     ToastAndroid.show('Wrong email or password, try again!', ToastAndroid.SHORT)
            //     this.setState({error: 'red'})
            //     throw new Error(err)
            // })
        }
    }
    componentDidMount() {
        this.setState({device_token: DeviceInfo.getUniqueId()})
        DeviceInfo.getDeviceName().then(value => {
            this.setState({name: value})
        })
        this.setState({os: DeviceInfo.getSystemName()})
        this.setState({brand: DeviceInfo.getModel()})
        DeviceInfo.getIpAddress().then(value => {
            this.setState({ip: value})
        })
    }
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
                inputContainerStyle={{borderBottomColor:this.state.error}}
                leftIcon={
                    <Icon name='mail' size={24} color={colors.primaryColor} style={{width: 40}}/>
                }
                autoCompleteType={'off'}
                onChangeText={email => this.setState({email: email})}
                value={this.state.email}
                />
                <Input
                placeholder='Password'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9 }}
                inputContainerStyle={{borderBottomColor:this.state.error}}
                leftIcon={
                    <Icon name='lock' size={24} color={colors.primaryColor} style={{width: 40}}/>
                }
                autoCompleteType={'off'}
                onChangeText={password => this.setState({password: password})}
                value={this.state.password}
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