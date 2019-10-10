import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Card, Container, Content, CardItem, Left, Thumbnail, Right, Body, Icon }from 'native-base'
import colors from '../../../constants/Color'
import TextPage from "../../../components/TextPage";
class AddManualEntry extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem></CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail small source={{uri: 'https://images.pexels.com/photos/2953872/pexels-photo-2953872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
                                <Body>
                                    <TextPage color={colors.black} fontSize={12} fontWeight={'normal'}>Duration</TextPage>
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
            </Container>
        );
    }
}
export default AddManualEntry