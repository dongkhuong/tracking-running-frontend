import React, { Component } from "react"
import { View, Text, ScrollView, RefreshControl, TouchableOpacity, Image } from "react-native"
import styles from './Styles'
import { Content, Card, CardItem, Thumbnail, Left, Body, Right } from 'native-base'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
import metrics from '../../../constants/Metric'
import Icon from 'react-native-ionicons'
import colors from '../../../constants/Color'
class NewsFeed extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [],
            refreshing: false,
            isActiveLike: false,
            // isActiveComment: false,
            isActiveShare: false
        }
    }
    changeStatusLike = (id) => {
        this.setState({isActiveLike: !this.state.isActiveLike})
        if(this.state.isActiveLike == true) {
          this.addLike(id)
        } else {
          console.log('delete like')
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
        } catch(err) {
          throw new Error(err)
        }
    }

    actionLike(id) {
      this.addLike(id)
    }
    fetchData = async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const posts = await axios.get(Constant.rootAPI+'/posts',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data = posts.data.data.data
            this.setState({data: data})
            // console.log(this.state.data)
        } catch(err) {
            throw new Error(err)
        }
    }
    getFormatTime = (time) => {
        return  new Date(time).getDate() + "/" + 
        (new Date(time).getMonth()+1) + "/" + 
        new Date(time).getFullYear() +  " at " + 
        new Date(time).getHours() + ":" + 
        new Date(time).getMinutes()
    }
    _onRefresh = () => {
        this.setState({refreshing: true})
        this.fetchData().then(() => this.setState({refreshing: false}))
    }
    componentDidMount () {
        this.fetchData()
    }
    render() {
        // const { data } = this.state
        // const { navigation } = this.props
        return (
                    <ScrollView
                    refreshControl={
                        <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        />   
                    }>
                        {this.state.data.map((item, index) =>(
                            //  <CardComponent
                            //  key={index} 
                            //  nickname={item.user.firstname + ' '+ item.user.lastname} 
                            //  created_at={this.getFormatTime(item.created_at)}
                            //  distance={item.activity.distance}
                            //  pace={'10:10'}
                            //  duration={item.activity.duration}
                            //  content={item.content}
                            // /> 
                            <Content key={index}>
                            <Card>
                              <CardItem>
                                <Left>
                                {/* source={require('../../../assets/images/backgroundImage.jpg')} */}
                                  <Thumbnail  style={{marginRight: 10}}/>
                                  <Body>
                                    <Text style={{color: colors.black, fontWeight: 'bold'}}>{item.user.firstname + ' '+ item.user.lastname}</Text>
                                    <Text style={{color: colors.darkGray}}>{this.getFormatTime(item.created_at)}</Text>
                                  </Body>
                                  <Right>
                                    <TouchableOpacity onPress={() => alert('This is a extra function')}>
                                      <Icon name='more' />
                                    </TouchableOpacity>
                                  </Right>
                                </Left>
                              </CardItem>
                              <CardItem>
                                  <Text style={{color: colors.black}}>
                                    {item.content}
                                  </Text>
                              </CardItem>
                              <CardItem>
                                  <View style={{flex:1, flexDirection: 'row'}}>
                                    <View style={{paddingRight: 30}}>
                                      <Text style={{fontSize: 12, color: colors.darkGray}}>Distance</Text>
                                      <Text>{item.activity.distance} km</Text>
                                    </View>
                                    <View style={{paddingRight: 30}}>
                                      <Text style={{fontSize: 12, color: colors.darkGray}}>Pace</Text>
                                      <Text>10:10 min/km</Text>
                                    </View>
                                    <View style={{paddingRight: 30}}>
                                      <Text style={{fontSize: 12, color: colors.darkGray}}>Time</Text>
                                      <Text>{item.activity.duration}</Text>
                                    </View>
                                  </View>
                              </CardItem>
                              {/*  source={require('../../../assets/images/backgroundImage.jpg')} */}
                              <CardItem style={{paddingLeft:10, paddingRight:10}}>
                                  {/* <Image style={{height: metrics.DEVICE_HEIGHT*0.3, width: '100%', flex: 1}}/> */}
                              </CardItem>
                              <CardItem>
                                <Left>
                                  <TouchableOpacity 
                                  style={{flexDirection: 'row', alignItems: 'center'}} 
                                  onPress={() => this.actionLike(item.id)}
                                  onPressIn={() => console.log('123')}
                                  onPressOut={() => console.log('456')}>
                                    <Icon name="heart" size={22} color={colors.darkGray}/>
                                    <Text style={{fontSize: 11, marginLeft: 5}}>5000 Likes</Text>
                                  </TouchableOpacity>
                                </Left>
                                <Body style={{alignItems: 'flex-start'}}>
                                  <TouchableOpacity
                                  style={{flexDirection: 'row', alignItems: 'center'}} 
                                  onPress={() => this.props.navigation.navigate('ListComment',{comment_id: item.id})}>
                                    <Icon name="eye" size={22} color={this.state.isActiveComment? colors.primaryColor: colors.darkGray}/>
                                    <Text style={{fontSize: 11, marginLeft: 5}}>{item.comments.length} Comments</Text>
                                  </TouchableOpacity>
                                </Body>
                                <Right>
                                  <TouchableOpacity 
                                  style={{flexDirection: 'row', alignItems: 'center'}} 
                                  onPress={() => this.changeStatusShare()}>
                                    <Icon name="share" size={22} color={this.state.isActiveShare? colors.primaryColor: colors.darkGray}/>
                                    <Text style={{fontSize: 11, marginLeft: 5}}>156 Shares</Text>
                                  </TouchableOpacity>
                                </Right>
                              </CardItem>
                            </Card>
                          </Content>                   
                        ))}
                    </ScrollView>
        );
    }
}
export default NewsFeed;