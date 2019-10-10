import React, { Component } from "react"
import { Text, ScrollView, Image, View } from "react-native"
import { Card, CardItem, Container, Content, Left, Right, Body } from 'native-base'
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
                                <Left style={styles.formatDetailArea}>
                                    <Text style={styles.detailBoldText}>0, 02</Text>
                                    <Text style={{color:colors.darkGray}}>Distance (km)</Text>
                                </Left>
                                <Body style={styles.formatDetailArea}>
                                    <Text style={styles.detailBoldText}>00:00:34</Text>
                                    <Text style={{color:colors.darkGray}}>Duration</Text>
                                </Body>
                                <Right style={styles.formatDetailArea}>
                                    <Text style={styles.detailBoldText}>0</Text>
                                    <Text style={{color:colors.darkGray}}>Calories</Text>
                                </Right>
                            </CardItem>
                            <CardItem>
                                <View style={{flexDirection: 'row'}}>
                                    <Left>
                                        <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                        <View>
                                            <Text style={{color:colors.darkGray}}>Avg.Pace</Text>
                                        </View>
                                    </Left>
                                    <Right>
                                        <View>
                                            <Text>27:12 min/km</Text>
                                        </View>
                                    </Right>
                                </View>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default DetailMap