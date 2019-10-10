import React, { Component } from "react"
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native"
import metrics from '../../../constants/Metric'
import styles from './Styles'
class GetStarted extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('../../../assets/images/getstarted2.jpeg')} style={{width: metrics.DEVICE_WIDTH, height: metrics.DEVICE_HEIGHT}} resizeMode={'stretch'}>
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                        <Text style={styles.titleBig}>HEY, KHƯƠNG!</Text>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'flex-end', flex: 6, marginBottom:50}}>
                        <Text style={styles.titleMedium}>GLAD YOU'RE HERE</Text>
                        <Text style={[{textAlign: 'center', paddingHorizontal:30, lineHeight: 20}, styles.titleSmall]}>Help us get to know you and your goals better. That way we can craft a Premium Training Plan to get you there!</Text>
                    </View>
                    <View style={{alignItems: 'center', flex:3}}>
                        <TouchableOpacity style={{width: metrics.DEVICE_WIDTH*0.8, alignItems: 'center', backgroundColor: 'blue', paddingVertical: 10, borderRadius: metrics.DEVICE_WIDTH*0.5}}>
                            <Text style={styles.getStartedButton}>GET STARTED</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
export default GetStarted;