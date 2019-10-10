import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Left, Radio, ListItem, Right } from 'native-base'
import { Input } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown'
import colors from '../../../constants/Color'
import styles from './Styles'
import metrics from '../../../constants/Metric'
class EditProfile extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let data = [{
            value: 'Banana',
          }, {
            value: 'Mango',
          }, {
            value: 'Pear',
          }]
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
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{color: colors.darkGray, fontWeight: 'bold', marginRight: 20}}>MALE</Text>
                                                <Radio selected={false}/>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{color: colors.darkGray, fontWeight: 'bold', marginRight: 20}}>FEMALE</Text>
                                                <Radio selected={false}/>
                                            </View>
                                    </View>
                                </View>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Input label="EMAIL" labelStyle={{fontSize:13}} inputContainerStyle={styles.inputContainer} inputStyle={{fontSize:15}}/>
                                <Dropdown
                                label='Favorite Fruit'
                                data={data}
                                containerStyle={{paddingHorizontal:20}}
                                overlayStyle={{borderBottomColor: 'red'}}
                                />
                            </View>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default EditProfile