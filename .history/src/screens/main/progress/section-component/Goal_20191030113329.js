import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PercentageCircle from 'react-native-percentage-circle'
import colors from '../../../../constants/Color'
import Icon from 'react-native-ionicons'
class Goal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { radius, borderWidth } = this.props
        return (
            <PercentageCircle radius={radius} percent={50} color={colors.primaryColor} borderWidth={borderWidth}>
                <Icon name={'walk'} color={colors.darkGray} style={{width: 70}}/>
                <Text></Text>
                <Text></Text>
            </PercentageCircle>
        );
    }
}
export default Goal