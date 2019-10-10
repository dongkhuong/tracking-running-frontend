import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Card, CardItem, Container, Content, Thumbnail, Left, Body, Right, Icon } from 'native-base'
import TextPage from "../../../components/TextPage"
import colors from '../../../constants/Color'
class AddFriend extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <ScrollView>
                    <Content>
                        <Card>
                            <CardItem>
                                {/* <TouchableOpacity> */}
                                    <Left>
                                        <Thumbnail source={{uri: 'https://images.pexels.com/photos/2853250/pexels-photo-2853250.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
                                        <Body>
                                            <TextPage color={colors.black} fontSize={13} fontWeight={'normal'}>ABC</TextPage>
                                        </Body>
                                        <Right>
                                            <Icon name='home' style={{color: colors.black}}/>
                                        </Right>
                                    </Left>
                                {/* </TouchableOpacity> */}
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}
export default AddFriend