import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Left, Body, Right, Card, CardItem, Thumbnail} from 'native-base'
import Icon from 'react-native-ionicons'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
import styles from './Styles'
class ListComment extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <View style={{flex: 1}}>
            <ScrollView>
                <Card>
                    <CardItem style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Thumbnail style={{marginRight:20}} small source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                            <Text style={{fontSize: 20, marginRight:20}}>10</Text>
                            <Thumbnail small source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                        </View>
                    </CardItem>

                </Card>
            </ScrollView>
                <TouchableOpacity style={styles.commentCircleButton}>
                            <Icon name="keypad" color={colors.white}/>
                </TouchableOpacity>
            </View>
        );
    }
}
export default ListComment