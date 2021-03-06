import React, { Component } from "react"
import { View, Text, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class TabAllClubs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groups: [],
            refreshing: false
        }
    }
    fetchDataPopularNearYou = async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const groups = await axios.get(Constant.rootAPI+'/groups',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data = groups.data.data
            this.setState({groups: data})   
        } catch(err) {
            throw new Error(err)
        }
    }
    componentDidMount(){
        this.fetchDataPopularNearYou()
    }
    render() {
        return (
            <ScrollView>
                {this.state.groups.map((item, index) => (
                    <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.number_runner + ' . at ' + item.address}
                    leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'} }}
                    bottomDivider
                    chevron
                    onPress={() => alert('This is a item')}
                    />
                ))}
            </ScrollView>
        )
    }
}
export default TabAllClubs