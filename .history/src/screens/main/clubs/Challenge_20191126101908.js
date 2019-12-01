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
import HTML from 'react-native-render-html'
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
            const challengeId = this.props.navigation.getParam('id')
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
                    {this.state.policy.overview !=null ? 
                    <HTML tagsStyles={{p: {textAlign: 'center', color: colors.darkGray, fontSize: 12}}} html={this.state.policy !=null ? this.state.policy.overview : ""} />    
                    : null}
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
                        title={"Run " + goal+ " km"}
                    />
                    {this.state.policy.rewards !=null ?                     
                    <ListItem
                        leftIcon={<Icon name="trophy" style={{width: 25}} color={colors.primaryColor}/>}
                        // titleStyle={{fontSize: 13}}
                        title={ 
                        <HTML tagsStyles={{p: {fontSize: 13}}} html={this.state.policy.rewards} />
                        }
                    />: null}
                </View>
                {this.state.policy != null ? (
                    <View style={{backgroundColor: colors.white, paddingVertical: 20}}>
                        <TouchableOpacity style={{marginLeft: 20}} onPress={() =>  this.props.navigation.navigate("ChallengeDetail",{policy: this.state.policy})}>
                            <Text style={{fontWeight: 'bold', color: "#57565C"}}>Details and Eligibility</Text>
                        </TouchableOpacity>
                    </View> 
                ): null}
                <View style={{marginVertical: 10}}>
                    <ListItem
                        leftAvatar={{ source: {uri: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/65161479/original/947fbb65743c4722d85d48d1a0d5e92df5eef93a/design-premium-logo-for-you.jpg"}}}
                        title={this.state.group.name}
                        subtitle={
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                            <Icon name="pin" color={colors.primaryColor} style={{marginRight: 10}} size={17}/>
                            <Text style={{color: colors.darkGray}}>{this.state.group.address}</Text>
                        </View>
                        }
                    />
                </View>
                <View>
                    <Text style={{textAlign: 'center'}}>Rank</Text>
                    <ListItem
                        containerStyle={{backgroundColor: '#E7EAED'}}
                        leftElement={
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{width: 50, textAlign: 'center', marginRight: 10}}>RANK</Text>
                                <Text>ATHLETE</Text>
                            </View>
                        }
                        rightElement={<Text>ELEVATION</Text>}
                        topDivider
                    />
                    <ListItem
                        leftElement={
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{width: 50, textAlign: 'center', marginRight: 10}}>1</Text>
                                <Text>Ta Nhat Quang</Text>
                            </View>
                        }
                        rightElement={<Text>9 km</Text>}
                        bottomDivider
                    />
                    <ListItem
                        leftElement={
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{width: 50, textAlign: 'center', marginRight: 10}}>2</Text>
                                <Text>Nguyen Huu Tuan</Text>
                            </View>
                        }
                        rightElement={<Text>8.1 km</Text>}
                        bottomDivider
                    />
                </View>
            </ScrollView>
        )
    }
}
export default Challenge