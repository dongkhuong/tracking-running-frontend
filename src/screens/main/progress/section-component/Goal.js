import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PercentageCircle from 'react-native-percentage-circle'
import colors from '../../../../constants/Color'
class Goal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { radius, borderWidth } = this.props
        return (
            <View style={{marginTop: 20}}>
                <PercentageCircle radius={radius} percent={50} color={colors.primaryColor} borderWidth={borderWidth}>
                    <Text style={{color: colors.darkGray}}>Today</Text>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>0</Text>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.darkGray}}>of 1 km</Text>
                </PercentageCircle>
            </View>
        );
    }
}
export default Goal