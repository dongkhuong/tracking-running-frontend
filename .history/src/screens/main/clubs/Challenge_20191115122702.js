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
import { ListItem } from 'react-native-elements'
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
               <View style={{paddingBottom: 10, alignItems: 'center', backgroundColor: colors.white}}>
                    <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}> November Run Climbing Challenge</Text>
                    <View style={{width: metrics.DEVICE_WIDTH*0.8}}>
                        <Text style={{textAlign: 'center', color: colors.darkGray, fontSize: 12}}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        </Text>
                    </View>
               </View> 
               <View>
                    <ListItem
                            leftIcon={<Icon name="calendar"/>}
                            titleStyle={{fontSize: 13}}
                            title={"November 1, 2019 to November 30, 2019 - Nov 1, 2019 to Nov 30, 2019"}
                            bottomDivider
                    />
               </View>
            </ScrollView>
        )
    }
}
export default Challenge