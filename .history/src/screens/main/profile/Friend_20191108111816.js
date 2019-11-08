import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, RefreshControl, ToastAndroid } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Body, Left, Right } from 'native-base'
import TextPage from "../../../components/TextPage"
import Icon from 'react-native-ionicons'
import colors from '../../../constants/Color'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class Friend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pendingRequest: [],
            refreshing: false
        }
    }
    async acceptFriend(user_id) {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const acceptFriend = await axios.patch(Constant.rootAPI+'/acceptFriend',
            {
                user_one: user_id
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const result = acceptFriend.data
            if(result){
                console.log("Accept Successfully!")
                ToastAndroid.show("Accept Successfully!", ToastAndroid.SHORT)
            } else {
                ToastAndroid.show("Accept Failed!", ToastAndroid.SHORT)
                throw Error("Accept Failed!")
            }
        } catch(err) {
            throw Error(err)
        }
    }
    fetchData =  async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const pendingRequest = await axios.get(Constant.rootAPI+'/pendingRequest',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data = pendingRequest.data.data
            this.setState({pendingRequest: data})
            console.log(this.state.pendingRequest)
        } catch(err) {
            console.log(err)
        }
    }
    _onRefresh = () => {
        this.setState({refreshing: true})
        this.fetchData().then(() => this.setState({refreshing: false}))
    }
    componentDidMount() {
        this.fetchData()
    }
    render() {
        return (
            <ScrollView
                refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                />
                }>
                <Card>
                    <CardItem>
                        <Left>
                            <TextPage color={colors.black} fontSize={14} fontWeight={'bold'}>FRIEND REQUESTS</TextPage>
                        </Left>
                    </CardItem>
                    {this.state.pendingRequest.map((item, index) => (
                    <CardItem key={index}>
                        <Left>
                             <Thumbnail small source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                             <Body>
                                 <TextPage color={colors.black} fontSize={12} fontWeight={'normal'}>{item.firstname + ' ' + item.lastname}</TextPage>
                             </Body>
                             <Right style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                 <TouchableOpacity style={{marginRight: 20}} onPress={() => this.acceptFriend(item.id)}>
                                     <Icon name='checkmark' style={{color: colors.primaryColor, fontSize: 20}}/>
                                 </TouchableOpacity>
                                 <TouchableOpacity style={{marginRight: 20}}>
                                     <Icon name='trash' style={{color: colors.primaryColor, fontSize: 20}}/>
                                 </TouchableOpacity>
                             </Right>
                         </Left>
                    </CardItem>
                    ))}
                </Card>
            </ScrollView>
        );
    }
}
export default Friend