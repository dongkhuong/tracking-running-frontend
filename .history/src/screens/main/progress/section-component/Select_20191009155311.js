import React, { Component } from "react"
import { Text, TouchableOpacity } from "react-native"
import { CardItem, Left, Right } from 'native-base'
import Icon from 'react-native-ionicons'
import colors from '../../../../constants/Color'
class Select extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { nameIcon, title, time, onPress}  = this.props
        return (
            <TouchableOpacity onPress={() => onPress}>
                <CardItem>
                    <Left>
                        <Icon name={nameIcon} color={colors.primaryColor}/>
                        <Text style={{marginLeft: 20}}>{title}</Text>
                    </Left>
                    <Right>
                        <Text>{time}</Text>
                    </Right>
                </CardItem>
            </TouchableOpacity>
        )
    }
}
export default Select