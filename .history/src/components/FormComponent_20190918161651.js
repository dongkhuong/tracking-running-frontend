import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Image, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements'
import metrics from '../constants/Metric'
class FormComponent extends Component{
    render(){
        // const { sourceIcon, placeholder, secureTextEntry, autoCorrect, autoCapitalize, placeholderTextColor } = this.props
        return(
          <KeyboardAvoidingView behavior="padding">

          </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    inputWrapper: {
        flex: 1,
        marginRight: metrics.DEVICE_WIDTH*0.05,
        marginLeft: metrics.DEVICE_WIDTH*0.05
    }
})

export default FormComponent