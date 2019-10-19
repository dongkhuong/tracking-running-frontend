import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
class MapGeolocation extends Component {
    constructor(props) {
        super(props)
        arrayMarkers = [
            {
                latitude: 15.5098319,
                longitude: 107.412504,
            }
        ]
        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
            markerPosition: {   
                latitude: 0,
                longitude: 0
            },

            markers: arrayMarkers
        }
    }
    onRegionChange = (region) => {
        this.setState({ region });
    }
    onPress = (data) => {
        let latitude = data.nativeEvent.coordinate.latitude
        let longitude = data.nativeEvent.coordinate.longitude
        arrayMarkers.push({
            latitude: latitude,
            longitude: longitude
        })
        this.setState({markers: arrayMarkers})
    }
    renderMarkers = () => {
        markers = []
        for (marker of this.state.markers) {
            markers.push(
                <Marker
                title={'toi o day ' + marker.latitude}
                description={'day la mieu ta'}
                coordinate={marker}/>
            )
        }
        return markers
    }
    render() {
        return (
            <MapView
            initialRegion={this.state.initialPosition}
            style={{flex: 1}}
            // onRegionChange={this.onRegionChange}
            // onPress={this.onPress}
            >
                {/* {this.renderMarkers()} */}
            </MapView> 
        )
    }
}
export default MapGeolocation