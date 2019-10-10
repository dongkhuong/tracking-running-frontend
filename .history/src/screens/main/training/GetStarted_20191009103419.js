import React, { Component } from "react"
import { View, Text, Image, ImageBackground } from "react-native"
import metrics from '../../../constants/Metric'
class GetStarted extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('../../../assets/images/getstarted.jpeg')} style={{width: metrics.DEVICE_WIDTH, height: metrics.DEVICE_HEIGHT}}/>
            </View>
        );
    }
}
export default GetStarted;