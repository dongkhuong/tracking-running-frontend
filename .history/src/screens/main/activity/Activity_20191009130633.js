import React, { Component } from "react"
import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native"
import { Left, Body, Right} from 'native-base'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
class Activity extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <View style={{flex: 1}}>
                <View style={{flex:1, borderBottomWidth: 1, borderBottomColor: colors.darkGray}}>
                <TouchableOpacity style={{height: 'auto', alignItems: 'center', paddingBottom: 20}}>
                    <Image source={require('../../../assets/images/runer-silhouette-running-fast.png')}/>
                    <View  style={{alignItems: 'center', marginTop: 20, marginBottom: 10}}>
                        <Text style={{fontSize: 50, fontWeight: 'bold'}}>0.00</Text>
                        <Text>Distance(km)</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Left style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>00:00</Text>
                            <Text>Duration</Text>
                        </Left>
                        <Body style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>0</Text>
                            <Text>calories (cal)</Text>
                        </Body>
                        <Right style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>00:00</Text>
                            <Text>Avg. Pace (min/km)</Text>
                        </Right>
                    </View>
                </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                    <ImageBackground source={require('../../../assets/images/mapdemo.jpg')} style={{width: metrics.DEVICE_WIDTH, height: metrics.DEVICE_HEIGHT*0.5}}>
                        <View style={{alignItems: 'center', flex: 0.5}}>
                            <TouchableOpacity style={{width: metrics.DEVICE_WIDTH*0.5, alignItems: 'center', marginTop: metrics.DEVICE_HEIGHT*0.3, backgroundColor: colors.primaryColor, borderRadius: metrics.DEVICE_WIDTH*0.25, paddingVertical: 2}}>
                                <Text>START LIVE</Text>
                                <Text>Running</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>    
                </View>
            </View>
        );
    }
}
export default Activity;