import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Body, Left, Icon, Right } from 'native-base'
import TextPage from "../../../components/TextPage"
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
                            <Right style={{flexDirection: 'row'}}>
                                <TouchableOpacity >
                                    <Icon name='md-person-add' style={{color: colors.primaryColor, fontSize: 20}}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
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