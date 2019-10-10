import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Card, CardItem, Container, Content, Thumbnail, Left, Body, Right, Icon } from 'native-base'
import TextPage from "../../../components/TextPage"
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
class AddFriend extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <ScrollView>
                    <Content>
                        <Card>
                            <CardItem>
                                <Left>
                                    <TextPage color={colors.black} fontSize={fonts.fontCardMedium} fontWeight={'bold'}>USERS YOU MIGHT KNOW</TextPage>
                                </Left>
                            </CardItem>
                            <CardItem>
                                    <Left>
                                        <Thumbnail small source={{uri: 'https://images.pexels.com/photos/2853250/pexels-photo-2853250.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
                                        <Body>
                                            <TextPage color={colors.black} fontSize={12} fontWeight={'normal'}>Đông Khương</TextPage>
                                        </Body>
                                        <Right>
                                            <TouchableOpacity>
                                                <Icon name='md-person-add' style={{color: colors.blue, fontSize: 20}}/>
                                            </TouchableOpacity>
                                        </Right>
                                    </Left>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}
export default AddFriend