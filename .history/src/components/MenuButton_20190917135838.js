import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
class MenuButton extends Component{
    render(){
        return(
            <View style={{ flex:1, paddingLeft:50, paddingRight: 50 }}>
            <Button icon={{name:'menu', size:20, color: 'black'}} style={{marginLeft: '50', backgroundColor: 'red'}}>            
            </Button>
            </View>
        )
    }
}
export default MenuButton