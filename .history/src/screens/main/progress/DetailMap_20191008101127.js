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
                        <Card style={{flex: 1}}>
                            <View style={{flex: 3}}>
                                <Image source={require('../../../assets/images/detailmap.png')} height={'100'} width={'100%'}/>
                            </View>
                            <CardItem style={{flex: 7}}>
                                <Text>ádasd</Text>
                                <Text>ádasd</Text>
                                <Text>ádasd</Text><Text>ádasd</Text>
                                <Text>ádasd</Text>
                                <Text>ádasd</Text><Text>ádasd</Text>
                                <Text>ádasd</Text><Text>ádasd</Text>
                                <Text>ádasd</Text>
                                <Text>ádasd</Text>
                                <Text>ádasd</Text><Text>ádasd</Text>
                                <Text>ádasd</Text>
                                <Text>ádasd</Text>
                                <Text>ádasd</Text>
                                <Text>ádasd</Text>
                                <Text>ádasd</Text>
                                <Text>ádasd</Text>

                                
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default DetailMap