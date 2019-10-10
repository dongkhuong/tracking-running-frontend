import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
class MenuButton extends Component{
    render(){
        return(
            <Button icon={{name:'menu', size:15, color: 'transparent'}} style={{marginLeft: '50'}}>            
            </Button>
        )
    }
}
export default MenuButton