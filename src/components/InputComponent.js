import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements'
import metrics from '../constants/Metric'
import colors from '../constants/Color'
class InputComponent extends Component{
    render(){
        const { nameIcon } = this.props
        return(
          <View style={styles.inputWrapper}>
            <Input
            placeholder='INPUT WITH CUSTOM ICON'
            
            leftIcon={
                <Icon
                name={nameIcon}
                size={24}
                color={colors.white}
                />
            }
            containerStyle={styles.input}
            />
          </View>          
        )
    }
}
const styles = StyleSheet.create({
    inputWrapper: {
        marginHorizontal: metrics.DEVICE_WIDTH*0.05,
        marginBottom: 10,
    },
    input: {
        borderRadius: metrics.borderSizeInput,
        backgroundColor: colors.backgroundInput,
        borderBottomWidth: 0,
        paddingVertical: 0
    },
})

export default InputComponent