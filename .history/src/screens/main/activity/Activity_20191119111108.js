// import React, { Component } from "react"
// import { PermissionsAndroid, ActivityIndicator, View, Text, Image, TouchableOpacity, ImageBackground } from "react-native"
// import { Left, Body, Right} from 'native-base'
// import { Icon } from 'react-native-elements'
// import colors from '../../../constants/Color'
// import metrics from '../../../constants/Metric'
// import styles from './Styles'
// import MapView from 'react-native-maps'
// import { Marker, Polyline } from 'react-native-maps'
// import Geolocation from '@react-native-community/geolocation'
// const ASPECT_RATIO = metrics.DEVICE_WIDTH/metrics.DEVICE_HEIGHT
// const LATITUDE_DELTA = 0.0922
// const LONGITUDE_DELTA = LATITUDE_DELTA* ASPECT_RATIO
// class Activity extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             ready: false,
//             initialPosition: {
//                 latitude: 0,
//                 longitude: 0,
//                 latitudeDelta: 0,
//                 longitudeDelta: 0,
//             },
//             markerPosition: {   
//                 latitude: 0,
//                 longitude: 0,
//                 latitudeDelta: 0,
//                 longitudeDelta: 0,
//             },
//             positions: []
//         }
//     }
//     watchID = null
//     // componentDidMount() {
//     //     Geolocation.getCurrentPosition((position) =>{
//     //         let latitude = parseFloat(position.coords.latitude)
//     //         let longitude = parseFloat(position.coords.longitude)
//     //         let initialRegion = {
//     //             latitude: latitude,
//     //             longitude: longitude,
//     //             latitudeDelta: LATITUDE_DELTA,
//     //             longitudeDelta: LONGITUDE_DELTA
//     //         }
//     //         this.setState({initialPosition: initialRegion})
//     //         this.setState({markerPosition: initialRegion})
//     //     },(error) => alert(JSON.stringify(error)),
//     //     {enableHighAccuracy: true, timeout: 1000, maximumAge: 1000})
//     //     this.watchID = Geolocation.watchPosition((position) => {
//     //         let latitude = parseFloat(position.coords.latitude)
//     //         let longitude = parseFloat(position.coords.longitude)
//     //         let lastRegion = {
//     //             latitude: latitude,
//     //             longitude: longitude,
//     //             longitudeDelta: LONGITUDE_DELTA,
//     //             latitudeDelta: LATITUDE_DELTA
//     //         }
//     //         this.setState({initialRegion: lastRegion})
//     //         this.setState({markerPosition: lastRegion})
//     //     })
//     // }
//     async componentDidMount() {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//                 {
//                     'title': 'Tracking Running',
//                     'message': 'Tracking Running access to your location'
//                 }
//             )
//             if(granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 await Geolocation.getCurrentPosition((position) => {
//                     let latitude = parseFloat(position.coords.latitude)
//                     let longitude = parseFloat(position.coords.longitude)
//                     let initialRegion = {
//                         latitude: latitude,
//                         longitude: longitude,
//                         latitudeDelta: LATITUDE_DELTA,
//                         longitudeDelta: LONGITUDE_DELTA
//                     }
//                     this.setState({ ready: true, initialPosition: initialRegion, markerPosition: initialRegion})
//                 },(error) => alert(JSON.stringify(error)),
//                 {enableHighAccuracy: true, timeout: 20000})
//                 this.watchID = await Geolocation.watchPosition((position) => {
//                 let latitude = parseFloat(position.coords.latitude)
//                 let longitude = parseFloat(position.coords.longitude)
//                 let lastRegion = {
//                     latitude: latitude,
//                     longitude: longitude,
//                     longitudeDelta: LONGITUDE_DELTA,
//                     latitudeDelta: LATITUDE_DELTA
//                 }
//                 // let data = {
//                 //     latitude: latitude,
//                 //     longitude: longitude
//                 // }
//                 // this.setState({positions: [...this.state.positions, data]})
//                 // console.log(this.state.positions)
//                 this.setState({initialPosition: lastRegion, markerPosition: lastRegion})
//                 },{enableHighAccuracy: true, timeout: 20000})
//             } else {
//                 alert("Couldn't get your location")
//             }
//         } catch(err) {
//             console.log('err')
//         }
//     }
//     componentWillMount() {
//         Geolocation.clearWatch(this.watchID)
//     }
//     onRegionChange = (initialPosition) => {
//         this.setState({initialPosition})
//     }
//     render() {
//         const { ready,initialPosition } = this.state
//         if(!ready) {
//             return (
//                 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//                     <ActivityIndicator size='large' color={colors.primaryColor}/>
//                 </View>
//             )
//         }
//         return (
//             <View style={{flex: 1}}>
//                 <View style={{flex:1, borderBottomWidth: 1, borderBottomColor: colors.darkGray}}>
//                 <TouchableOpacity style={{height: 'auto', alignItems: 'center', paddingBottom: 20}}>
//                     <Image source={require('../../../assets/images/runer-silhouette-running-fast.png')} style={{marginTop: 10, width:50, height: 50}}/>
//                     <View  style={{alignItems: 'center', marginBottom: 5}}>
//                         <Text style={{fontSize: 25, fontWeight: 'bold'}}>0.00</Text>
//                         <Text style={{fontSize: 15}}>Distance</Text>
//                     </View>
//                     <View style={{flexDirection: 'row'}}>
//                         <Left style={{alignItems: 'center'}}>
//                             <Text style={{fontSize: 20, fontWeight: 'bold'}}>00:00</Text>
//                             <Text style={{fontSize: 12}}>Duration</Text>
//                             <Text style={{fontSize: 12}}>(mm:ss)</Text>
//                         </Left>
//                         <Body style={{alignItems: 'center'}}>
//                             <Text style={{fontSize: 20, fontWeight: 'bold'}}>0</Text>
//                             <Text style={{fontSize: 12}}>Calories</Text>
//                             <Text style={{fontSize: 12}}>(cal)</Text>
//                         </Body>
//                         <Right style={{alignItems: 'center'}}>
//                             <Text style={{fontSize: 20, fontWeight: 'bold'}}>00:00</Text>
//                             <Text style={{fontSize: 12}}>Avg. Pace</Text>
//                             <Text style={{fontSize: 12}}>(min/km)</Text>
//                         </Right>
//                     </View>
//                 </TouchableOpacity>
//                 </View>
//                 <View style={{flex: 2}}>
//                  <MapView
//                     initialRegion={this.state.initialPosition}
//                     // onRegionChange={this.onRegionChange}
//                     style={{flex: 1}}
//                     followsUserLocation
//                     showsUserLocation
//                     loadingEnabled
//                     >
//                     <Marker
//                         coordinate={this.state.initialPosition}
//                     />
//                     {/* positions.map(position => position.coords) */}
//                     <Polyline coordinates={[this.state.initialPosition,{latitude: 15.509470,longitude: 107.975212}]} strokeWidth={10} strokeColor="#f2b659"/>
             
