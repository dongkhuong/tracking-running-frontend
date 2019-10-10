import React, { Component } from 'react'
import { Image } from 'react-native'
import metrics from '../constants/Metric'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class CardComponent extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card >
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/logoImage.jpg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{paddingLeft:10, paddingRight:10}}>
              <Body>
                <Image source={require('../assets/images/backgroundImage.jpg')} style={{height: metrics.DEVICE_WIDTH, width: '100%', flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}