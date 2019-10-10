import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
class MenuButton extends Component{
    render(){
        const { name, color, size, backgroundButton } = this.props
        return(
                <Button icon={{ name:name, color:color, size:size }} buttonStyle={{ backgroundColor: backgroundButton, alignItems:'flex-start'}} containerStyle={{ alignItems: 'center' }}/>           
        )
    }
}
export default MenuButton