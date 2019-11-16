import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, Image, ToastAndroid, RefreshControl, Alert, ProgressBarAndroid} from 'react-native'
import colors from '../../../constants/Color'
import Icon from 'react-native-ionicons'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './Styles'
import { ListItem } from 'react-native-elements'
import moment from 'moment'
class ListChallenges extends Component {
    constructor(props) {
        super(props)
        this.state = {
            challenges: [],
            isShowButtonJoin: true,
            refreshing: false
        }   
    }

    async joinChallenge(id){
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const userOfChallenge = await axios.post(Constant.rootAPI+'/addCurrentUserIntoChallenge',
            {
                challenge_id: id,
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(userOfChallenge.data.business_code ==1 ) {
                ToastAndroid.show("Join this challenge successfully!", ToastAndroid.SHORT)
                this.setState({isShowButtonJoin: false})
                await this._onRefresh()
            } else if(userOfChallenge.data.business_code == 0) {
                ToastAndroid.show("Join this challenge failed!", ToastAndroid.SHORT)
            }
        } catch (err) {
            throw new Error(err)
        }
    }
    
    checkJoinGroup = async () => {
        try{
            const id = this.props.navigation.getParam('id')
            const asyncStorage = await AsyncStorage.getItem("token")
            const checkJoinGroup = await axios.post(Constant.rootAPI+'/checkJoinIntoGroup',
            {
                group_id: id,
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(checkJoinGroup.data.business_code == 1 ) {
                this.setState({isShowButtonJoin: false})
            } else if(checkJoinGroup.data.business_code == 0) {
                this.setState({isShowButtonJoin: true})
            }
        } catch (err) {
            throw new Error(err)
        }
    }

    deleteJoin = async () => {
        try{
            const id = this.props.navigation.getParam('id')
            const asyncStorage = await AsyncStorage.getItem("token")
            const deleteJoin = await axios.delete(Constant.rootAPI+'/deleteJoinGroup/'+id,
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(deleteJoin.data.business_code == 1 ) {
                ToastAndroid.show("Leave group successfully!", ToastAndroid.SHORT)
                this.setState({isShowButtonJoin: true})
            } else if(deleteJoin.data.business_code == 0) {
                this.setState({isShowButtonJoin: false})
            }
        } catch (err) {
            throw new Error(err)
        }
    }

    fetchData = async () => {
        try{
            const groupId = this.props.navigation.getParam('groupId')
            const asyncStorage = await AsyncStorage.getItem("token")
            const challenges = await axios.get(Constant.rootAPI+'/challenges/'+ groupId,
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(challenges.data.business_code == 1) {
                const data = challenges.data.data
                this.setState({challenges: data})  
            } else {
                ToastAndroid.show('No record', ToastAndroid.SHORT)
            }
        } catch(err) {
            throw new Error(err)
        }
    }
    _onRefresh = () => {
        this.setState({refreshing: true})
        this.fetchData().then(() => this.setState({refreshing: false}))
    }
    async componentDidMount () {
        await this.fetchData()
        await this._onRefresh()
    }
    render() {
        return (
            <ScrollView style={{backgroundColor: '#E7EAED'}}> 
                <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 10}}>YOUR ACTIVE CHALLENGES</Text>
                <View style={{backgroundColor: colors.white}}>
                    <ListItem
                    leftElement={<Image style={{width: 80, height: 80}} source={{uri: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'}}/>}
                    titleStyle={{fontSize: 13 }}
                    title={"November Half Marathon Challenge"}
                    subtitle={
                    <View style={{marginTop: 5}}>
                        <Text style={{fontSize: 12, color: colors.darkGray}}>14 Day Left</Text>
                        <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.5}
                        color={colors.primaryColor}
                        />
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 12}}>0/174.810</Text>
                            <Text style={{fontSize: 12}}>0 km</Text>
                        </View>
                    </View>}
                    bottomDivider
                    onPress={() => this.props.navigation.navigate('Challenge')}/>
                        
                </View>
                <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 10}}>ONGOING AND UPCOMING CHALLENGES</Text>
                <View style={{backgroundColor: colors.white}}>
                    {this.state.challenges.map((item, index) => (
                    this.state.isShowButtonJoin ? (    
                    <ListItem
                    key={index}
                    leftElement={<Image style={{width: 80, height: 80}} source={{uri: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'}}/>}
                    titleStyle={{fontSize: 13 }}
                    title={item.name}
                    subtitle={
                    <View style={{marginTop: 5}}>
                        <Text style={{fontSize: 12, color: colors.darkGray}}>{item.description}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon size={17} name={'contacts'} color={colors.primaryColor} style={{marginRight: 10}}/>
                                <Text style={{fontSize: 12}}>328.048</Text>
                            </View>
                            <Text style={{fontSize: 12}}>{moment(String(item.date).toString()).fromNow(true)} left</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.joinChallenge(item.id)} style={{borderWidth: 0.5, borderColor: colors.gray, borderRadius:2, paddingVertical: 5, alignItems: 'center', backgroundColor: colors.white, width: '100%'}}>
                            <Text style={{color: colors.primaryColor, fontWeight: 'bold'}}>Join</Text>
                        </TouchableOpacity>
                    </View>}
                    bottomDivider />
                    ) : null
                    ))}
                </View>
            </ScrollView>
        )
    }
}
export default ListChallenges