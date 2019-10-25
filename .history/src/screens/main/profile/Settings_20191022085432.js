import React, { Component } from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { Card, Container, Content, CardItem, Left, Body, Icon, Header } from 'native-base'
import colors from '../../../constants/Color'
import TextPage from "../../../components/TextPage";
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
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
                        icon: 'contact',
                        navigator: 'EditProfile'
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
    _signOutAsync = async () => {
        const asyncStorage = await AsyncStorage.getItem("token")
        if(asyncStorage){
            await AsyncStorage.clear();
        }
        await axios.post()
        this.props.navigation.navigate('AuthLoading')
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
                            <TouchableOpacity key={content.id} onPress={() => {
                                content.navigator ? this.props.navigation.navigate(content.navigator): null
                            }}>
                                <CardItem>
                                    <Left>
                                        <Icon name={content.icon} style={{color: colors.blue, width:40}} />
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
                            <TouchableOpacity onPress={this._signOutAsync}>
                                <CardItem>
                                    <Left>
                                        <Icon name='ios-log-out' style={{color: colors.blue, width:40}} />
                                        <Body>
                                                <TextPage color={colors.black} fontSize={13} fontWeight={'normal'}>Log out</TextPage>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </TouchableOpacity>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}
export default Settings;