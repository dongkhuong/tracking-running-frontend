import React, { Component } from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { Card, Container, Content, CardItem, Left, Body, Icon } from 'native-base'
class Settings extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <Content>
                        <Card>
                            <CardItem>
                                <TouchableOpacity>
                                    <Left>
                                        <Icon name="home"/>
                                        <Body>
                                            <Text>as</Text>
                                            <Text>asaâa</Text>
                                        </Body>
                                    </Left>
                                </TouchableOpacity>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}
export default Settings;