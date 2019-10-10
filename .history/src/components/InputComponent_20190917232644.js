import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
class InputComponent extends Component{
    render(){
        const { sourceIcon, placeholder, secureTextEntry, autoCorrect, autoCapitalize, placeholderTextColor } = this.props
        return(
            <View style={styles.inputWrapper}>
            <Image source={sourceIcon} style={styles.inlineImg} />
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              autoCorrect={autoCorrect}
              autoCapitalize={autoCapitalize}
              returnKeyType={this.props.returnKeyType}
              placeholderTextColor={placeholderTextColor}
              underlineColorAndroid="transparent"
            />
          </View>          
        )
    }
}

export default InputComponent