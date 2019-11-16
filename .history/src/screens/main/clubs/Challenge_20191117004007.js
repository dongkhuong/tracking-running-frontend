import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, Image, ToastAndroid, RefreshControl, Alert } from 'react-native'
import { Thumbnail } from 'native-base'
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
import Icon from 'react-native-ionicons'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './Styles'
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper'
import { ListItem } from 'react-native-elements'
class Challenge extends Component {
    constructor(props) {
        super(props)
        this.state = {
            challenge: {},
            policy: {},
            group: {}
        }
    }

    fetchData = async () => {
        try{
            const challengeId = this.props.navigation.getParam('challenge_id')
            const asyncStorage = await AsyncStorage.getItem("token")
            const challenge = await axios.get(Constant.rootAPI+'/showDetailChallenge/'+ challengeId,
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(challenge.data.business_code == 1) {
                this.setState({challenge: challenge.data.data, policy: challenge.data.data.policy, group: challenge.data.data.group}) 
            }
        } catch(err) {
            throw new Error(err)
        }
    }
    async componentDidMount() {
        await this.fetchData()
    }

    render() {
        const {name, description, start_date, end_date, start_time, goal} = this.state.challenge
        return (
            <ScrollView style={{backgroundColor: '#E7EAED'}}> 
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/backgroundImage.jpg')} style={{height: '100%', width: '100%'}}/>
                    </TouchableOpacity>
               </View>
                <View style={{paddingBottom: 10, alignItems: 'center', backgroundColor: colors.white}}>
                    <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{name}</Text>
                    <View style={{width: metrics.DEVICE_WIDTH*0.8}}>
                        <Text style={{textAlign: 'center', color: colors.darkGray, fontSize: 12}}>
                            {this.state.policy.overview}
                        </Text>
                    </View>
               </View>
               <View>
                    <ListItem
                        leftIcon={<Icon name="calendar" style={{width: 25}} color={colors.primaryColor}/>}
                        titleStyle={{fontSize: 13 }}
                        title={"From " + start_date + " to "+ end_date}
                    />
                    <ListItem
                        leftIcon={<Icon name="walk" style={{width: 25}} color={colors.primaryColor}/>}
                        titleStyle={{fontSize: 13}}
                        title={"Run " + goal+ "km"}
                    />
                    <ListItem
                        leftIcon={<Icon name="trophy" style={{width: 25}} color={colors.primaryColor}/>}
                        titleStyle={{fontSize: 13}}
                        title={this.state.policy.rewards}
                    />
                </View>
                <View style={{backgroundColor: colors.white, paddingVertical: 20}}>
                    <TouchableOpacity style={{marginLeft: 20}}>
                        <Text style={{fontWeight: 'bold', color: "#57565C"}}>Details and Eligibility</Text>
                    </TouchableOpacity>
                </View> 
                <View style={{marginVertical: 10}}>
                    <ListItem
                        leftAvatar={{ source: {uri: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/65161479/original/947fbb65743c4722d85d48d1a0d5e92df5eef93a/design-premium-logo-for-you.jpg"}}}
                        title={this.state.group.name}
                        subtitle={
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="pin" color={colors.primaryColor} style={{marginRight: 10}} size={11}/>
                            <Text>{this.state.group.address}</Text>
                        </View>
                        }
                    />
                </View>
            </ScrollView>
        )
    }
}
export default Challenge