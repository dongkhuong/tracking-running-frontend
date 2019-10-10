import React, { Component } from "react"
import { Text, ScrollView, TouchableOpacity, Image, View, ImageBackground } from "react-native"
import { Card, CardItem, Container, Content, Left, Right, Body } from 'native-base'
import ModalDropdown from 'react-native-modal-dropdown'
import styles from './Styles'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
class DetailMap extends Component {
    render() {
        return (
            <Container>
                <ScrollView style={styles.scrollContainer}>
                    <Content>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Text>0, 02</Text>
                                </Left>
                                <Body>
                                    <Text>00:00:34</Text>
                                </Body>
                                <Right>
                                    <Text>0</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default DetailMap