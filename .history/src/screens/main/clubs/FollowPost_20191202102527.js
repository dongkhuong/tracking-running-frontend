import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, ToastAndroid, RefreshControl } from "react-native"
import { Card, CardItem, Container, Content, Thumbnail, Left, Body, Right, Icon } from 'native-base'
import TextPage from "../../../components/TextPage"
import colors from '../../../constants/Color'
import AsyncStorage from '@react-native-community/async-storage'
class FollowPost extends Component {
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
    }
    render() {
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
                                        <Thumbnail small source={{uri: item.avatar!=null ? item.avatar : "https://cdn2.iconfinder.com/data/icons/colored-simple-circle-volume-01/128/circle-flat-general-51851bd79-512.png"}}/>
                                        <Body>
                                            <TextPage color={colors.black} fontSize={12} fontWeight={'normal'}>{item.firstname + ' ' + item.lastname}</TextPage>
                                        </Body>
                                        {this.state.currentUserId == item.id ? (
                                            <Right>
                                                <Text style={{fontSize: 11, color: colors.darkGray}}>Current User</Text>
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
export default FollowPost