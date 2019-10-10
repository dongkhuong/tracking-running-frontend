import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements' 
class TextPage extends Component{
    render(){
        const { children, color, fontSize, ...otherprops } = this.props
        return(
            <Text style={[{color:color, fontSize: fontSize}, {...otherprops}]}>
                { children }
            </Text>           
        )
    }
}

export default TextPage