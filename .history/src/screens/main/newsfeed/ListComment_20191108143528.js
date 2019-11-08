import React, { Component } from "react"
import { View, Text, ScrollView } from "react-native"
import { Left, Body, Right, Card, CardItem, Thumbnail} from 'native-base'
import colors from '../../../constants/Color'
class ListComment extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <Card>
                    <CardItem>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Thumbnail style={{marginRight:20}} small source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                            <Text style={{fontSize: 20, marginRight:20}}>10</Text>
                            <Thumbnail small source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                        </View>
                    </CardItem>
                    <CardItem style={{marginRight:10, borderBottomWidth: 1}}>
                        <View style={{flexDirection: 'row', flex: 1, }}>
                            <Thumbnail style={{marginRight: 30}} source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}} small/>
                            <View style={{}}>
                                <Text style={{color: colors.darkGray, fontSize: 12}}>RolandThai . 21/10/1997</Text>
                                <View style={{}}><Text style={{backgroundColor: 'red', width: '90%'}}>NativeBase Toast can be used to display quick warning or error messages. For Toast to work, you need to wrap your topmost component inside from native-base.</Text>
                                </View>
                            </View>
                        </View>
                    </CardItem>
                </Card>
            </ScrollView>
        );
    }
}
export default ListComment