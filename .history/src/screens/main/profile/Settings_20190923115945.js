import React, { Component } from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { Card, Container, Content, CardItem, Left, Body, Icon } from 'native-base'
import colors from '../../../constants/Color'
import TextPage from "../../../components/TextPage";
class Settings extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <Content>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Icon name='home' />
                                    <TouchableOpacity style={{marginLeft:10}}>
                                        <TextPage color={colors.black} fontSize={13} fontWeight={'bold'}>Edit Profile</TextPage>
                                    </TouchableOpacity>
                                </Left>
                                {/* <Left> */}
                                    {/* <Icon name={'home'} style={{color:colors.white}}/> */}
                                    {/* <TouchableOpacity style={{marginLeft:10}}> */}
                                        {/* <TextPage color={colors.white} fontSize={11} fontWeight={'bold'}>Edit Profile</TextPage> */}
                                    {/* </TouchableOpacity> */}
                                {/* </Left> */}
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}
export default Settings;