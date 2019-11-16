import React, { Component } from "react"
import { Text, ScrollView, TouchableOpacity, Image, View, RefreshControl } from "react-native"
import { Card, CardItem, Container, Content, Left, Right, Body } from 'native-base'
import styles from './Styles'
import colors from '../../../constants/Color'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from "react-native-ionicons";
class Progress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [],
            refreshing: false
        }
    }
    fetchData = async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const activities = await axios.get(Constant.rootAPI+'/activities',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data = activities.data.data.data
            this.setState({data: data})       
        } catch(err) {
            throw new Error(err)
        }
    }
    componentDidMount() {
       this.fetchData()
    }
    reverseString = (str) => {
        return str.split("-").reverse().join("-")
    }
    _onRefresh = () => {
        this.setState({refreshing: true})
        this.fetchData().then(() => this.setState({refreshing: false}))
    }
    render() {
        return (
                <ScrollView 
                style={styles.scrollContainer}
                refreshControl = {
                    <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                    />   
                }>
                    <Content>
                        <Card>
                            <CardItem>
                                <Text style={{fontWeight: 'bold'}}>CHALLENGES</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem style={{flexDirection:'row', flex: 1}}>
                                <Text style={{fontWeight: 'bold'}}>RECENT ACTIVITIES</Text>
                                <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}} onPress={() => this.props.navigation.navigate('History')}>
                                    <Text style={styles.touchableTextStyle}>SHOW MORE</Text>
                                </TouchableOpacity>
                            </CardItem> 
                            {this.state.data.map((item) => (
                            <CardItem key={item.id}>
                                <TouchableOpacity style={{flex: 1, flexDirection: 'row'}} onPress={() => this.props.navigation.navigate('Detail',{id: item.id})}>
                                    <Left>
                                        <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                        <View>
                                            <Text>{item.distance} km</Text>
                                            <Text style={{color: colors.darkGray, fontSize: 11}}>{item.duration}</Text>
                                        </View>
                                    </Left>
                                    <Right style={{ flexDirection: 'column'}}>
                                        <Image source={require('../../../assets/images/icons/clouds.png')} style={styles.iconWeather}/>
                                        <View style={{marginTop: 0}}>
                                            <Text style={{color: colors.darkGray, fontSize: 11}}>{this.reverseString(item.date)}</Text>
                                        </View>
                                    </Right>
                                </TouchableOpacity>
                            </CardItem>
                            ))}
                            <CardItem style={styles.cardItemAdd}>
                                <TouchableOpacity style={{ flexDirection: 'row' , alignItems: 'center'}} onPress={() => this.props.navigation.navigate('AddManualEntry')}>
                                    <Icon name="add" color={colors.primaryColor}/>
                                    <Text style={styles.touchableTextStyle}>ADD AN ACTIVITY MANUALLY</Text>
                                </TouchableOpacity>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Text style={{fontWeight: 'bold'}}>STATISTICS</Text>
                            </CardItem>
                            <CardItem>
                                    <Text>Statistics here!</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Text style={{fontWeight: 'bold'}}>MY GOALS</Text>
                            </CardItem>
                            <CardItem style={styles.cardItemAdd}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddGoal')}>
                                    <Text style={styles.touchableTextStyle}>ADD GOAL</Text>
                                </TouchableOpacity>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
        )
    }
}
export default Progress;