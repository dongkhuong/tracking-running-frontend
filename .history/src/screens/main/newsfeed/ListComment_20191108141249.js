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
                        <Left>

                        </Left>
                        <Body>
                            <Text>1</Text>
                            <Thumbnail source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                        </Body>
                    </CardItem>
                </Card>
            </ScrollView>
        );
    }
}
export default ListComment