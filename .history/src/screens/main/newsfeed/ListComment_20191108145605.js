import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Left, Body, Right, Card, CardItem, Thumbnail} from 'native-base'
import Icon from 'react-native-ionicons'
import colors from '../../../constants/Color'
class ListComment extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <ScrollView style={{flex: 1}}>
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
                <TouchableOpacity style={{position: 'absolute', borderRadius: 25, width: 50, height: 50, alignItems: 'center', justifyContent: 'center', right: 30, bottom: 30, backgroundColor: 'blue'}}>
                        <Icon name="add"/>
                    </TouchableOpacity>
            </ScrollView>
        );
    }
}
export default ListComment