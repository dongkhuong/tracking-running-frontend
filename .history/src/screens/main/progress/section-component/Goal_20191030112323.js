import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PercentageCircle from 'react-native-percentage-circle'
class Goal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { radius, borderWidth } = this.props
        return (
            <PercentageCircle radius={70} percent={50} color={"#3498db"} borderWidth={8}>

            </PercentageCircle>
        );
    }
}
export default Goal