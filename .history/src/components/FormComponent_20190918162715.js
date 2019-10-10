import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Image, KeyboardAvoidingView } from 'react-native'
import InputComponent from './InputComponent'
import metrics from '../constants/Metric'
import { Button } from 'react-native-elements';
class FormComponent extends Component{
    render(){
        // const { sourceIcon, placeholder, secureTextEntry, autoCorrect, autoCapitalize, placeholderTextColor } = this.props
        return(
          <KeyboardAvoidingView style={styles.container}>
              <InputComponent/>
              <InputComponent/>
              <Button
                title="Login"
              />
          </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
        // alignItems: 'center'
    }
})

export default FormComponent