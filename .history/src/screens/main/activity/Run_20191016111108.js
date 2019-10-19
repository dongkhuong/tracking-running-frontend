import React, {Component} from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import { Marker, Polyline } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
class Run extends Component {
    constructor(props) {
        super(props)
    }
    async componentDidMount() {
        const options = { enableHighAccuracy: true, timeout: 2000, distanceFilter: 0}
        this.listener = await Geolocation.watchPosition(this.onPositionChange,options)
    }
    onPositionChange = () => {

    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Run</Text>
            </View>
        )
    }
}
export default Run