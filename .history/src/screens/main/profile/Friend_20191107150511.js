import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Body, Left, Icon, Right } from 'native-base'
// import TextPage from "../../../components/TextPage"
// import colors from '../../../constants/Color'
class Friend extends Component {
    render() {
        return (
                <ScrollView>
                    <CardItem key={index}>
                        <Left>
                            {/* <Thumbnail small source={{uri: item.avatar}}/> */}
                            <Body>
                                <TextPage color={colors.black} fontSize={12} fontWeight={'normal'}>{item.firstname + " " + item.lastname}</TextPage>
                            </Body>
                            <Right>
                                <TouchableOpacity onPress={() => this.addFriend(item.id)}>
                                    <Icon name='md-person-add' style={{color: colors.primaryColor, fontSize: 20}}/>
                                </TouchableOpacity>
                            </Right>
                        </Left>
                    </CardItem>
                </ScrollView>
        );
    }
}
export default Friend