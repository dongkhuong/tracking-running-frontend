import React, { Component } from "react"
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native"
import metrics from '../../../constants/Metric'
import { Card, CardItem, Container, Content } from 'native-base'
import styles from './Styles'
class Clubs extends Component {
   
    render() {
        return (
           <ScrollView>
               <View style={{height: metrics.DEVICE_HEIGHT*0.3}}>
                    <TouchableOpacity>
                        {/* <Image source={{uri: 'https://media.mnn.com/assets/images/2017/09/man-running.jpg.653x0_q80_crop-smart.jpg'}}/> */}
                        <Text>Hello</Text>
                    </TouchableOpacity>
               </View>
               <View style={{height: metrics.DEVICE_HEIGHT*0.25}}>
                    <Text>YOUR CLUBS</Text>
                    <ScrollView horizontal={true}>
                        <View style={{height: metrics.DEVICE_HEIGHT*0.2, width: metrics.DEVICE_HEIGHT*0.2, alignItems: 'center', justifyContent: 'center'}}>
                            <Text>Run for healthy</Text>
                        </View>
                        <View style={{height: metrics.DEVICE_HEIGHT*0.2, width: metrics.DEVICE_HEIGHT*0.2, alignItems: 'center', justifyContent: 'center'}}>
                            <Text>Run for healthy</Text>
                        </View>
                        <View style={{height: metrics.DEVICE_HEIGHT*0.2, width: metrics.DEVICE_HEIGHT*0.2, alignItems: 'center', justifyContent: 'center'}}>
                            <Text>Run for healthy</Text>
                        </View>
                        <View style={{height: metrics.DEVICE_HEIGHT*0.2, width: metrics.DEVICE_HEIGHT*0.2, alignItems: 'center', justifyContent: 'center'}}>
                            <Text>Run for healthy</Text>
                        </View>
                        <View style={{height: metrics.DEVICE_HEIGHT*0.2, width: metrics.DEVICE_HEIGHT*0.2, alignItems: 'center', justifyContent: 'center'}}>
                            <Text>Run for healthy</Text>
                        </View>
                    </ScrollView>
               </View>
           </ScrollView>
        )
    }
}
export default Clubs