import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import metrics from '../../constants/Metric'
import Geolocation from '@react-native-community/geolocation'
const ASPECT_RATIO = metrics.DEVICE_WIDTH/metrics.DEVICE_HEIGHT
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA* ASPECT_RATIO
class MapGeolocation extends Component {
    constructor(props) {
        super(props)
        // arrayMarkers = [
        //     {
        //         latitude: 15.5098319,
        //         longitude: 107.412504,
        //     }
        // ]
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
            // markers: arrayMarkers
        }
    }
    watchID = null
    componentDidMount() {
        Geolocation.getCurrentPosition((position) =>{
            let latitude = parseFloat(position.coords.latitude)
            let longitude = parseFloat(position.coords.longitude)
            let initialRegion = {
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }
            this.setState({initialPosition: initialRegion})
            this.setState({markerPosition: initialRegion})
        },(error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
        this.watchID = Geolocation.watchPosition((position) => {
            let latitude = parseFloat(position.coords.latitude)
            let longitude = parseFloat(position.coords.longitude)
            let lastRegion = {
                latitude: latitude,
                longitude: longitude,
                longitudeDelta: LONGITUDE_DELTA,
                latitudeDelta: LATITUDE_DELTA
            }
            this.setState({initialRegion: lastRegion})
            this.setState({markerPosition: lastRegion})
        })
    }
    // componentWillMount() {
    //     navigator.geolocation.clearWatch(this.watchID)
    // }
    // onRegionChange = (region) => {
    //     this.setState({ region });
    // }
    // onPress = (data) => {
    //     let latitude = data.nativeEvent.coordinate.latitude
    //     let longitude = data.nativeEvent.coordinate.longitude
    //     arrayMarkers.push({
    //         latitude: latitude,
    //         longitude: longitude
    //     })
    //     this.setState({markers: arrayMarkers})
    // }
    // renderMarkers = () => {
    //     markers = []
    //     for (marker of this.state.markers) {
    //         markers.push(
    //             <Marker
    //             title={'toi o day ' + marker.latitude}
    //             description={'day la mieu ta'}
    //             coordinate={marker}/>
    //         )
    //     }
    //     return markers
    // }
    render() {
        return (
            <MapView
            initialRegion={this.state.initialPosition}
            style={{flex: 1}}
            // onRegionChange={this.onRegionChange}
            // onPress={this.onPress}
            >
                {/* {this.renderMarkers()} */}
                <Marker
                    coordinate={this.state.markerPosition}
                />
            </MapView> 
        )
    }
}
export default MapGeolocation