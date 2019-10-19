import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
class MapGeolocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        }
    }
    onRegionChange(region) {
        this.setState({ region });
    }
    render() {
        return (
            <MapView
            initialRegion={this.state.region}
            onRegionChange={this.onRegionChange}
            rotateEnabled={false}
            style={{position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            flex: 1,}}
            showsCompass={true}
            showsUserLocation={true}
            >
            </MapView> 
        )
    }
}
export default MapGeolocation