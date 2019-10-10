import React, { Component } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Left, Body, Right} from 'native-base'
class Activity extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity style={{alignItems: 'center', flex:3}}>
                    <Image source={require('../../../assets/images/icons/01d.png')}/>
                    <View  style={{alignItems: 'center', marginTop: 30, marginBottom: 20}}>
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
                <View style={{flex:7}}>

                </View>
            </View>
        );
    }
}
export default Activity;