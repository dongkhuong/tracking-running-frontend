import React, { Component } from "react"
import { View, Text, ScrollView } from "react-native"
import { Left, Body, Right, Card, CardItem, Thumbnail} from 'native-base'
class ListComment extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <ScrollView>
                <Card>
                    <CardItem>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Thumbnail style={{marginRight:20}} small source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                            <Text style={{fontSize: 20}}>10</Text>
                            <Thumbnail style={{marginRight:20}} small source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                        </View>
                    </CardItem>
                </Card>
            </ScrollView>
        );
    }
}
export default ListComment