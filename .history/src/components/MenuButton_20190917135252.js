import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
class MenuButton extends Component{
    render(){
        return(
            <Button icon={{name:'menu', size:15, color: 'black'}} style={{marginLeft: '50', backgroundColor: null}}>            
            </Button>
        )
    }
}
export default MenuButton