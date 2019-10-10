import React, { Component } from "react"
import { Text, TouchableOpacity } from "react-native"
import { CardItem, Left, Right } from 'native-base'
import Icon from 'react-native-ionicons'
import colors from '../../../../constants/Color'
class Select extends Component {
    render() {
        return (
            <TouchableOpacity>
                <CardItem>
                    <Left>
                        <Icon name="stopwatch" color={colors.primaryColor}/>
                        <Text style={{marginLeft: 20}}>Duration</Text>
                    </Left>
                    <Right>
                        <Text>01:00:00</Text>
                    </Right>
                </CardItem>
            </TouchableOpacity>
        )
    }
}
export default Select