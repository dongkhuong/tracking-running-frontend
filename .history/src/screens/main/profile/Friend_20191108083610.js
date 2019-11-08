import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Body, Left, Right } from 'native-base'
import TextPage from "../../../components/TextPage"
import Icon from 'react-native-ionicons'
import colors from '../../../constants/Color'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class Friend extends Component {
    fetchData =  async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const friends = await axios.get(Constant.rootAPI+'/pendingRequest',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data = friends.data.data
            this.setState({friends: data})
            console.log(this.state.friends)
        } catch(err) {
            console.log(err)
        }
    }
    render() {
        return (
            <ScrollView>
                <Card>
                    <CardItem>
                        <Left>
                            <TextPage color={colors.black} fontSize={14} fontWeight={'bold'}>FRIEND REQUESTS</TextPage>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Thumbnail small />
                            <Body>
                                <TextPage color={colors.black} fontSize={12} fontWeight={'normal'}>Thai Dong Khuong</TextPage>
                            </Body>
                            <Right style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <TouchableOpacity style={{marginRight: 20}}>
                                    <Icon name='checkmark' style={{color: colors.primaryColor, fontSize: 20}}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginRight: 20}}>
                                    <Icon name='trash' style={{color: colors.primaryColor, fontSize: 20}}/>
                                </TouchableOpacity>
                            </Right>
                        </Left>
                    </CardItem>
                </Card>
            </ScrollView>
        );
    }
}
export default Friend