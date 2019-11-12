import React, { Component } from "react"
import { View, Text, ScrollView } from 'react-native'
import metrics from '../../../constants/Metric'
class ClubDetail extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: '#E7EAED'}}>
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/backgroundImage.jpg')} style={{height: '100%', width: '100%'}}/>
                    </TouchableOpacity>
               </View>
            </ScrollView>
        )
    }
}
export default ClubDetail