import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
class RightTopButton extends Component{
    render(){
        const { name, color, backgroundButton, navigation, nameRedirect } = this.props
        return(
            <Button 
                containerStyle={{fontFamily: 'Montserrat-Regular'}}
                icon={{ name:name, color:color}} 
                buttonStyle={{ backgroundColor: backgroundButton,}} 
                onPress={() => navigation.navigate(nameRedirect)}/>           
        )
    }
}
export default RightTopButton