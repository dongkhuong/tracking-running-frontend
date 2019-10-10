import React, { Component } from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { Card, Container, Content, CardItem, Left, Body, Icon, Header } from 'native-base'
import colors from '../../../constants/Color'
import TextPage from "../../../components/TextPage";
class Settings extends Component {
    renderSection = () => {
        return [
            {
                id: 1,
                titleSetting: 'PERSONAL SETTINGS',
                content: [
                    {
                        id: 1,
                        title: 'Edit Profile',
                        icon: 'contact'
                    },
                    {
                        id: 2,
                        title: 'Units',
                        icon: 'contact'
                    },
                    {
                        id: 3,
                        title: 'Notifications',
                        icon: 'contact'
                    },
                    {
                        id: 4,
                        title: 'Privacy',
                        icon: 'contact'
                    }
                ]
            },
            {
                id: 2,
                titleSetting: 'APP SETTINGS',
                content: [
                    {
                        id: 1,
                        title: 'Runtastic Wearables',
                        icon: 'contact'
                    },
                    {
                        id: 2,
                        title: 'Partner Accounts',
                        icon: 'contact'
                    },
                    {
                        id: 3,
                        title: 'Social Networks',
                        icon: 'contact'
                    }
                ]
            },
            {
                id: 3,
                titleSetting: 'MORE',
                content: [
                    {
                        id: 1,
                        title: 'Tearms & Conditions',
                        icon: 'contact'
                    },
                    {
                        id: 2,
                        title: 'Battery Settings',
                        icon: 'contact'
                    },
                    {
                        id: 3,
                        title: 'Runtastic',
                        icon: 'contact'
                    }
                ]
            }
        ]
    }
    render() {
        return (
            <Container>
                <ScrollView>
                    <Content>
                        {this.renderSection().map((item)=>(
                        <Card key={item.id}>
                            <CardItem>
                                 <TextPage color={colors.black} fontSize={15} fontWeight={'bold'}>{item.titleSetting}</TextPage>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Icon name='home' />
                                    <TouchableOpacity style={{marginLeft:10}}>
                                        <TextPage color={colors.black} fontSize={13} fontWeight={'normal'}>{item.content.title}</TextPage>
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
                        ))}
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}
export default Settings;