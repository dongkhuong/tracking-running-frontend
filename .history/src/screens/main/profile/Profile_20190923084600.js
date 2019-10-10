import React, { Component } from "react"
import { View, Text, ScrollView } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Body } from 'native-base'
class Profile extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <ScrollView>
                    <Content>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Thumbnail style={{ alignItems: 'center' }} source={{uri: "https://images.pexels.com/photos/2948260/pexels-photo-2948260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}} />
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}
export default Profile;