import React, { Component } from "react"
import { View, Text, Image } from "react-native"
class Activity extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <View>
                <Image source={require('../../../assets/images/mapdemo.jpg')}/>
            </View>
        );
    }
}
export default Activity;