import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import metrics from '../constants/Metric'
import { Content, Card, CardItem, Thumbnail, Text, Left, Body, Right } from 'native-base'
import Icon from 'react-native-ionicons'
import colors from '../constants/Color'
export default class CardComponent extends Component {
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
                <TouchableOpacity>
                  <Icon name="heart" size={25}/>
                </TouchableOpacity>
              </Left>
              <Body style={{alignItems: 'center'}}>
                <TouchableOpacity>
                  <Icon name="eye"/>
                </TouchableOpacity>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="share"/>
                </TouchableOpacity>
              </Right>
            </CardItem>
          </Card>
        </Content>
    )
  }
}