//                     {/* <ImageBackground source={require('../../../assets/images/mapdemo.jpg')} style={{width: metrics.DEVICE_WIDTH, height: metrics.DEVICE_HEIGHT*0.5}}> */}
//                         {/* <View style={{alignItems: 'center', flex: 1}}>
//                             <View style={{flexDirection: 'row'}}>
//                                 <TouchableOpacity style={styles.circleButton}>
//                                     <Icon name="music-note" color={colors.white}/>
//                                 </TouchableOpacity>
//                                 <TouchableOpacity style={styles.ovanButton}>
//                                     <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 15,}}>START</Text>
//                                     <Text style={{color: colors.white}}>Running</Text>
//                                 </TouchableOpacity>
//                                 <TouchableOpacity style={styles.circleButton}>
//                                     <Icon name="settings" color={colors.white}/>
//                                 </TouchableOpacity>
//                             </View>
//                         </View> */}
//                         </MapView>
//                     {/* </ImageBackground>     */}
//                 </View>
//             </View>
//         );
//     }
// }
// export default Activity;

import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Platform, Image, PermissionsAndroid, TouchableHighlight } from "react-native"
import MapView, { Marker, AnimatedRegion, Polyline, PROVIDER_GOOGLE } from "react-native-maps"
import { Left, Body, Right} from 'native-base'
import haversine from "haversine"
import { Stopwatch } from 'react-native-stopwatch-timer'
import Geolocation from '@react-native-community/geolocation'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
import styles from './Styles'
const ASPECT_RATIO = metrics.DEVICE_WIDTH/metrics.DEVICE_HEIGHT
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA* ASPECT_RATIO
const LATITUDE = 16.048357
const LONGITUDE = 108.2011655

