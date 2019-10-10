import React, { Component } from "react"
import { View, Text } from "react-native"
import { SearchBar } from 'react-native-elements'
class SearchFriend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }
    updateSearch = search => {
        this.setState({ search });
    }    
    render() {
        // const { navigation } = this.props
        const { search } = this.state
        return (
            <SearchBar
            platform="android"
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
            showLoading={true}
            />
        );
    }
}
export default SearchFriend;