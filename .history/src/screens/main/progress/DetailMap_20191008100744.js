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
                            <CardItem style={{paddingLeft:0, paddingTop: 0, flex: 1}}>
                                <Image source={require('../../../assets/images/detailmap.png')} height={'auto'} style={{paddingHorizontal: 10}}/>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default DetailMap