class Activity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0,
        longitudeDelta: 0
      }),
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
      duration: 0
    }
  }

  toggleTimer = () => {
    this.setState({timerStart: !this.state.timerStart, timerReset: false})
  }
 
  resetTimer = () => {
    this.setState({timerStart: false, timerReset: true})
  }
 
  toggleStopwatch = () => {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false})
  }
 
  resetStopwatch = () => {
    this.setState({stopwatchStart: false, stopwatchReset: true})
  }
  
  getFormattedTime = (time) => {
      this.currentTime = time
      console.log(this.currentTime)
  }
  componentDidMount() {
    const { coordinate } = this.state;

    this.watchID = Geolocation.watchPosition(
      position => {
        console.log(position)
        const { routeCoordinates, distanceTravelled } = this.state;
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude
        };

        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }

        this.setState({
          latitude,
          longitude,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),
          distanceTravelled:
            distanceTravelled + this.calcDistance(newCoordinate),
          prevLatLng: newCoordinate
        })
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
  }

  componentWillUnmount() {
    Geolocation.clearWatch(this.watchID)
  }

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  })

  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0
  }

  render() {
    return (
           <View style={{flex: 1}}>
              <View style={{flex:1, borderBottomWidth: 1, borderBottomColor: colors.darkGray}}>
                <TouchableOpacity style={{height: 'auto', alignItems: 'center', paddingBottom: 20}}>
                    <Image source={require('../../../assets/images/runer-silhouette-running-fast.png')} style={{marginTop: 10, width:50, height: 50}}/>
                    <View  style={{alignItems: 'center', marginBottom: 5}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>{parseFloat(this.state.distanceTravelled).toFixed(2)}</Text>
                        <Text style={{fontSize: 15}}>Distance (km)</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Left style={{alignItems: 'center'}}>
                            {/* <Text style={{fontSize: 20, fontWeight: 'bold'}}>00:00</Text> */}
                            <Stopwatch 
                              laps 
                              start={this.state.stopwatchStart}
                              reset={this.state.stopwatchReset}
                              options={options}
                              getTime={this.getFormattedTime} 
                            />
                            <Text style={{fontSize: 12}}>Duration</Text>
                            <Text style={{fontSize: 12}}>(hh:mm:ss)</Text>
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
                  <View style={styles.container}>
                    <MapView
                      style={styles.map}
                      provider={PROVIDER_GOOGLE}
                      showUserLocation
                      followUserLocation
                      loadingEnabled
                      region={this.getMapRegion()}
                    >
                      <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} strokeColor={colors.primaryColor}/>
                      <Marker.Animated
                        ref={marker => {
                          this.marker = marker;
                        }}
                        coordinate={this.state.coordinate}
                      >
                        <View style={{
                          height:30,
                          width:30,
                          borderRadius:30/2,
                          overflow: 'hidden',
                          backgroundColor: 'rgba(0, 122, 255, 0.1)',
                          borderWidth: 1,
                          borderColor: 'rgba(0, 122, 255, 0.3)',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <View style={{
                            height: 15,
                            width: 15,
                            borderWidth: 3,
                            borderColor: 'white',
                            borderRadius: 15/2,
                            overflow: 'hidden',
                            backgroundColor: colors.primaryColor
                          }}></View>
                        </View>
                      </Marker.Animated>
                    </MapView>
                    <View style={{flexDirection: 'row'}}>
                        {/* <TouchableOpacity style={styles.ovanButton} onPress={this.toggleStopwatch}>
                            <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 20,}}>START</Text>
                        </TouchableOpacity> */}
                        <View style={
                          {
                            width: metrics.DEVICE_WIDTH*0.8, 
                            alignItems: 'center', 
                            marginBottom: 20, 
                            backgroundColor: colors.primaryColor, 
                             
                            paddingVertical: 10,
                            flexDirection: 'row'
                          }
                        } onPress={this.toggleStopwatch}>
                          <TouchableOpacity style={{flex: 1, alignItems: 'center', backgroundColor: colors.red, borderRadius: metrics.DEVICE_WIDTH*0.25,}}>
                              <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 20,}}>PAUSE</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                              <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 20,}}>FINISH</Text>
                          </TouchableOpacity>
                        </View> 
                             {/* {!this.state.stopwatchStart ? 
                            <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 20,}}>START</Text> 
                            : (
                            <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 20,}}>STOP</Text>
                            )
                            } 
                            , !this.state.stopwatchStart ? null: styles.changeBackgroundStatus
                            } */}
                    </View>
                  </View>
              </View>
            </View>
    );
  }
}
const options = {
  container: {
      backgroundColor: 'transparent',
      padding: 0,
      borderRadius: 5,
      width: 100,
  },
  text: {
      fontSize: 20,
      color: '#000',
      fontWeight: 'bold',
      textAlign: 'center'
  }
}
// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: "flex-end",
//     alignItems: "center"
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject
//   },
//   bubble: {
//     flex: 1,
//     backgroundColor: "rgba(255,255,255,0.7)",
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20
//   },
//   latlng: {
//     width: 200,
//     alignItems: "stretch"
//   },
//   button: {
//     width: 80,
//     paddingHorizontal: 12,
//     alignItems: "center",
//     marginHorizontal: 10
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     marginVertical: 20,
//     backgroundColor: "transparent"
//   }
// });

export default Activity