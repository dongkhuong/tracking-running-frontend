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
                    <Text style={{marginHorizontal: 10, marginVertical: 5,fontWeight: 'bold', color: colors.darkGray}}>YOUR CLUBS</Text>
                    <ScrollView horizontal={true}>
                        {/* <View style={{justifyContent: 'center', backgroundColor: colors.white}}> */}
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.14, width: metrics.DEVICE_HEIGHT*0.14, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                    <Text>Run for</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.14, width: metrics.DEVICE_HEIGHT*0.14, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                    <Text>Run for </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.14, width: metrics.DEVICE_HEIGHT*0.14, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                    <Text>Run for </Text>
                                </View>
                            </TouchableOpacity>
                        {/* </View> */}
                    </ScrollView>
               </View>
               <View>
                    <Text style={{marginHorizontal: 10, marginVertical: 5, fontWeight: 'bold', color: colors.darkGray}}>POPULAR NEAR YOU</Text>
                    <ScrollView horizontal={true}>
                        <View style={{backgroundColor: colors.white, height: metrics.DEVICE_HEIGHT*0.35, justifyContent: 'center'}}>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                    <Text>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                    <Text>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                        <View style={{backgroundColor: colors.white, height: metrics.DEVICE_HEIGHT*0.35, justifyContent: 'center'}}>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                    <Text>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                    <Text>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                        <View style={{backgroundColor: colors.white, height: metrics.DEVICE_HEIGHT*0.35, justifyContent: 'center'}}>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                    <Text>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                    <Text>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                        <View style={{backgroundColor: colors.white, height: metrics.DEVICE_HEIGHT*0.35, justifyContent: 'center'}}>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                    <Text>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                    <Text>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                        <View style={{backgroundColor: colors.white, height: metrics.DEVICE_HEIGHT*0.35, justifyContent: 'center'}}>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                    <Text>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 5, marginVertical: 5}}>
                                    <Text>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                      
                    </ScrollView>
               </View>
           </ScrollView>
        )
    }
}
export default Clubs