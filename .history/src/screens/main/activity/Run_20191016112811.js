import React, {Component} from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import { Marker, Polyline } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
class Run extends Component {
    constructor(props) {
        super(props)
        this.state = {
            positions : []
        }
    }
    listener = null
    async componentDidMount() {
        const options = { enableHighAccuracy: true, timeout: 2000, distanceFilter: 0}
        this.listener = await Geolocation.watchPosition(this.onPositionChange,options)
    }
    onPositionChange = (position) => {
        this.setState({ positions: [...this.state.positions, position]})
        console.log({position})
    }
    render() {
        const { positions } = this.state
        return (
            <View style={{flex: 1}}>
            </View>
        )
    }
}
export default Run