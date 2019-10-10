import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements' 
class TextPage extends Component{
    render(){
        const { children, color, fontSize, ...otherProps} = this.props
        return(
            <Text style={{ color:color, fontSize: fontSize }} {...otherProps}>
                { children }
            </Text>           
        )
    }
}

export default TextPage