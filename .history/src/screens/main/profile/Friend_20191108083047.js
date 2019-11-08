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