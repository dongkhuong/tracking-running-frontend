import React, { Component } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { Card, Container, Content, CardItem, Left, Thumbnail, Right, Body }from 'native-base'
import { Icon } from 'react-native-elements'
import colors from '../../../constants/Color'
class AddManualEntry extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <Content>
                    <Card style={{alignItems: 'center'}}>
                        <View style={{paddingVertical: 20}}>
                            <Image source={require('../../../assets/images/runer-silhouette-running-fast.png')}/>
                            <Text>Running</Text>
                        </View>
                    </Card>
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon name="settings" color={colors.primaryColor}/>
                            </Left>
                            <Right>
                                <Text>ss</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default AddManualEntry