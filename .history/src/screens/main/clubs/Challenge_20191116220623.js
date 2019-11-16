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
            challenge: {}
        }
    }

    fetchData = async () => {
        try{
            const challengeId = this.props.navigation.getParam('challenge_id')
            const asyncStorage = await AsyncStorage.getItem("token")
            const challenge = await axios.get(Constant.rootAPI+'/showDetailChallenge/'+ challengeId,
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(challenge.data.business_code == 1) {
                const data = challenge.data.data
                this.setState({challenge: data})  
            } else {
                ToastAndroid.show('No record', ToastAndroid.SHORT)
            }
        } catch(err) {
            throw new Error(err)
        }
    }
    async componentDidMount() {
        await this.fetchData()
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#E7EAED'}}> 
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/backgroundImage.jpg')} style={{height: '100%', width: '100%'}}/>
                    </TouchableOpacity>
               </View>
                <View style={{paddingBottom: 10, alignItems: 'center', backgroundColor: colors.white}}>
                    <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}> November Run Climbing Challenge</Text>
                    <View style={{width: metrics.DEVICE_WIDTH*0.8}}>
                        <Text style={{textAlign: 'center', color: colors.darkGray, fontSize: 12}}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        </Text>
                    </View>
               </View>
               <View>
                    <ListItem
                        leftIcon={<Icon name="calendar" style={{width: 25}} color={colors.primaryColor}/>}
                        titleStyle={{fontSize: 13 }}
                        title={"November 1, 2019 to November 30, 2019 - Nov 1, 2019 to Nov 30"}
                    />
                    <ListItem
                        leftIcon={<Icon name="walk" style={{width: 25}} color={colors.primaryColor}/>}
                        titleStyle={{fontSize: 13}}
                        title={"Run 21.1 km"}
                    />
                    <ListItem
                        leftIcon={<Icon name="trophy" style={{width: 25}} color={colors.primaryColor}/>}
                        titleStyle={{fontSize: 13}}
                        title={"Athletes who complete this Challenge will receive a digital finishers badge in their Trophy Case."}
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
                        title={"The Da Nang Club"}
                        subtitle={"668593 athletes"}
                    />
                </View>
            </ScrollView>
        )
    }
}
export default Challenge