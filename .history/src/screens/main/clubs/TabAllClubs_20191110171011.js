import React, { Component } from "react"
import { View, Text, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
class TabAllClubs extends Component {

    render() {
        return (
            <ScrollView>
                <ListItem
                title={'Amy Farha'}
                subtitle={'Vice President'}
                leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'} }}
                bottomDivider
                chevron
                onPress={() => alert('This is a item')}
            />
            </ScrollView>
        )
    }
}
export default TabAllClubs