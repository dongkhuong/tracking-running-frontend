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
            // <MapView
            // region={this.state.region}
            // onRegionChange={this.onRegionChange}
            // style={{position: 'absolute',
            // top: 0,
            // left: 0,
            // right: 0,
            // bottom: 0,}}
            // showsUserLocation={true}
            // >
            // </MapView>
            <MapView        style={{flex: 1}}        region={{          latitude: 42.882004,          longitude: 74.582748,          latitudeDelta: 0.0922,          longitudeDelta: 0.0421        }}        showsUserLocation={true}      />    );
        )
    }
}
export default MapGeolocation