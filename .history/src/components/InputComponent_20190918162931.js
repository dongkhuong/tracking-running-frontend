import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements'
import metrics from '../constants/Metric'
class InputComponent extends Component{
    render(){
        // const { sourceIcon, placeholder, secureTextEntry, autoCorrect, autoCapitalize, placeholderTextColor } = this.props
        return(
          <View style={styles.inputWrapper}>
            <Input
            placeholder='INPUT WITH CUSTOM ICON'
            leftIcon={
                <Icon
                name='user'
                size={24}
                color='black'
                />
            }
            />
          </View>          
        )
    }
}
const styles = StyleSheet.create({
    inputWrapper: {
        flex: 1,
        marginRight: metrics.DEVICE_WIDTH*0.05,
        marginLeft: metrics.DEVICE_WIDTH*0.05,
        borderRadius: 1
    }
})

export default InputComponent