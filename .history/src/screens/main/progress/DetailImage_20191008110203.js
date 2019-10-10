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
                            <CardItem style={styles.resetPadding}>
                                <Image source={require('../../../assets/images/run1.png')} style={{width: metrics.DEVICE_WIDTH, height:metrics.DEVICE_HEIGHT*0.3}}/>
                            </CardItem>
                            <CardItem style={{flexDirection:'row', flex: 1}}>
                                <Left>
                                    <Image source={require('../../../assets/images/icons/02d.png')} style={{marginRight: 20, width: 80, height:80}}/>
                                    <Text style={{fontWeight: 'bold', marginRight: 20, fontSize: 20}}>31 degree</Text>
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Text style={{marginRight:10}}>13,0 km/h</Text>
                                        <Text>Humidity 72%</Text>               
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