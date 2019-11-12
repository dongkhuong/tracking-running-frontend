import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, ToastAndroid, RefreshControl } from "react-native"
import { Card, CardItem, Container, Content, Thumbnail, Left, Body, Right, Icon } from 'native-base'
import TextPage from "../../../components/TextPage"
import colors from '../../../constants/Color'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class FollowFriend extends Component {
    constructor(props){
        super(props)
        this.state = {
            friends: [],
            currentUserId: null
        }
    }
    componentDidMount() {
        const userLikes = this.props.navigation.getParam('userLikes')
        const user = userLikes.map((item) =>{
            return item['user']
        })
        this.setState({friends: user})
        AsyncStorage.getItem('currentUser').then(
            (item) => {
                const currentUser = JSON.parse(item)
                this.setState({currentUserId: currentUser.id})
            }
        )
        // if(this.state.friends != []){
        //     let friends = this.state.friends.filter(function(value){return value.id != this.state.currentUserId })
        //     this.setState({friends: friends})
        // }
    }
    render() {
        // const { navigation } = this.props
        return (
                <ScrollView >
                    <Content>
                        <Card>
                            <CardItem>
                                <Left>
                                    <TextPage color={colors.black} fontSize={14} fontWeight={'bold'}>OTHER RUNNER</TextPage>
                                </Left>
                            </CardItem>
                            {this.state.friends.map((item) => (
                                <CardItem key={item.id} style={this.state.currentUserId == item.id ? {backgroundColor: colors.lightGray}: {backgroundColor: 'transparent'}}>
                                    <Left>
                                        <Thumbnail small source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUc6OePV2g4FYscVdNItC-jItPv_3XLTMBTybAiYzy-f2M6u0mGQ&s"}}/>
                                        <Body>
                                            <TextPage color={colors.black} fontSize={12} fontWeight={'normal'}>{item.firstname + ' ' + item.lastname}</TextPage>
                                        </Body>
                                        {this.state.currentUserId == item.id ? (
                                            <Right>
                                                <Text style={{fontSize: 12, color: colors.darkGray}}>Current User</Text>
                                            </Right>
                                        ) : null}

                                    </Left>
                                </CardItem>
                            ))}
                        </Card>
                    </Content>
                </ScrollView>
        );
    }
}
export default FollowFriend