import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
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
               <View style={{height: metrics.DEVICE_HEIGHT*0.5, alignItems: 'center'}}>
                    <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>SACOMBANK KV.BTB Runners Club</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                        <Icon name={'pin'} style={{marginRight: 10}} color={colors.darkGray}/><Text style={{color: colors.darkGray}}>Da Nang</Text>
                    </View>
                    <View style={{width: metrics.DEVICE_WIDTH*0.6}}>
                        <Text style={{textAlign: 'center'}}>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        </Text>
                    </View>
               </View>
               <View style={{flexDirection: 'row', flex: 1, height: metrics.DEVICE_HEIGHT*0.2}}>
                   <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                        <View style={{flexDirection: 'column'}}>
                            <Text>144</Text>
                            <Text>RUNNERS</Text>
                        </View>
                   </TouchableOpacity>
                   <TouchableOpacity style={{flex: 1}}>
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <Text>144</Text>
                            <Text>RUNNERS</Text>
                        </View>
                   </TouchableOpacity>
               </View>
            </ScrollView>
        )
    }
}
export default ClubDetail