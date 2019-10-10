import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail } from 'native-base'
class EditProfile extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../../assets/images/logoImage.jpg')} />
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default EditProfile