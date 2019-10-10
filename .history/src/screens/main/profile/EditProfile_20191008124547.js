import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Left, Radio, ListItem, Right } from 'native-base'
import { Input } from 'react-native-elements'
import styles from './Styles'
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
                                    <Input label="FIRST NAME" labelStyle={{fontSize:13}} inputContainerStyle={styles.inputContainer} inputStyle={{fontSize:15}}/>
                                    <Input label="LAST NAME" labelStyle={{fontSize:13}} inputContainerStyle={styles.inputContainer} inputStyle={{fontSize:15}}/>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                            <View>
                                                <Text style={{color: '#96939E'}}>MALE</Text>
                                                <Radio selected={false}/>
                                            </View>
                                            <View>
                                                <Text>FEMALE</Text>
                                                <Radio selected={false}/>
                                            </View>
                                    </View>
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