import React, { Component } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { Card, Container, Content, CardItem, Left, Thumbnail, Right, Body, Icon }from 'native-base'
import colors from '../../../constants/Color'
class AddManualEntry extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <Content>
                    <Card style={{alignItems: 'center'}}>
                        <View>
                            <Image source={require('../../../assets/images/runer-silhouette-running-fast.png')}/>
                            <Text>Running</Text>
                        </View>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default AddManualEntry