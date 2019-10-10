import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
class MenuButton extends Component{
    render(){
        const { name, color, size } = this.props
        return(
            <View style={{ flex:1 }}>
            <Button  containerStyle={{backgroundColor: 'yellow'}}>            
            </Button>
            </View>
        )
    }
}
export default MenuButton