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
                    <View>
                        <Text>0.00</Text>
                        <Text>Distance(km)</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Left style={{alignItems: 'center'}}>
                            <Text>00:00</Text>
                            <Text>Duration</Text>
                        </Left>
                        <Body>
                            <Text>0</Text>
                            <Text>calories (cal)</Text>
                        </Body>
                        <Right>
                            <Text>00:00</Text>
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