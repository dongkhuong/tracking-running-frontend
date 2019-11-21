import React, { Component } from "react"
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native"
import { Left, Right } from 'native-base'
import { Input } from 'react-native-elements'
import metrics from '../../constants/Metric'
import colors from '../../constants/Color'
import styles from './Styles'
import Icon from 'react-native-ionicons'
import { CheckBox } from 'react-native-elements'
import DateTimePicker from "react-native-modal-datetime-picker"
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import { Constant } from '../../../common'
class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: null,
            weight: null,
            genderData: ['FEMALE', 'MALE'],
            genderChecked: 1,
            isDateTimePickerVisible: false,
            datetimepicker: null,
            birthday: null
        }
    }
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true })
    }

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false })
    }
    reverseString = (str) => {
        return str.split("-").reverse().join("-")
    }
    handleDatePicked = date => {
        this.hideDateTimePicker()
        let data = JSON.stringify(date)
        let dataConvert = data.substring(1,11)
        this.setState({datetimepicker: dataConvert})
        if(this.state.datetimepicker!=null) {
           this.setState({birthday: this.reverseString(this.state.datetimepicker)})
        }
        console.log(this.state.birthday)
    }

    updateInfo = async () => {
        const asyncStorage = await AsyncStorage.getItem("token")
        if(asyncStorage) {
            await axios.patch(Constant.rootAPI+'/users/update',
            {
                height: 1,
                weight: 2,
                // birthday: this.state.birthday,
                // gender: this.state.genderChecked
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            .then(({data}) => {
                ToastAndroid.show("Update Successfully!",ToastAndroid.SHORT)
                this.props.navigation.navigate("MaterialBottomTabNavigator")
            })
            .catch(err => console.log(err))
        }
        // console.log(asyncStorage)
    }

    componentDidMount() {

    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, alignItems: 'center', paddingTop:50}}>
                    <Text style={styles.bigTitle}>Update Info</Text>
                </View>
                <View style={{flex: 4, alignItems: 'center'}}>
                <Input
                keyboardType={'numeric'}
                placeholderTextColor={colors.darkGray}
                placeholder='Your height'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9, marginBottom: 10}}
                leftIcon={
                    <Icon name='mail' size={24} color={colors.primaryColor} style={{width: 30}}/>
                }
                autoCompleteType={'off'}
                onChangeText={height => this.setState({height: height})}
                value={this.state.height}
                />
                <Input
                keyboardType={'numeric'}
                placeholderTextColor={colors.darkGray}
                placeholder='Your weight'
                containerStyle={{width: metrics.DEVICE_WIDTH*0.9, marginBottom: 10}}
                leftIcon={
                    <Icon name='phone-portrait' size={24} color={colors.primaryColor} style={{width: 30}}/>
                }
                autoCompleteType={'off'}
                onChangeText={weight => this.setState({weight: weight})}
                value={this.state.weight}
                />
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10}}>
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
                <TouchableOpacity onPress={() => this.showDateTimePicker()} style={{marginBottom: 20}}>
                    <View style={{width: metrics.DEVICE_WIDTH*0.85, paddingVertical: 5, paddingHorizontal: 20, borderBottomWidth: 2, borderBottomColor: colors.darkGray}}>
                        <Text style={{fontWeight: 'bold', color: colors.darkGray}}>BIRTHDAY</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom: 20}}>
                    <View style={{width: metrics.DEVICE_WIDTH*0.85, paddingVertical: 5, paddingHorizontal: 20, borderBottomWidth: 2, borderBottomColor: colors.darkGray}}>
                        <Text style={{fontWeight: 'bold', color: colors.darkGray}}>UPLOAD AVATAR</Text>
                    </View>
                </TouchableOpacity>
                <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
                datePickerModeAndroid={'calendar'}
                mode={'date'}
                />
                <View>
                    <TouchableOpacity onPress={this.updateInfo} style={styles.submitButton} >
                        <Text style={{fontWeight: 'bold', color: colors.white}}>Update</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        );
    }
}
export default UserInfo