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
                <Thumbnail source={require('../assets/images/logoImage.jpg')} />
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
            <CardItem style={{paddingLeft:10, paddingRight:10}}>
                <Image source={require('../assets/images/backgroundImage.jpg')} style={{height: metrics.DEVICE_HEIGHT*0.3, width: '100%', flex: 1}}/>
                <Text>
                </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button onPress={() => alert('This is a github')} transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
    )
  }
}