import React, { Component } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
class Activity extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image source={require('../../../assets/images/icons/01d.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Activity;