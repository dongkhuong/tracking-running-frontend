import React, { Component } from "react"
import { Text, ScrollView, TouchableOpacity, Image, View } from "react-native"
import { Card, CardItem, Container, Content, Left, Right } from 'native-base'
import ModalDropdown from 'react-native-modal-dropdown'
import styles from './Styles'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
class DetailImage extends Component {
    render() {
        return (
            <Container>
                <ScrollView style={styles.scrollContainer}>
                    <Content>
                        <Card>
                            <CardItem style={{flexDirection:'row', flex: 1}}>
                                <Left>
                                    <Image source={require('../../../assets/images/icons/02d.png')}/>
                                    <Text style={{fontWeight: 'bold'}}>WEEK 40</Text>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Text style={{marginRight:10}}>0,02 km</Text>
                                        <Text>3 activities</Text>               
                                    </View>
                                </Left>
                            </CardItem>           
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default DetailImage