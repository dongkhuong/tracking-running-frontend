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
            refreshing: false,
            countRunners: []
        }
    }
    fetchAllData = async () => {
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
        this.fetchAllData()
        this.setState({countRunners: this.props.navigation.getParam('countRunners')})
    }
    render() {
        return (
            <ScrollView>
                {this.state.groups.map((item, index) => (
                    <ListItem
                    key={index}
                    title={item.name}
                    subtitle={this.state.countRunners[item.id] ? this.state.countRunners[item.id] + ' runners . at ' + item.address : 0 + ' runner . at ' + item.address}
                    leftAvatar={{ source: { uri: item.image} }}
                    bottomDivider
                    chevron
                    onPress={() => this.props.navigation.navigate("ClubDetail",{id: item.id, countRunners: this.state.countRunners[item.id] ? this.state.countRunners[item.id]: 0})}
                    />
                ))}
            </ScrollView>
        )
    }
}
export default TabAllClubs