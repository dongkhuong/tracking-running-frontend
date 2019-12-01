import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import colors from '../../../constants/Color'
import HTML from 'react-native-render-html'


class ChallengeDetail extends Component {
    componentDidMount() {
      
    }
    render() {
        const policy =  this.props.navigation.getParam("policy")
        return(
            <ScrollView>
                <Text style={{textAlign: 'center', paddingVertical: 5, borderWidth:1, borderColor: colors.gray}}>Overview</Text>
                <View style={{paddingHorizontal: 20, paddingVertical: 30}}>
                    <HTML tagsStyles={{p: {textAlign: 'center', color: colors.darkGray, fontSize: 12}}} html={policy.overview} />
                </View>
                <Text style={{textAlign: 'center', paddingVertical: 5, borderWidth:1, borderColor: colors.gray}}>Rewards</Text>
                <View style={{paddingHorizontal: 20, paddingVertical: 30}}>
                    <HTML tagsStyles={{p: {textAlign: 'center', color: colors.darkGray, fontSize: 12}}} html={policy.rewards} />
                </View>
                <Text style={{textAlign: 'center', paddingVertical: 5, borderWidth:1, borderColor: colors.gray}}>Additional Info</Text>
                <View style={{paddingHorizontal: 20, paddingVertical: 30}}>
                    <HTML tagsStyles={{p: {textAlign: 'center', color: colors.darkGray, fontSize: 12}}} html={policy.add_infos} />
                </View>
                <Text style={{textAlign: 'center', paddingVertical: 5, borderWidth:1, borderColor: colors.gray}}>Rules</Text>
                <View style={{paddingHorizontal: 20, paddingVertical: 30}}>
                    <HTML tagsStyles={{p: {textAlign: 'center', color: colors.darkGray, fontSize: 12}}} html={policy.rules} />
                </View>
                <TouchableOpacity style={{alignItems: 'center'}}>
                    <Text>Leave Challenge</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

export default ChallengeDetail
