import React, { Component } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { Card, Container, Content, CardItem, Left, Thumbnail, Right, Body }from 'native-base'
// import { Icon } from 'react-native-elements'
import Icon from 'react-native-ionicons'
import colors from '../../../constants/Color'
class AddManualEntry extends Component {
    render() {
        const title = [
            {
                id: 1,
                nameIcon: 'settings',
                text: 'Duration',
                time: '01:00:00'
            },
            {
                id: 2,
                nameIcon: 'settings',
                text: 'Distance',
                time: '0,00 km'
            },
            {
                id: 3,
                nameIcon: 'settings',
                text: 'Calories',
                time: '497 cal'
            },
            {
                id: 4,
                nameIcon: 'settings',
                text: 'Date',
                time: '09/10/2019'
            },
            {
                id: 5,
                nameIcon: 'settings',
                text: 'time',
                time: '13:52'
            }
        ]
        // const { navigation } = this.props
        return (
            <Container>
                <Content>
                    <Card style={{alignItems: 'center'}}>
                        <View style={{paddingVertical: 20}}>
                            <Image source={require('../../../assets/images/runer-silhouette-running-fast.png')}/>
                            <Text>Running</Text>
                        </View>
                    </Card>
                    <Card>
                        {title.map((data) => (
                            <TouchableOpacity key={data.id}>
                            <CardItem>
                                <Left>
                                    <Icon name="stopwatch" color={colors.primaryColor}/>
                                    <Text style={{marginLeft: 20}}>{data.text}</Text>
                                </Left>
                                <Right>
                                    <Text>{data.time}</Text>
                                </Right>
                            </CardItem>
                            </TouchableOpacity>
                        ))}
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default AddManualEntry