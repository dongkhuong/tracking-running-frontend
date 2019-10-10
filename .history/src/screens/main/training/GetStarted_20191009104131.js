import React, { Component } from "react"
import { View, Text, Image, ImageBackground } from "react-native"
import metrics from '../../../constants/Metric'
import styles from './Styles'
class GetStarted extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('../../../assets/images/getstarted2.jpeg')} style={{width: metrics.DEVICE_WIDTH, height: metrics.DEVICE_HEIGHT}} resizeMode={'stretch'}>
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 2}}>
                        <Text style={styles.titleBig}>HEY, KHƯƠNG!</Text>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 5}}>
                        <Text>GLAD YOU'RE HERE</Text>
                        <Text>Help us get to know you and your goals better. That way we can craft a Premium Training Plan to get you there!</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
export default GetStarted;