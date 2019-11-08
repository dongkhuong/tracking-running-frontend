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
                                <Thumbnail small source={{uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhelpx.adobe.com%2Fcontent%2Fdam%2Fhelp%2Fen%2Fstock%2Fhow-to%2Fvisual-reverse-image-search%2Fjcr_content%2Fmain-pars%2Fimage%2Fvisual-reverse-image-search-v2_intro.jpg&imgrefurl=https%3A%2F%2Fhelpx.adobe.com%2Fstock%2Fhow-to%2Fvisual-reverse-image-search.html&docid=_259FA1tftjwzM&tbnid=rQTDgjlYUmwEsM%3A&vet=10ahUKEwjaiP3rutnlAhVWy4sBHRDuAQEQMwhSKAQwBA..i&w=1000&h=560&bih=801&biw=1533&q=image&ved=0ahUKEwjaiP3rutnlAhVWy4sBHRDuAQEQMwhSKAQwBA&iact=mrc&uact=8"}}/>
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