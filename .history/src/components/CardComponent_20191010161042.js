import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import metrics from '../constants/Metric'
import { Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardComponent extends Component {
  render() {
    return (
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/logoImage.jpg')} style={{marginRight: 10}}/>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
                <Right>
                  <TouchableOpacity onPress={() => alert('This is a extra function')}>
                    <Icon name='ios-more' />
                  </TouchableOpacity>
                </Right>
              </Left>
            </CardItem>
            <CardItem>
                <Text>
                  I Love Listening Lies When I Know Truth.
                </Text>
            </CardItem>
            <CardItem style={{paddingLeft:10, paddingRight:10}}>
                <Image source={require('../assets/images/backgroundImage.jpg')} style={{height: metrics.DEVICE_HEIGHT*0.3, width: '100%', flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              </Left>
              <Body>

              </Body>
              <Right>
                
              </Right>
            </CardItem>
          </Card>
        </Content>
    )
  }
}