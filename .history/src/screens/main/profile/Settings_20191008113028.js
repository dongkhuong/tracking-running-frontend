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
                contents: [
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
                        icon: 'ios-notifications'
                    },
                    {
                        id: 4,
                        title: 'Privacy',
                        icon: 'md-key'
                    }
                ]
            },
            {
                id: 2,
                titleSetting: 'APP SETTINGS',
                contents: [
                    {
                        id: 1,
                        title: 'Wearables',
                        icon: 'ios-alarm'
                    },
                    {
                        id: 2,
                        title: 'Partner Accounts',
                        icon: 'contacts'
                    },
                    {
                        id: 3,
                        title: 'Social Networks',
                        icon: 'md-git-network'
                    }
                ]
            },
            {
                id: 3,
                titleSetting: 'MORE',
                contents: [
                    {
                        id: 1,
                        title: 'Tearms & Conditions',
                        icon: 'ios-business'
                    },
                    {
                        id: 2,
                        title: 'Battery Settings',
                        icon: 'md-pin'
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
                            {item.contents.map((content) => (
                            <TouchableOpacity key={content.id}>
                                <CardItem>
                                    <Left>
                                        <Icon name={content.icon} style={{color: colors.blue, width:50}} />
                                        <Body>
                                            <View>
                                                <TextPage color={colors.black} fontSize={13} fontWeight={'normal'}>{content.title}</TextPage>
                                            </View>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </TouchableOpacity>
                            ))}
                        </Card>
                        ))}
                        <Card>
                            <CardItem>
                                <Left>
                                    <Icon name='ios-log-out' style={{color: colors.blue}} />
                                    <Body>
                                        <TouchableOpacity>
                                            <TextPage color={colors.black} fontSize={13} fontWeight={'normal'}>Log out</TextPage>
                                        </TouchableOpacity>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}
export default Settings;