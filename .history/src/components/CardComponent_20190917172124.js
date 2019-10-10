import React, { Component } from "react"
import { Text, StyleSheet, Image } from "react-native"
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
class CardComponent extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/images/run1.png')} />
                        <Body>
                            <Text>DongKhuongIT</Text>
                            <Text note>Jan 15, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem style={{paddingLeft: 0, paddingRight: 0}}>
                    <Image source={require('../assets/images/run3.jpg')} style={{height: metrics.DEVICE_HEIGHT*0.3, width: null, flex: 1}}/>
                </CardItem>
                <CardItem style={{height: metrics.DEVICE_HEIGHT*0.05}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-share" style={{ color: 'black' }} />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                        It is a long established fact that a reade
                        r will be distracted by the readable content 
                        of a page when looking at its layout. The poin
                        t of using Lorem Ipsum is that it has a more-or-le
                        ss normal distribution of letters, as opposed to using 
                        'Content here, content here', making it look like readable E
                        nglish. Many desktop publishing packages and web page edit
                        ors now use Lorem Ipsum as their default model text, and a sea
                        rch for 'lorem ipsum' will uncover many web sites still in the
                        ir infancy. Various versions have evolved over the years
                        , sometimes by accident, sometimes on purpose (injected humour and the like).
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent