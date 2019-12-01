import React, { Component } from "react"
import { View, Text, ScrollView, RefreshControl, TouchableOpacity, Image, ToastAndroid, Alert } from "react-native"
import styles from './Styles'
import { Content, Card, CardItem, Thumbnail, Left, Body, Right } from 'native-base'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
import metrics from '../../../constants/Metric'
import Icon from 'react-native-ionicons'
import colors from '../../../constants/Color'
import moment from 'moment'
class NewsFeed extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [],
            refreshing: false,
            isActiveLike: false,
            idLikeOfPost: [],
            arrLikes: [],
            userLikes: [],
            sumOfLikes: {},
            // isActiveComment: false,
            isActiveShare: false
        }
    }
    async deletePost(id){
      try{
        const asyncStorage = await AsyncStorage.getItem("token")
        const post = await axios.delete(Constant.rootAPI+'/deletePost/'+id,
        {headers: {'Authorization': `Bearer ${asyncStorage}`}})
        if(post.data.business_code == 1) {
          ToastAndroid.show("Delete Post Successfully!",ToastAndroid.SHORT)
          await this._onRefresh()
        } else {
          ToastAndroid.show("You can not delete other people's posts",ToastAndroid.SHORT)  
        }

      } catch(err) {
        throw new Error(err)
      }
    }
    // changeStatusComment = () => {
    // this.setState({isActiveComment: !this.state.isActiveComment})
    // }
    changeStatusShare = () => {
      this.setState({isActiveShare: !this.state.isActiveShare})
    }

    async addLike(id){
        try{
          const asyncStorage = await AsyncStorage.getItem("token")
          const like = await axios.post(Constant.rootAPI+'/addLike',
          {
              post_id: id
          },
          {headers: {'Authorization': `Bearer ${asyncStorage}`}})
          if(like.data.business_code == 1){
            this.setState(prevState => ({
              idLikeOfPost: [...prevState.idLikeOfPost, id]
            }))

          } else if (like.data.business_code == 0) {
             ToastAndroid.show(like.data.message,ToastAndroid.SHORT)
          }
          
        } catch(err) {
          throw new Error(err)
        }
    }

    async getSumLikesByPost(){
      try{
        const asyncStorage = await AsyncStorage.getItem("token")
        const sumLikes = await axios.get(Constant.rootAPI+'/getSumLikesByPost',
        {headers: {'Authorization': `Bearer ${asyncStorage}`}})
        if(sumLikes.data.business_code == 1){
          this.setState({sumOfLikes:sumLikes.data.data})
        } else if (sumLikes.data.business_code == 0) {
          this.setState({sumOfLikes: 0})
          // console.log(sumLikes.data.message)
        }
        
      } catch(err) {
        throw new Error(err)
      }
    }

    async checkLike(){
      try{
        const asyncStorage = await AsyncStorage.getItem("token")
        const likes = await axios.get(Constant.rootAPI+'/checkLike',
        {headers: {'Authorization': `Bearer ${asyncStorage}`}})
        if(likes.data.business_code == 1){
          let arrLikes = likes.data.data.data.map((item) => {return item['post_id']})
          this.setState({arrLikes: arrLikes})
        } else if (likes.data.business_code == 0) {
           ToastAndroid.show(likes.data.message,ToastAndroid.SHORT)
        }
        
      } catch(err) {
        throw new Error(err)
      }
    }

    async actionLike(id) {
      await this.addLike(id)
    }
    fetchData = async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const posts = await axios.get(Constant.rootAPI+'/posts',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data = posts.data.data.data
            this.setState({data: data})
            this.getSumLikesByPost()
        } catch(err) {
            throw new Error(err)
        }
    }

    getFormatTime = (time) => {
        // return  Date(time).getDate() + "/" + 
        // (new Date(time).getMonth()+1) + "/" + 
        // new Date(time).getFullYear() +  " at " + 
        // new Date(time).getHours() + ":" + 
        // new Date(time).getMinutes()
        return moment(time).format('dd/MM/YYYY, hh:mm:ss')
    }
    _onRefresh = () => {
        this.setState({refreshing: true})
        this.fetchData().then(() => this.setState({refreshing: false}))
    }
    async componentDidMount () {
        await this.fetchData()
        await this.checkLike()
        await this._onRefresh()
    }
    render() {
        return (
                    <ScrollView
                    refreshControl={
                        <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        />   
                    }>
                        {this.state.data.map((item, index) =>(
                            <Content key={index}>
                            <Card>
                              <CardItem style={{paddingBottom: 0}}>
                                <Left>
                                {/* source={require('../../../assets/images/backgroundImage.jpg')} */}
                                  <Thumbnail  style={{marginRight: 10}} source={{uri : 'https://icon-library.net/images/avatar-icon/avatar-icon-5.jpg'}}/>
                                  <Body>
                                    <Text style={{color: colors.black, fontWeight: 'bold'}}>{item.user.firstname + ' '+ item.user.lastname}</Text>
                                    <Text style={{color: colors.darkGray}}>{this.getFormatTime(item.created_at)}</Text>
                                  </Body>
                                  <Right>
                                    <TouchableOpacity onPress={() => 
                                      Alert.alert(
                                      'Delete',
                                      'Do you want to delete this posts?',
                                      [
                                        {text: 'Yes', onPress: () => this.deletePost(item.id)},
                                        {
                                          text: 'No',
                                          style: 'cancel',
                                        },
                                      ],
                                      {cancelable: false}
                                      )}>
                                      <Icon name='more' />
                                    </TouchableOpacity>
                                  </Right>
                                </Left>
                              </CardItem>
                              <CardItem style={{paddingBottom: 0}}>
                                  <Text style={{color: colors.black}}>
                                    {item.content}
                                  </Text>
                              </CardItem>
                              <CardItem style={{paddingBottom: 0}}>
                                  <View style={{flex:1, flexDirection: 'row'}}>
                                    <View style={{paddingRight: 30}}>
                                      <Text style={{fontSize: 12, color: colors.darkGray}}>Distance</Text>
                                      <Text>{item.activity.distance} km</Text>
                                    </View>
                                    <View style={{paddingRight: 30}}>
                                      <Text style={{fontSize: 12, color: colors.darkGray}}>Pace</Text>
                                      {item.activity.average_pace != null ? (
                                        <Text>{item.activity.average_pace} min/km</Text>
                                      ): (
                                        <Text>00:00 min/km</Text>
                                      )}
                                      
                                    </View>
                                    <View style={{paddingRight: 30}}>
                                      <Text style={{fontSize: 12, color: colors.darkGray}}>Time</Text>
                                      <Text>{item.activity.duration}</Text>
                                    </View>
                                  </View>
                              </CardItem>
                              <CardItem style={{paddingLeft:10, paddingRight:10}}>
                                  <Image style={{height: metrics.DEVICE_HEIGHT*0.3, width: '100%', flex: 1}} source={{uri: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}}/>
                              </CardItem>
                                <View style={{flex: 1, flexDirection: 'row', borderTopWidth: 1, paddingVertical: 5, borderColor: colors.gray}}>
                                  <View style={{flex:1, alignItems: 'center', borderRightWidth: 1, borderColor: colors.gray}}>
                                    <TouchableOpacity 
                                    style={{flexDirection: 'row', alignItems: 'center'}} 
                                    onPress={() => this.actionLike(item.id)}>
                                      <Icon name="heart" size={22} color={(this.state.idLikeOfPost.includes(item.id) || this.state.arrLikes.includes(item.id)) ? colors.primaryColor : colors.darkGray}/>
                                      {this.state.sumOfLikes[item.id] != undefined ? 
                                      <Text style={{fontSize: 11, marginLeft: 5}}>{this.state.sumOfLikes[item.id] > 1 ? this.state.sumOfLikes[item.id] + " Likes" : this.state.sumOfLikes[item.id] + " Like"}</Text> 
                                      : <Text style={{fontSize: 11, marginLeft: 5}}>0 Like</Text>
                                      }
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{flex:1, alignItems: 'center'}}>
                                    <TouchableOpacity
                                    style={{flexDirection: 'row', alignItems: 'center'}} 
                                    onPress={() => this.props.navigation.navigate('ListComment',{comment_id: item.id})}>
                                      <Icon name="eye" size={22} color={this.state.isActiveComment? colors.primaryColor: colors.darkGray}/>
                                      <Text style={{fontSize: 11, marginLeft: 5}}>{item.comments.length > 1 ? item.comments.length + " Comments" : item.comments.length + " Comment"}</Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                            </Card>
                          </Content>                   
                        ))}
                    </ScrollView>
        );
    }
}
export default NewsFeed;