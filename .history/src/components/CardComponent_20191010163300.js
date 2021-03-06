import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import metrics from '../constants/Metric'
import { Content, Card, CardItem, Thumbnail, Text, Left, Body, Right } from 'native-base'
import Icon from 'react-native-ionicons'
import colors from '../constants/Color'
export default class CardComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActiveStatus: false
    }
  }
  changeColor = () => {
    this.state.isActiveStatus ? colors.primaryColor: colors.darkGray
  }
  render() {
    return (
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/logoImage.jpg')} style={{marginRight: 10}}/>
                <Body>
                  <Text style={{color: colors.black, fontWeight: 'bold'}}>NativeBase</Text>
                  <Text style={{color: colors.darkGray}}>April 15, 2016</Text>
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
                  I Love Listening Lies When I Know Truth.
                </Text>
            </CardItem>
            <CardItem style={{paddingLeft:10, paddingRight:10}}>
                <Image source={require('../assets/images/backgroundImage.jpg')} style={{height: metrics.DEVICE_HEIGHT*0.3, width: '100%', flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="heart" size={22} color={colors.darkGray}/>
                  <Text style={{fontSize: 11, marginLeft: 5}}>5000 Likes</Text>
                </TouchableOpacity>
              </Left>
              <Body style={{alignItems: 'flex-start'}}>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="eye" size={22} color={colors.darkGray}/>
                  <Text style={{fontSize: 11, marginLeft: 5}}>3000 Comments</Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="share" size={22} color={colors.darkGray}/>
                  <Text style={{fontSize: 11, marginLeft: 5}}>156 Shares</Text>
                </TouchableOpacity>
              </Right>
            </CardItem>
          </Card>
        </Content>
    )
  }
}