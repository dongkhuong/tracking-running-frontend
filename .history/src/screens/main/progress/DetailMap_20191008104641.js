import React, { Component } from "react"
import { Text, ScrollView, Image, View } from "react-native"
import { Card, CardItem, Container, Content, Left, Right, Body } from 'native-base'
import styles from './Styles'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
class DetailMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fakeData: [
                {
                    id: 1,
                    title: 'Avg. Pace',
                    result: '27:12 min/km'
                },
                {
                    id: 2,
                    title: 'Avg. Speed',
                    result: '2,2 km/h'
                },
                {
                    id: 3,
                    title: 'Max. Speed',
                    result: '16,5 km/h'
                },
                {
                    id: 4,
                    title: 'Elevation Gain',
                    result: '0 m'
                },
                {
                    id: 5,
                    title: 'Elevation Loss',
                    result: '0 m'
                },
                {
                    id: 6,
                    title: 'Max. Elevation',
                    result: '12 m'
                },
                {
                    id: 7,
                    title: 'Start time',
                    result: '15:17'
                }
            ]
        }
    }
    render() {
        return (
            <Container>
                <ScrollView style={styles.scrollContainer}>
                    <Content>
                        <Card>
                            <CardItem style={styles.resetPadding}>
                                <View>
                                    <Image source={require('../../../assets/images/detailmap.png')} width={'50%'} resizeMode={'contain'}/>
                                </View>
                            </CardItem>
                            <CardItem style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
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
                            {
                                this.state.fakeData.map((data) => (
                                <CardItem key={data.id}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Left>
                                            <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                            <View>
                                                <Text style={{color:colors.darkGray}}>{data.title}</Text>
                                            </View>
                                        </Left>
                                        <Right>
                                            <View>
                                                <Text style={{fontWeight: 'bold'}}>{data.result}</Text>
                                            </View>
                                        </Right>
                                    </View>
                                </CardItem>
                                ))
                            }
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default DetailMap