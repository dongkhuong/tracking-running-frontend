import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Image, KeyboardAvoidingView } from 'react-native'
import InputComponent from './InputComponent'
import metrics from '../constants/Metric'
import colors from '../constants/Color'
import { Button } from 'react-native-elements'
class FormComponent extends Component{
    render(){
        // const { sourceIcon, placeholder, secureTextEntry, autoCorrect, autoCapitalize, placeholderTextColor } = this.props
        return(
            <KeyboardAvoidingView style={styles.container}>
                <InputComponent/>
                <InputComponent/>
                <Button
                title="Login"
                containerStyle={styles.containerButton}
                buttonStyle={styles.buttonStyle}
                />
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 4
    },
    containerButton: {
        marginLeft: metrics.DEVICE_WIDTH*0.05,
        marginRight: metrics.DEVICE_WIDTH*0.05,
    },
    buttonStyle: {
        borderRadius: metrics.borderSizeInput,
        backgroundColor: colors.blue,
        paddingVertical:10
    }
})

export default FormComponent