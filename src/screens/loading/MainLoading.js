import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
class MainLoading extends Component {
    constructor() {
        super()
        this.state = {
            show: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({show: false})
        }, 2000)
    }
    render() {
        return (
            <View style={{flex: 1}}>
                {this.state.show ? 
                <ActivityIndicator size="large" color="red"/>
                :
                null
                }
            </View>
        )
    }
}
export default MainLoading