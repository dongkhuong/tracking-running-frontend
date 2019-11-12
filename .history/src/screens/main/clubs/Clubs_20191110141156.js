import React, { Component } from "react"
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native"
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
import { Card, CardItem, Container, Content } from 'native-base'
import styles from './Styles'
class Clubs extends Component {
   
    render() {
        return (
           <ScrollView style={{backgroundColor: '#E7EAED'}}>
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <TouchableOpacity>
                        {/* <Image source={{uri: 'https://media.mnn.com/assets/images/2017/09/man-running.jpg.653x0_q80_crop-smart.jpg'}}/> */}
                        <Text>Hello</Text>
                    </TouchableOpacity>
               </View>
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <Text>YOUR CLUBS</Text>
                    <ScrollView horizontal={true} style={{marginTop: 5, backgroundColor: colors.white}}>
                        <View style={{height: metrics.DEVICE_HEIGHT*0.15, width: metrics.DEVICE_HEIGHT*0.15, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                            <Text>Run for healthy</Text>
                        </View>
                        <View style={{height: metrics.DEVICE_HEIGHT*0.15, width: metrics.DEVICE_HEIGHT*0.15, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                            <Text>Run for healthy</Text>
                        </View>
                        <View style={{height: metrics.DEVICE_HEIGHT*0.15, width: metrics.DEVICE_HEIGHT*0.15, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                            <Text>Run for healthy</Text>
                        </View>
                        <View style={{height: metrics.DEVICE_HEIGHT*0.15, width: metrics.DEVICE_HEIGHT*0.15, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                            <Text>Run for healthy</Text>
                        </View>
                        <View style={{height: metrics.DEVICE_HEIGHT*0.15, width: metrics.DEVICE_HEIGHT*0.15, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                            <Text>Run for healthy</Text>
                        </View>

                    </ScrollView>
               </View>
               <View style={{height: metrics.DEVICE_HEIGHT*0.6}}>
                    <Text>POPULAR NEAR YOU</Text>
                    <ScrollView horizontal={true} style={{marginTop: 5, backgroundColor: colors.white}}>
                        <View style={{height: metrics.DEVICE_HEIGHT*0.5}}>
                            <View style={{height: metrics.DEVICE_HEIGHT*0.18, width: metrics.DEVICE_HEIGHT*0.18, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                <Text>Run for healthy</Text>
                            </View>
                            <View style={{height: metrics.DEVICE_HEIGHT*0.18, width: metrics.DEVICE_HEIGHT*0.18, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                <Text>Run for healthy</Text>
                            </View>
                        </View>                        
                    </ScrollView>
               </View>
           </ScrollView>
        )
    }
}
export default Clubs