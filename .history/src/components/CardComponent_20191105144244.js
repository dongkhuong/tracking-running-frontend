import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import metrics from '../constants/Metric'
import { Content, Card, CardItem, Thumbnail, Text, Left, Body, Right } from 'native-base'
import Icon from 'react-native-ionicons'
import colors from '../constants/Color'
export default class CardComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActiveLike: false,
      isActiveComment: false,
      isActiveShare: false
    }
  }
  changeStatusLike = () => {
    this.setState({isActiveLike: !this.state.isActiveLike})
  }
  changeStatusComment = () => {
    this.setState({isActiveComment: !this.state.isActiveComment})
  }
  changeStatusShare = () => {
    this.setState({isActiveShare: !this.state.isActiveShare})
  }
  render() {
    const { nickname, created_at } = this.props
    return (
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/logoImage.jpg')} style={{marginRight: 10}}/>
                <Body>
                  <Text style={{color: colors.black, fontWeight: 'bold'}}>{nickname}</Text>
                  <Text style={{color: colors.darkGray}}>{created_at}</Text>
                </Body>
                <Right>
                  <TouchableOpacity onPress={() => alert('This is a extra function')}>
                    <Icon name='more' />
                  </TouchableOpacity>
                </Right>
              </Left>
            </CardItem>
            <CardItem>
                <Text style={{color: colors.darkGray}}>
                  I Love Listening Lies When I Kno Truth.đâsdasdasdasdasdasdas
                </Text>
            </CardItem>
            <CardItem>
                <View style={{flex:1, flexDirection: 'row'}}>
                  <View style={{paddingRight: 30}}>
                    <Text style={{fontSize: 12, color: colors.darkGray}}>Distance</Text>
                    <Text>0.36 km</Text>
                  </View>
                  <View style={{paddingRight: 30}}>
                    <Text style={{fontSize: 12, color: colors.darkGray}}>Pace</Text>
                    <Text>55:51 /km</Text>
                  </View>
                  <View style={{paddingRight: 30}}>
                    <Text style={{fontSize: 12, color: colors.darkGray}}>Time</Text>
                    <Text>20m 28s</Text>
                  </View>
                </View>
            </CardItem>
            <CardItem style={{paddingLeft:10, paddingRight:10}}>
                <Image source={require('../assets/images/backgroundImage.jpg')} style={{height: metrics.DEVICE_HEIGHT*0.3, width: '100%', flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <TouchableOpacity 
                style={{flexDirection: 'row', alignItems: 'center'}} 
                onPress={() => this.changeStatusLike()}>
                  <Icon name="heart" size={22} color={this.state.isActiveLike? colors.primaryColor: colors.darkGray}/>
                  <Text style={{fontSize: 11, marginLeft: 5}}>5000 Likes</Text>
                </TouchableOpacity>
              </Left>
              <Body style={{alignItems: 'flex-start'}}>
                <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}} 
                onPress={() => this.changeStatusComment()}>
                  <Icon name="eye" size={22} color={this.state.isActiveComment? colors.primaryColor: colors.darkGray}/>
                  <Text style={{fontSize: 11, marginLeft: 5}}>3000 Comments</Text>
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
    )
  }
}