import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, Image, ToastAndroid, RefreshControl, Alert } from 'react-native'
import { Thumbnail } from 'native-base'
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
import Icon from 'react-native-ionicons'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './Styles'
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper'
class Challenge extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#E7EAED'}}> 
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/backgroundImage.jpg')} style={{height: '100%', width: '100%'}}/>
                    </TouchableOpacity>
               </View>
               <View style={{height: metrics.DEVICE_HEIGHT*0.4, alignItems: 'center', backgroundColor: colors.white}}>
                    <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>November Run Climbing Challenge</Text>
                    <View style={{width: metrics.DEVICE_WIDTH*0.8}}>
                        <Text style={{textAlign: 'center', color: colors.darkGray}}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1, borderBottomWidth: 1, borderColor: colors.darkGray, justifyContent: 'flex-end', alignItems:'flex-end', paddingBottom: 10}}>
                        <TouchableOpacity style={{flex: 1, alignItems: 'center', borderRightWidth: 1, borderRightColor: colors.darkGray}}>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>111</Text>
                                    <Text style={{textAlign: 'center', fontSize: 12, color: colors.darkGray}}> RUNNERS</Text>
                                </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1}}>
                                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>2</Text>
                                    <Text style={{textAlign: 'center', fontSize: 12, color: colors.darkGray}}>POSTS</Text>
                                </View>
                        </TouchableOpacity>
                    </View>
               </View>
                <View style={{alignItems: 'center', paddingVertical: 10, backgroundColor: colors.white}}>
                    <TouchableOpacity style={{borderRadius:2, paddingVertical: 8, alignItems: 'center', backgroundColor: colors.primaryColor, width: metrics.DEVICE_WIDTH*0.9}}>
                        <Text style={{color: colors.white, fontWeight: 'bold'}}>Join</Text>
                    </TouchableOpacity>
                </View>
               <Text style={{paddingVertical: 5, paddingLeft: 10, fontWeight: 'bold'}}>POSTS</Text>      
            </ScrollView>
        )
    }
}
export default Challenge