import React, { Component } from 'react'
import { View, Text } from 'react-native'
import colors from '../../../constants/Color'
import HTML from 'react-native-render-html'
class ChallengeDetail extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <Text style={{textAlign: 'center', paddingVertical: 5, borderWidth:1, borderColor: colors.gray}}>Overview</Text>
                <View style={{paddingHorizontal: 20, paddingVertical: 30}}>
                    <HTML tagsStyles={{p: {textAlign: 'center', fontSize: 12, color: colors.darkGray}}} html={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                </View>
                <Text style={{textAlign: 'center', paddingVertical: 5, borderWidth:1, borderColor: colors.gray}}>Rewards</Text>
                <View style={{paddingHorizontal: 20, paddingVertical: 30}}>
                    <HTML tagsStyles={{p: {textAlign: 'center', fontSize: 12, color: colors.darkGray}}} html={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                </View>
                <Text style={{textAlign: 'center', paddingVertical: 5, borderWidth:1, borderColor: colors.gray}}>Additional Info</Text>
                <Text style={{textAlign: 'center', paddingVertical: 5, borderWidth:1, borderColor: colors.gray}}>Rules</Text>
            </View>
        )
    }
}

export default ChallengeDetail
