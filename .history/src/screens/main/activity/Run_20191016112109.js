import React, {Component} from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import { Marker, Polyline } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
class Run extends Component {
    constructor(props) {
        super(props)
    }
    listener = null
    async componentDidMount() {
        const options = { enableHighAccuracy: true, timeout: 2000, distanceFilter: 0}
        this.listener = await Geolocation.watchPosition(this.onPositionChange,options)
    }
    onPositionChange = (position) => {
        console.log(position)
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <MapView
                    />
            </View>
        )
    }
}
export default Run