import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
class Goal extends Component {
    render() {
        return (
            <View>
                <ProgressCircle
                percent={30}
                radius={50}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"
                >
                <Text style={{ fontSize: 18 }}>{'30%'}</Text>
                </ProgressCircle>
            </View>
        );
    }
}
export default Goal