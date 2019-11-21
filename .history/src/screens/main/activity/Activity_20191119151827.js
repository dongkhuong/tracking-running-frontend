import React from "react";
import { View, Text, TouchableOpacity, Platform, Image, TouchableHighlight } from "react-native"
import MapView, { Marker, AnimatedRegion, Polyline, PROVIDER_GOOGLE } from "react-native-maps"
import { Left, Body, Right} from 'native-base'
import haversine from "haversine"
import { Stopwatch } from 'react-native-stopwatch-timer'
import Geolocation from '@react-native-community/geolocation'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
import styles from './Styles'
import Icon from "react-native-ionicons";
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
      duration: 0,
      isShowButtonStart: true,
      disableButton: true
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

  actionChangeButton = () => {
    this.setState({isShowButtonStart: false})
    this.toggleStopwatch()
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
                    <View style={{flexDirection: 'row', width: metrics.DEVICE_WIDTH, justifyContent: 'center' }}>
                        {
                        this.state.isShowButtonStart ? 
                        <View
                          style={{
                            width: metrics.DEVICE_WIDTH*0.8, 
                            alignItems: 'center',
                            justifyContent: 'center', 
                            marginBottom: 20, 
                            backgroundColor: 'transparent', 
                            flexDirection: 'row'
                          }}>  
                          <TouchableOpacity onPress={this.actionChangeButton} style={{flex: 1, alignItems: 'center', backgroundColor: colors.primaryColor, borderRadius: metrics.DEVICE_WIDTH*0.25, paddingVertical: 5}}>
                            <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 18}}>START</Text>
                          </TouchableOpacity> 
                        </View>
                        :
                        (
                          <View style={{
                            width: metrics.DEVICE_WIDTH*0.8, 
                            alignItems: 'center',
                            justifyContent: 'center', 
                            marginBottom: 20, 
                            backgroundColor: 'transparent', 
                            flexDirection: 'row'
                          }}>           
                          {
                            !this.state.stopwatchStart ? 
                            <TouchableOpacity disabled={this.state.disableButton} onPress={this.toggleStopwatch} style={{flex: 1, alignItems: 'center', backgroundColor: this.state.disableButton ? (colors.darkGray):(colors.green), borderRadius: metrics.DEVICE_WIDTH*0.25, paddingVertical: 5}}>
                              <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 18}}>RESUME</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity disabled={this.state.disableButton} onPress={this.toggleStopwatch} style={{flex: 1, alignItems: 'center', backgroundColor: this.state.disableButton ? (colors.darkGray):(colors.yellow), borderRadius: metrics.DEVICE_WIDTH*0.25, paddingVertical: 5}}>
                              <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 18}}>PAUSE</Text>
                            </TouchableOpacity>
                          }
                              <TouchableOpacity disabled={this.state.disableButton} style={{flex: 1, alignItems: 'center', backgroundColor: this.state.disableButton ? (colors.darkGray):(colors.red), borderRadius: metrics.DEVICE_WIDTH*0.25, paddingVertical: 5}}>
                                  <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 18}}>FINISH</Text>
                              </TouchableOpacity>  
                            </View> 
                        )
                        }
                        {
                          !this.state.isShowButtonStart ? 
                          <TouchableHighlight onPress={() => this.setState({disableButton: !this.state.disableButton})} style={{width: 40, height: 40, borderRadius: 20, backgroundColor: this.state.disableButton ? (colors.primaryColor):(colors.white), position: 'absolute', bottom: 18, justifyContent: 'center', alignItems: 'center'}}>
                              {
                              this.state.disableButton ? 
                              <Icon name="lock" color={colors.white}/>
                              :
                              <Icon name="unlock" color={colors.darkGray}/>
                              }   
                          </TouchableHighlight>
                          : null
                        }                            
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
export default Activity