import React, { Component } from "react"
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native"
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
import { Card, CardItem, Container, Content } from 'native-base'
import styles from './Styles'
import Icon from "react-native-ionicons";
class Clubs extends Component {
   
    render() {
        return (
           <ScrollView style={{backgroundColor: '#E7EAED'}}>
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <TouchableOpacity>
                        <Text>Hello</Text>
                    </TouchableOpacity>
               </View>
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <Text style={{marginHorizontal: 10, marginVertical: 5,fontWeight: 'bold', color: colors.darkGray}}>YOUR CLUBS</Text>
                    <ScrollView horizontal={true} style={{backgroundColor: colors.white}} contentContainerStyle={{alignItems: 'center'}}>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.14, width: metrics.DEVICE_HEIGHT*0.14, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 11, textAlign: 'center'}}>The Tracking Running Club</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.14, width: metrics.DEVICE_HEIGHT*0.14, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 11, textAlign: 'center'}}>The Tracking Running Club</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.14, width: metrics.DEVICE_HEIGHT*0.14, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 11, textAlign: 'center'}}>The Tracking Running Club</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.14, width: metrics.DEVICE_HEIGHT*0.14, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 11, textAlign: 'center'}}>The Tracking Running Club</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.14, width: metrics.DEVICE_HEIGHT*0.14, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 11, textAlign: 'center'}}>The Tracking Running Club</Text>
                                </View>
                            </TouchableOpacity>
                        
                    </ScrollView>
               </View>
               <View>
                    <Text style={{marginHorizontal: 10, marginVertical: 5, fontWeight: 'bold', color: colors.darkGray}}>POPULAR NEAR YOU</Text>
                    <ScrollView horizontal={true}>
                        <View style={{backgroundColor: colors.white, height: metrics.DEVICE_HEIGHT*0.35, justifyContent: 'center'}}>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 13, textAlign: 'center'}}>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray,  marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 13, textAlign: 'center'}}>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                        <View style={{backgroundColor: colors.white, height: metrics.DEVICE_HEIGHT*0.35, justifyContent: 'center'}}>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 13, textAlign: 'center'}}>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray,  marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 13, textAlign: 'center'}}>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                        <View style={{backgroundColor: colors.white, height: metrics.DEVICE_HEIGHT*0.35, justifyContent: 'center'}}>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 13, textAlign: 'center'}}>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray,  marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 13, textAlign: 'center'}}>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                        <View style={{backgroundColor: colors.white, height: metrics.DEVICE_HEIGHT*0.35, justifyContent: 'center'}}>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 13, textAlign: 'center'}}>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray,  marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 13, textAlign: 'center'}}>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                        <View style={{backgroundColor: colors.white, height: metrics.DEVICE_HEIGHT*0.35, justifyContent: 'center'}}>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 13, textAlign: 'center'}}>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.16, width: metrics.DEVICE_HEIGHT*0.16, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray,  marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 13, textAlign: 'center'}}>Run for healthy</Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                    </ScrollView>
               </View>
               <View style={{marginVertical: 10}}>
                    <TouchableOpacity style={{borderColor: colors.darkGray, backgroundColor: colors.white, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 5, borderBottomWidth: 0.5, borderTopWidth: 0.5}}>
                        <Text>View All Clubs</Text>
                        <Icon name="arrow-forward" color={colors.darkGray}/>
                    </TouchableOpacity>
               </View>
           </ScrollView>
        )
    }
}
export default Clubs