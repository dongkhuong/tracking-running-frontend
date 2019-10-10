import React, { Component } from "react"
import { Text } from "react-native"
import { CardItem, Left, Right } from 'native-base'
import Icon from 'react-native-ionicons'
import colors from '../../../../constants/Color'
class Select extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { nameIcon, title, time}  = this.props
        return (
            <CardItem>
                <Left>
                    <Icon name={nameIcon} color={colors.primaryColor}/>
                    <Text style={{marginLeft: 20}}>{title}</Text>
                </Left>
                <Right>
                    <Text>{time}</Text>
                </Right>
            </CardItem>
        )
    }
}
export default Select