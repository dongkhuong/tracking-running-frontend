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
            data: {}
        }
    }

    reverseString = (str) => {
        return str.split("-").reverse().join("-")
    }

    async componentDidMount() {
        try{
            const id = this.props.navigation.getParam('id')
            const asyncStorage = await AsyncStorage.getItem("token")
            const activity = await axios.get(Constant.rootAPI+'/activities/'+id,
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data = activity.data.data
            this.setState({data:data})
            
        } catch(err) {
            console.log(err)
        }
    }
    render() {
        const { data } = this.state
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
                                    <Text style={styles.detailBoldText}>{data.distance}</Text>
                                    <Text style={{color:colors.darkGray}}>Distance (km)</Text>
                                </Left>
                                <Body style={styles.formatDetailArea}>
                                    <Text style={styles.detailBoldText}>{data.duration}</Text>
                                    <Text style={{color:colors.darkGray}}>Duration</Text>
                                </Body>
                                <Right style={styles.formatDetailArea}>
                                    <Text style={styles.detailBoldText}>{data.calories}</Text>
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
                                            <Text style={{fontWeight: 'bold'}}>{data.average_pace} min/km</Text>
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
                                            <Text style={{fontWeight: 'bold'}}>{data.average_speed} km/h</Text>
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
                                            <Text style={{fontWeight: 'bold'}}>{data.max_speed} km/h</Text>
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
                                            <Text style={{fontWeight: 'bold'}}>{data.start_time}</Text>
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
                                            <Text style={{fontWeight: 'bold'}}>{data.date}</Text>
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