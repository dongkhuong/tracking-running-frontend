import React, { Component } from "react"
import { PermissionsAndroid, ActivityIndicator, View, Text, Image, TouchableOpacity, ImageBackground } from "react-native"
import { Left, Body, Right} from 'native-base'
import { Icon } from 'react-native-elements'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
import styles from './Styles'
import MapView from 'react-native-maps'
import { Marker, Polyline } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
const ASPECT_RATIO = metrics.DEVICE_WIDTH/metrics.DEVICE_HEIGHT
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA* ASPECT_RATIO
class Activity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ready: false,
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
            // positions: []
        }
    }
    // watchID = null
    // componentWillMount() {
    //     Geolocation.clearWatch(this.watchID)
    // }
    // componentDidMount() {
    //     Geolocation.getCurrentPosition((position) =>{
    //         let latitude = parseFloat(position.coords.latitude)
    //         let longitude = parseFloat(position.coords.longitude)
    //         let initialRegion = {
    //             latitude: latitude,
    //             longitude: longitude,
    //             latitudeDelta: LATITUDE_DELTA,
    //             longitudeDelta: LONGITUDE_DELTA
    //         }
    //         this.setState({initialPosition: initialRegion})
    //         this.setState({markerPosition: initialRegion})
    //     },(error) => alert(JSON.stringify(error)),
    //     {enableHighAccuracy: true, timeout: 1000, maximumAge: 1000})
    //     this.watchID = Geolocation.watchPosition((position) => {
    //         let latitude = parseFloat(position.coords.latitude)
    //         let longitude = parseFloat(position.coords.longitude)
    //         let lastRegion = {
    //             latitude: latitude,
    //             longitude: longitude,
    //             longitudeDelta: LONGITUDE_DELTA,
    //             latitudeDelta: LATITUDE_DELTA
    //         }
    //         this.setState({initialRegion: lastRegion})
    //         this.setState({markerPosition: lastRegion})
    //     })
    // }
    async componentDidMount() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Tracking Running',
                    'message': 'Tracking Running access to your location'
                }
            )
            if(granted === PermissionsAndroid.RESULTS.GRANTED) {
                await Geolocation.getCurrentPosition((position) => {
                    let latitude = parseFloat(position.coords.latitude)
                    let longitude = parseFloat(position.coords.longitude)
                    let initialRegion = {
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA
                    }
                    this.setState({ ready: true, initialPosition: initialRegion, markerPosition: initialRegion})
                },(error) => alert(JSON.stringify(error)),
                {enableHighAccuracy: true, timeout: 1000, maximumAge: 2000})
            } else {
                alert("Couldn't get your location")
            }
        } catch(err) {
            console.log('err')
        }
    }
    // onRegionChange = (initialPosition) => {
    //     this.setState({initialPosition})
    // }
    render() {
        const { ready, latitude, longitude } = this.state
        if(!ready) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size='large' color={colors.primaryColor}/>
                </View>
            )
        }
        return (
            <View style={{flex: 1}}>
                <View style={{flex:1, borderBottomWidth: 1, borderBottomColor: colors.darkGray}}>
                <TouchableOpacity style={{height: 'auto', alignItems: 'center', paddingBottom: 20}}>
                    <Image source={require('../../../assets/images/runer-silhouette-running-fast.png')} style={{marginTop: 10, width:50, height: 50}}/>
                    <View  style={{alignItems: 'center', marginBottom: 5}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>0.00</Text>
                        <Text style={{fontSize: 15}}>Distance</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Left style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>00:00</Text>
                            <Text style={{fontSize: 12}}>Duration</Text>
                            <Text style={{fontSize: 12}}>(mm:ss)</Text>
                        </Left>
                        <Body style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>0</Text>
                            <Text style={{fontSize: 12}}>Calories</Text>
                            <Text style={{fontSize: 12}}>(cal)</Text>
                        </Body>
                        <Right style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>00:00</Text>
                            <Text style={{fontSize: 12}}>Avg. Pace</Text>
                            <Text style={{fontSize: 12}}>(min/km)</Text>
                        </Right>
                    </View>
                </TouchableOpacity>
                </View>
                <View style={{flex: 2}}>
                 <MapView
                    initialRegion={this.state.initialPosition}
                    style={{flex: 1}}
                    followsUserLocation
                    showsUserLocation
                    loadingEnabled
                    >
                    <Marker
                        coordinate={this.state.markerPosition}
                    />
                    {/* <Polyline/> */}
             
                    {/* <ImageBackground source={require('../../../assets/images/mapdemo.jpg')} style={{width: metrics.DEVICE_WIDTH, height: metrics.DEVICE_HEIGHT*0.5}}> */}
                        {/* <View style={{alignItems: 'center', flex: 1}}>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={styles.circleButton}>
                                    <Icon name="music-note" color={colors.white}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.ovanButton}>
                                    <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 15,}}>START</Text>
                                    <Text style={{color: colors.white}}>Running</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.circleButton}>
                                    <Icon name="settings" color={colors.white}/>
                                </TouchableOpacity>
                            </View>
                        </View> */}
                        </MapView>
                    {/* </ImageBackground>     */}
                </View>
            </View>
        );
    }
}
export default Activity;