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
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lo
                        </Text>
                    </View>
               </View>
               <View style={{flexDirection: 'row', flex: 1}}>
                   <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                        <View style={{flexDirection: 'column'}}>
                            <Text>144</Text>
                            <Text>RUNNERS</Text>
                        </View>
                   </TouchableOpacity>
                   <TouchableOpacity style={{flex: 1}}>
                        <View style={{flexDirection: 'column'}}>
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