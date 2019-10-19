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
            region: {
                latitude: 15.5098319,
                longitude: 107.412504,
                latitudeDelta: 0.9,
                longitudeDelta: 0.7,
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
            initialRegion={this.state.region}
            onRegionChange={this.onRegionChange}
            style={{flex: 1}}
            onPress={this.onPress}
            >
                {this.renderMarkers()}
            </MapView> 
        )
    }
}
export default MapGeolocation