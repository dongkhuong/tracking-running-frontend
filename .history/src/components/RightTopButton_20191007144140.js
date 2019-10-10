import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
class RightTopButton extends Component{
    render(){
        const { name, color, navigation, nameRedirect } = this.props
        return(
            <Button 
                icon={{ name:name, color:color}} 
                onPress={() => navigation.navigate(nameRedirect)}/>           
        )
    }
}
export default RightTopButton