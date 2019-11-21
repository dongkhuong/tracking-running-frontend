import React, { Component } from "react"
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native"
import { Input } from 'react-native-elements'
import metrics from '../../constants/Metric'
import colors from '../../constants/Color'
import styles from './Styles'
import Icon from 'react-native-ionicons'
import { CheckBox } from 'react-native-elements'
import axios from 'axios'
import { Constant } from '../../../common'
class InfoUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            weight: 0,
            genderData: ['FEMALE', 'MALE'],
            genderChecked: 1,
            birthday: null
        }
    }
    // _signUpAsync = async () => {
    //     if(this.state.email!=='' && this.state.password!=='' & this.state.firstname!==''&& this.state.lastname!=='' && this.state.phone!=='' && this.state.confirmPassword!='') {
    //         if(this.state.confirmPassword !== this.state.password) {
    //             ToastAndroid.show('Password Not matching', ToastAndroid.SHORT)
    //         } else {
    //             await axios.post(Constant.rootAPI+'/register',{
    //             email: this.state.email,
    //             password: this.state.password,
    //             firstname: this.state.firstname,
    //             lastname: this.state.lastname,
    //             phone: this.state.phone
    //             })
    //             .then((response) => {
    //                 ToastAndroid.show('Sign up successfully, please login to continue!', ToastAndroid.SHORT)
    //                 this.props.navigation.navigate('AuthLoading')
    //             })
    //             .catch(err => {
    //                 Keyboard.dismiss()
    //                 ToastAndroid.show('Register failed!', ToastAndroid.SHORT)
    //             })
    //         }
            
    //     }else {
    //         ToastAndroid.show("The input field is required", ToastAndroid.SHORT)
    //     }
    // }
    render() {
        // const {  } = this.props
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, alignItems: 'center', paddingTop:50}}>
                    <Text style={styles.bigTitle}>Update Info</Text>
                </View>
                <View style={{flex: 4, alignItems: 'center'}}>
                <Input
                keyboardType={'numeric'}
                placeholder='Your height'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9}}
                leftIcon={
                    <Icon name='mail' size={24} color={colors.primaryColor} style={{width: 30}}/>
                }
                autoCompleteType={'off'}
                onChangeText={height => this.setState({height: height})}
                value={this.state.height}
                />
                <Input
                keyboardType={'numeric'}
                placeholder='Your weight'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9}}
                leftIcon={
                    <Icon name='phone-portrait' size={24} color={colors.primaryColor} style={{width: 30}}/>
                }
                autoCompleteType={'off'}
                onChangeText={weight => this.setState({weight: weight})}
                value={this.state.weight}
                />
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    {this.state.genderData.map((genderData, key) => {
                        return(
                            <View style={{flex: 1}} key={key}>
                                {this.state.genderChecked == key ?
                                <CheckBox
                                    center
                                    title={genderData}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checked={true}
                                    containerStyle={{backgroundColor: null, borderWidth: 0}}
                                    textStyle={{color: colors.darkGray}}
                                />
                                :
                                <CheckBox
                                    center
                                    title={genderData}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checked={false}
                                    containerStyle={{backgroundColor: null, borderWidth: 0}}
                                    textStyle={{color: colors.darkGray}}
                                    onPress={() => this.setState({genderChecked: key})}
                                />
                                }
                            </View>
                        )
                    })}
                </View>
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
export default InfoUser