import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PercentageCircle from 'react-native-percentage-circle'
class Goal extends Component {
    render() {
        return (
            <View>
                 <PercentageCircle radius={10} percent={50} color={"#3498db"}></PercentageCircle>
            </View>
        );
    }
}
export default Goal