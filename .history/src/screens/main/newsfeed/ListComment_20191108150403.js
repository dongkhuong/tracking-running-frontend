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
            <ScrollView contentContainerStyle={{height: metrics.DEVICE_HEIGHT}}>
                <Card>
                    <CardItem style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Thumbnail style={{marginRight:20}} small source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                            <Text style={{fontSize: 20, marginRight:20}}>10</Text>
                            <Thumbnail small source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                        </View>
                    </CardItem>
                    <CardItem style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Thumbnail style={{marginRight: 30}} source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}} small/>
                            <View>
                                <Text style={{color: colors.darkGray, fontSize: 12, marginBottom: 5}}>RolandThai . 21/10/1997</Text>
                                <View style={{width: '90%'}}><Text>NativeBase Toast can be used to display quick warning or error messages. For Toast to work, you need to wrap your topmost component inside from native-base.</Text>
                                </View>
                            </View>
                        </View>
                    </CardItem>
                </Card>
                <TouchableOpacity style={styles.commentCircleButton}>
                        <Icon name="keypad"/>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
export default ListComment