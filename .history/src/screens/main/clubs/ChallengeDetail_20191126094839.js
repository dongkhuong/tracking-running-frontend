import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import colors from '../../../constants/Color'
import HTML from 'react-native-render-html'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class ChallengeDetail extends Component {
    deleteJoin = async () => {
        try{
            const temp = this.props.navigation.getParam('policy')
            const challenge_id = temp.challenge_id
            const asyncStorage = await AsyncStorage.getItem("token")
            const deleteJoin = await axios.delete(Constant.rootAPI+'/deleteJoinChallenge/'+challenge_id,
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(deleteJoin.data.business_code == 1 ) {
                ToastAndroid.show("Leave challenge successfully!", ToastAndroid.SHORT)
                this.props.navigation.navigate('ListChallenges')
            } else if(deleteJoin.data.business_code == 0) {
                ToastAndroid.show("Some error on the system", ToastAndroid.SHORT)
            }
        } catch (err) {
            throw new Error(err)
        }
    }
    render() {
        const policy =  this.props.navigation.getParam("policy")
        return(
            <ScrollView>
                <Text style={{textAlign: 'center', paddingVertical: 5, borderWidth:1, borderColor: colors.gray}}>Overview</Text>
                <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
                    <HTML tagsStyles={{p: {textAlign: 'center', color: colors.darkGray, fontSize: 12}}} html={policy.overview} />
                </View>
                <Text style={{textAlign: 'center', paddingVertical: 5, borderWidth:1, borderColor: colors.gray}}>Rewards</Text>
                <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
                    <HTML tagsStyles={{p: {textAlign: 'center', color: colors.darkGray, fontSize: 12}}} html={policy.rewards} />
                </View>
                <Text style={{textAlign: 'center', paddingVertical: 5, borderWidth:1, borderColor: colors.gray}}>Additional Info</Text>
                <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
                    <HTML tagsStyles={{p: {textAlign: 'center', color: colors.darkGray, fontSize: 12}}} html={policy.add_infos} />
                </View>
                <Text style={{textAlign: 'center', paddingVertical: 5, borderWidth:1, borderColor: colors.gray}}>Rules</Text>
                <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
                    <HTML tagsStyles={{p: {textAlign: 'center', color: colors.darkGray, fontSize: 12}}} html={policy.rules} />
                </View>
                <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
                    <TouchableOpacity onPress={() => this.deleteJoin()} style={{alignItems: 'center', paddingVertical: 5, borderWidth: 1, color: colors.gray, backgroundColor: colors.white}}>
                        <Text style={{fontWeight: 'bold'}}>Leave Challenge</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default ChallengeDetail
