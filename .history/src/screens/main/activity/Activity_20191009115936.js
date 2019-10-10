import React, { Component } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Left, Body, Right} from 'native-base'
import colors from '../../../constants/Color'
class Activity extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <View style={{flex: 1}}>
                <View style={{flex:3}}>
                <TouchableOpacity style={{height: 'auto', borderBottomWidth: 1, borderBottomColor: colors.darkGray, alignItems: 'center', paddingBottom: 20}}>
                    <Image source={require('../../../assets/images/runer-silhouette-running-fast.png')}/>
                    <View  style={{alignItems: 'center', marginTop: 20, marginBottom: 10}}>
                        <Text style={{fontSize: 50, fontWeight: 'bold'}}>0.00</Text>
                        <Text>Distance(km)</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
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
                <View style={{flex:7}}>

                </View>
            </View>
        );
    }
}
export default Activity;