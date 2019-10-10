import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Body, Left, Icon } from 'native-base'
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
                                    <TextPage marginTop={5} color={colors.black} fontSize={11} fontWeight={'normal'}>Runtastic user since 15 thg 8, 2019</TextPage>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                {/* <TouchableOpacity> */}
                                    <Left>
                                        <Icon name='home'/>
                                    </Left>
                                    <Body>
                                        <TextPage color={colors.black} fontSize={10} fontWeight={'bold'}>KHƯƠNG THÁI</TextPage>
                                        <TextPage color={colors.black} fontSize={10} fontWeight={'normal'}>Runtastic user since 15 thg 8, 2019</TextPage>
                                    </Body>
                                {/* </TouchableOpacity> */}
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}
export default Profile;