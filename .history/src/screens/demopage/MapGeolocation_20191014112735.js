import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
class MapGeolocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 15.5098319,
                longitude: 107.412504,
                latitudeDelta: 0.9,
                longitudeDelta: 0.7,
            },
        }
    }
    onRegionChange = (region) => {
        this.setState({ region });
    }
    render() {
        return (
            <MapView
            initialRegion={this.state.region}
            onRegionChange={this.onRegionChange}
            style={{flex: 1}}
            liteMode={true}
            >
                <Marker coordinate={this.state.region}/>
            </MapView> 
        )
    }
}
export default MapGeolocation