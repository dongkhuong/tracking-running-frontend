import React, { Component } from "react"
import { Text, ScrollView, Image, View } from "react-native"
import { Card, CardItem, Container, Content, Left, Right, Body } from 'native-base'
import styles from './Styles'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class DetailMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                distance: null,
                duration: null,
                calories: 0,
                average_pace: null,
                average_speed: null,
                max_speed: null,
                start_time: null,
                date: null
            }
        }
    }
    async componentDidMount() {
        try{
            const id = this.props.navigation.getParam('id')
            const asyncStorage = await AsyncStorage.getItem("token")
            const activity = await axios.get(Constant.rootAPI+'/activities/'+id,
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data = activity.data.data
            console.log(data)
            
        } catch(err) {
            console.log(err)
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
                                    <Image source={require('../../../assets/images/detailmap.png')} style={{width: metrics.DEVICE_WIDTH, height: metrics.DEVICE_HEIGHT*0.3}}/>
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
                            <CardItem>
                                <View style={{flexDirection: 'row'}}>
                                    <Left>
                                        <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                        <View>
                                            <Text style={{color:colors.darkGray}}>Avg. Pace</Text>
                                        </View>
                                    </Left>
                                    <Right>
                                        <View>
                                            <Text style={{fontWeight: 'bold'}}>27:12 min/km</Text>
                                        </View>
                                    </Right>
                                </View>
                            </CardItem>
                            <CardItem>
                                <View style={{flexDirection: 'row'}}>
                                    <Left>
                                        <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                        <View>
                                            <Text style={{color:colors.darkGray}}>Avg. Speed</Text>
                                        </View>
                                    </Left>
                                    <Right>
                                        <View>
                                            <Text style={{fontWeight: 'bold'}}>2,2 km/h</Text>
                                        </View>
                                    </Right>
                                </View>
                            </CardItem>
                            <CardItem>
                                <View style={{flexDirection: 'row'}}>
                                    <Left>
                                        <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                        <View>
                                            <Text style={{color:colors.darkGray}}>Max. Speed</Text>
                                        </View>
                                    </Left>
                                    <Right>
                                        <View>
                                            <Text style={{fontWeight: 'bold'}}>16,5 km/h</Text>
                                        </View>
                                    </Right>
                                </View>
                            </CardItem>
                            <CardItem>
                                <View style={{flexDirection: 'row'}}>
                                    <Left>
                                        <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                        <View>
                                            <Text style={{color:colors.darkGray}}>Start time</Text>
                                        </View>
                                    </Left>
                                    <Right>
                                        <View>
                                            <Text style={{fontWeight: 'bold'}}>15:17</Text>
                                        </View>
                                    </Right>
                                </View>
                            </CardItem>
                            <CardItem>
                                <View style={{flexDirection: 'row'}}>
                                    <Left>
                                        <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                        <View>
                                            <Text style={{color:colors.darkGray}}>Date</Text>
                                        </View>
                                    </Left>
                                    <Right>
                                        <View>
                                            <Text style={{fontWeight: 'bold'}}>14-10-2019</Text>
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