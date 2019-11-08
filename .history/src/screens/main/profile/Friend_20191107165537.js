import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Body, Left, Right } from 'native-base'
import TextPage from "../../../components/TextPage"
import Icon from 'react-native-ionicons'
import colors from '../../../constants/Color'
class Friend extends Component {
    render() {
        return (
                <ScrollView>
                    <CardItem>
                        <Left>
                            {/* <Thumbnail small source={{uri: item.avatar}}/> */}
                            <Body>
                                <TextPage color={colors.black} fontSize={12} fontWeight={'normal'}></TextPage>
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
                </ScrollView>
        );
    }
}
export default Friend