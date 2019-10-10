import React, { Component } from "react"
import { Text, ScrollView, TouchableOpacity, Image, View, ImageBackground } from "react-native"
import { Card, CardItem, Container, Content, Left, Right } from 'native-base'
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
                                <Image source={{uri:'https://i.stack.imgur.com/ddX9U.png'}} width={'100%'} height={'100'}/>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default DetailMap