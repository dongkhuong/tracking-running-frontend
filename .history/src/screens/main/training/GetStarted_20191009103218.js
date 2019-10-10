import React, { Component } from "react"
import { View, Text, Image, ImageBackground } from "react-native"
class GetStarted extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('../../../assets/images/getstarted.jpeg')}/>
            </View>
        );
    }
}
export default GetStarted;