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
            refreshing: false,
        }
    }
    _onRefresh = () => {
        this.setState({refreshing: true})
        this.fetchData().then(() => this.setState({refreshing: false}))
    }
    componentDidMount() {
        // this.setState({friends: this.props.navigation.getParam('userLikes')})
        const userLikes = this.props.navigation.getParam('userLikes')
        const user_id = userLikes.map((item) =>{
            return item['user']['id']
        })
        this.setState({friends: user_id})
        this.retrieveItem('currentUserId')
        // console.log(user_id)
        // console.log(AsyncStorage.getItem('currentUserId'))
    }
    async retrieveItem(key) {
        try {
          const retrievedItem =  await AsyncStorage.getItem(key);
          const item = JSON.parse(retrievedItem);
          return item;
        } catch (error) {
          console.log(error.message);
        }
        return
    }
    render() {
        // const { navigation } = this.props
        return (
                <ScrollView 
                refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                />
                }>
                    <Content>
                        <Card>
                            <CardItem>
                                <Left>
                                    <TextPage color={colors.black} fontSize={14} fontWeight={'bold'}>OTHER RUNNER</TextPage>
                                </Left>
                            </CardItem>
                            {this.state.friends.map((item, index) => (
                                <CardItem key={index}>
                                    <Left>
                                        <Thumbnail small source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUc6OePV2g4FYscVdNItC-jItPv_3XLTMBTybAiYzy-f2M6u0mGQ&s"}}/>
                                        <Body>
                                            <TextPage color={colors.black} fontSize={12} fontWeight={'normal'}></TextPage>
                                        </Body>
                                        <Right>
                                            <TouchableOpacity>
                                                <Icon name='md-person-add' style={{color: colors.primaryColor, fontSize: 20}}/>
                                            </TouchableOpacity>
                                        </Right>
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