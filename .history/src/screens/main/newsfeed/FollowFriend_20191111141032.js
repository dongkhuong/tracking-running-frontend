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
            refreshing: false
        }
    }
    _onRefresh = () => {
        this.setState({refreshing: true})
        this.fetchData().then(() => this.setState({refreshing: false}))
    }
    componentDidMount() {
        // this.setState({friends: this.props.navigation.getParam('userLikes')})
        this.setState({friends: this.props.navigation.getParam('userLikes')})
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
                            {this.state.friends.map((item) => (
                                <CardItem >
                                    <Left>
                                        <Thumbnail small source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUc6OePV2g4FYscVdNItC-jItPv_3XLTMBTybAiYzy-f2M6u0mGQ&s"}}/>
                                        <Body>
                                            <TextPage color={colors.black} fontSize={12} fontWeight={'normal'}>{item.user.firstname + ' ' + item.user.lastname}</TextPage>
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