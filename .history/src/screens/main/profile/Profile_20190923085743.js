import React, { Component } from "react"
import { View, Text, ScrollView } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Body } from 'native-base'
import TextPage from "../../../components/TextPage"
import colors from '../../../constants/Color'
class Profile extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <ScrollView>
                    <Content>
                        <Card>
                            <CardItem>
                                <Body style={{alignItems: 'center'}}>
                                    <Thumbnail large source={{uri: "https://images.pexels.com/photos/2948260/pexels-photo-2948260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}} />
                                    <TextPage marginTop={10} color={colors.black} fontSize={15} fontWeight={'bold'}>KHƯƠNG THÁI</TextPage>
                                    <TextPage marginTop={5} color={colors.black} fontSize={13} fontWeight={'normal'}>KHƯƠNG THÁI</TextPage>
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