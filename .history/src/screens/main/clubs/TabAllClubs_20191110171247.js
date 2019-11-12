import React, { Component } from "react"
import { View, Text, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
class TabAllClubs extends Component {

    render() {
        return (
            <ScrollView>
                <ListItem
                title={'VCL Da Nang City'}
                subtitle={'179 runners , at Da Nang City'}
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