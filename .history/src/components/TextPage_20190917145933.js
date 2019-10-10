import React, { Component } from 'react'
import { Text } from 'react-native-elements'
class MenuButton extends Component{
    render(){
        const { name, color, size, backgroundButton, navigation } = this.props
        return(
            <Text 
                icon={{ name:name, color:color, size:size }} 
                buttonStyle={{ backgroundColor: backgroundButton}} 
                onPress={() => navigation.toggleDrawer()}/>           
        )
    }
}
export default MenuButton