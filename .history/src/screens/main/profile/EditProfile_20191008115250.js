import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Left } from 'native-base'
import { Input } from 'react-native-elements'
class EditProfile extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../../assets/images/logoImage.jpg')} />
                                <View style={{flexDirection: 'column', flex: 1}}>
                                    <Input label="FIRST NAME" inputContainerStyle={{height:20}} inputStyle={{fontSize:15, paddingBottom:5}}/>
                                    <Input label="LAST NAME" inputContainerStyle={{height:20}} inputStyle={{fontSize:15, paddingBottom:5}}/>
                                </View>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default EditProfile