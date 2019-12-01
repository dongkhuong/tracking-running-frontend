import React, { Component } from "react"
import { Text, View, ScrollView, TouchableOpacity, Image, RefreshControl, ActivityIndicator } from "react-native"
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
import { Card, CardItem, Container, Content } from 'native-base'
import styles from './Styles'
import Icon from "react-native-ionicons"
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class Clubs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groups: [],
            refreshing: false,
            countRunners: [],
            groupsOfUser: []
        }
    }
    fetchDataPopularNearYou = async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const groups = await axios.get(encodeURI(Constant.rootAPI+'/groups'),
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            console.log('a')
            const data = groups.data.data
            this.setState({groups: data})   
            await this.countRunners()
            await this.getAllGroupsOfUser()
        } catch(err) {
            console.log(err.response)
        }
    }

   countRunners = async () => {
        try{
          const asyncStorage = await AsyncStorage.getItem("token")
          const countRunners = await axios.get(Constant.rootAPI+'/countRunners',
          {headers: {'Authorization': `Bearer ${asyncStorage}`}})
          if(countRunners.data.business_code == 1){
            this.setState({countRunners: countRunners.data.count_runners})
          } else if (countRunners.data.business_code == 0) {
            console.log(countRunners.data.message)
          }

        } catch(err) {
          throw new Error(err)
        }
    }
    getAllGroupsOfUser = async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const groups = await axios.get(Constant.rootAPI+'/getAllGroupsOfUser',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(groups.data.business_code == 1) {
                const groupsOfUser = groups.data.data
                this.setState({groupsOfUser: groupsOfUser})
            }
        } catch(err) {
            throw new Error(err)
        }
    }

    _onRefresh = () => {
        this.setState({refreshing: true})
        this.fetchDataPopularNearYou().then(() => this.setState({refreshing: false}))
    }
    async componentDidMount() {
        await this.fetchDataPopularNearYou()
        await this._onRefresh()
    }
    render() {
        return (
           <ScrollView style={{backgroundColor: '#E7EAED'}}                     
            refreshControl={
            <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            />   
            }>
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/backgroundImage.jpg')} style={{height: '100%', width: '100%'}}/>
                    </TouchableOpacity>
               </View>
               {this.state.isLoading ==true ? (
                <View style={{ width: metrics.DEVICE_WIDTH, height: metrics.DEVICE_HEIGHT, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size='large' color={colors.primaryColor}/>
                </View>
                )
                : 
                (<View>
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <Text style={{marginHorizontal: 10, marginVertical: 5,fontWeight: 'bold', color: colors.darkGray}}>YOUR GROUP</Text>
                    <ScrollView horizontal={true} style={{backgroundColor: colors.white}} contentContainerStyle={{alignItems: 'center'}}>
                        {this.state.groupsOfUser.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate("ClubDetail",{id: item.id, image: item.image, countRunners: this.state.countRunners[item.id] ? this.state.countRunners[item.id]: 0})}>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.14, width: metrics.DEVICE_HEIGHT*0.14, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    {item.image != null ?
                                        <Image source={{ uri: item.image}} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>:
                                        <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>}
                                    <Text style={{fontSize: 11, textAlign: 'center'}}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>  
                        ))}        
                    </ScrollView>
               </View>
               <View>
                    <Text style={{marginHorizontal: 10, marginVertical: 5, fontWeight: 'bold', color: colors.darkGray}}>POPULAR NEAR YOU</Text>
                    <ScrollView 
                        horizontal={true} 
                        style={{backgroundColor: colors.white}}>
                        {this.state.groups.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate("ClubDetail",{id: item.id, image: item.image, countRunners: this.state.countRunners[item.id] ? this.state.countRunners[item.id]: 0})}>
                                    <View style={{ height: metrics.DEVICE_HEIGHT*0.25, width: metrics.DEVICE_HEIGHT*0.25, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                        {item.image != null ?
                                        <Image source={{ uri: item.image}} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>:
                                        <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>}
                                        <Text style={{fontSize: 15, textAlign: 'center', marginTop: 5}}>{item.name}</Text>
                                        {this.state.countRunners[item.id] != undefined ? (
                                            <Text style={{fontSize: 13, textAlign: 'center', position: 'absolute', color: colors.darkGray, bottom: 10}}>{this.state.countRunners[item.id] > 1 ? this.state.countRunners[item.id] + " Runners": this.state.countRunners[item.id] + " Runner"} </Text>
                                        ):  <Text style={{fontSize: 13, textAlign: 'center', position: 'absolute', color: colors.darkGray, bottom: 10}}>0 Runner</Text>
                                        }
                                       
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
               </View>
               <View style={{marginVertical: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("MaterialTabClubs", {countRunners: this.state.countRunners})} style={{borderColor: colors.darkGray, backgroundColor: colors.white, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 5, borderBottomWidth: 0.5, borderTopWidth: 0.5}}>
                        <Text>View All Groups</Text>
                        <Icon name="arrow-forward" color={colors.darkGray}/>
                    </TouchableOpacity>
               </View>
               </View>)}
           </ScrollView>
        )
    }
}
export default Clubs