import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import metrics from '../../../constants/Metric'
import Icon from 'react-native-ionicons'
class ClubDetail extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: '#E7EAED'}}>
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/backgroundImage.jpg')} style={{height: '100%', width: '100%'}}/>
                    </TouchableOpacity>
               </View>
               <View style={{height: metrics.DEVICE_HEIGHT*0.3, alignItems: 'center'}}>
                    <Text style={{marginTop: 10, fontSize: 20}}>SACOMBANK KV.BTB Runners Club</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name={'add'}/><Text>Da Nang</Text>
                    </View>
               </View>
            </ScrollView>
        )
    }
}
export default ClubDetail