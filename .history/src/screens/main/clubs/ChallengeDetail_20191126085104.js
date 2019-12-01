import React, { Component } from 'react'
import { View, Text } from 'react-native'
import colors from '../../../constants/Color'
class ChallengeDetail extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <Text style={{textAlign: 'center', paddingVertical: 5, borderWidth:1, borderColor: colors.darkGray}}>Overview</Text>
            </View>
        )
    }
}

export default ChallengeDetail
