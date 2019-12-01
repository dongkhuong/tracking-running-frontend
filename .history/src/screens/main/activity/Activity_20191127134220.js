import React from "react";
import { View, Text, TouchableOpacity, Platform, Image, TouchableHighlight, Alert, ToastAndroid } from "react-native"
import MapView, { Marker, AnimatedRegion, Polyline, PROVIDER_GOOGLE } from "react-native-maps"
import { Left, Body, Right} from 'native-base'
import haversine from "haversine"
import { Stopwatch } from 'react-native-stopwatch-timer'
import Geolocation from '@react-native-community/geolocation'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
import styles from './Styles'
import Icon from "react-native-ionicons"
import moment from 'moment'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { Constant } from '../../../../common'
import { StackActions, NavigationActions } from 'react-navigation'
import { PermissionsAndroid } from 'react-native'
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Activity' })],
})
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
      duration: null,
      isShowButtonStart: true,
      disableButton: true,
      isPause: false,
      isFinishActivity: false,
      isClickScreen: false,
      gender: null,
      averagePace: null,
      averageSpeed: 0,
      calories: 0,
      startTime: null,
      date: null,
      height: 0,
      weight: 0,
      age: null,
      activityId: null
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
  currentTime = null
  getFormattedTime = async (time) => {
      if(this.state.isFinishActivity === true ) {
          this.currentTime = time
      }
  }
  async finishActivity() {
    await this.setState({isFinishActivity: true})
    await this.setState({stopwatchStart: false})
    await this.setState({duration: this.currentTime})
    Alert.alert(
      'Finish',
      'Do you want to share this activity?',
      [
        {text: 'Yes', onPress: async () => {
          if(this.state.duration != null)
          {
              let time= String(this.state.duration).split(":")
              for(let i=0; i < time.length; i++) {
                 time[i] = parseInt(time[i])
              }
              let timeDecimal = (time[0]*60 + time[1] + time[2]/60)
              const startTime = moment().format('HH:mm:ss')
              const date = moment().format('YYYY-MM-DD')
              if(this.state.distanceTravelled != 0){
                let distance = parseFloat(this.state.distanceTravelled).toFixed(2)
                const averagePaceDecimal = parseFloat(timeDecimal/distance).toFixed(2)
                const averageSpeed = parseFloat(60/averagePaceDecimal)
                const averagePace = moment().startOf('day').add(averagePaceDecimal, 'hours').format('HH:mm')
                const calories = this.calcCalories(this.state.gender, this.state.age, this.state.height, this.state.weight, timeDecimal, averageSpeed)
                this.setState({averagePace: averagePace, averageSpeed: averageSpeed, calories: calories, startTime: startTime, date: date})
                await this.addActivity()
              } else {
                this.setState({averagePace: "00:00", averageSpeed: 0, distanceTravelled: 0, calories: 0, startTime: startTime, date: date})
                await this.addActivity()
              }
          }
          this.props.navigation.dispatch(resetAction)
          this.props.navigation.navigate("CreatePost", {activity_id: this.state.activityId})
        }},
        {
          text: 'No', onPress: async () => {
          if(this.state.duration != null)
          {
              let time= String(this.state.duration).split(":")
              for(let i=0; i < time.length; i++) {
                  time[i] = parseInt(time[i])
              }
              let timeDecimal = (time[0]*60 + time[1] + time[2]/60)
              const startTime = moment().format('HH:mm:ss')
              const date = moment().format('YYYY-MM-DD')
              if(this.state.distanceTravelled != 0){
                let distance = parseFloat(this.state.distanceTravelled).toFixed(2)
                const averagePaceDecimal = parseFloat(timeDecimal/distance).toFixed(2)
                const averageSpeed = parseFloat(60/averagePaceDecimal)
                const averagePace = moment().startOf('day').add(averagePaceDecimal, 'hours').format('HH:mm')
                const calories = this.calcCalories(this.state.gender, this.state.age, this.state.height, this.state.weight, timeDecimal, averageSpeed)
                this.setState({averagePace: averagePace, averageSpeed: averageSpeed, calories: calories, startTime: startTime, date: date})
                await this.addActivity()
              } else {
                this.setState({averagePace: "00:00", averageSpeed: 0, distanceTravelled: 0, calories: 0, startTime: startTime, date: date})
                await this.addActivity()
              }
          }
          this.props.navigation.dispatch(resetAction)
          this.props.navigation.navigate("Progress")
          }
          // style: 'cancel',
        },
      ],
      {cancelable: false}
      )
  }


  calcCalories = (gender, age, height, weight, duration, averageSpeed) => {
    if(gender == 1){
      BMR = (10 * weight) + (6.25 * height) - (5 * age) +5
    } else {
      BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161
    }
    let Mets = 0
    if(averageSpeed <= 6.4) Mets = 6.0
    else if(averageSpeed <= 8) Mets = 8.3
    else if(averageSpeed <= 8.4) Mets = 9
    else if(averageSpeed <= 9.7) Mets = 9.8
    else if(averageSpeed <= 10.8) Mets = 10.5
    else if(averageSpeed <= 11.3) Mets = 11
    else if(averageSpeed <= 12.1) Mets = 11.8
    else if(averageSpeed <= 13.8) Mets = 12.3
    else if(averageSpeed <= 14.5) Mets = 12.8
    else if(averageSpeed <= 16.1) Mets = 14.5
    else if(averageSpeed <= 17.7) Mets = 16.0
    else if(averageSpeed <= 19.3) Mets = 19.0
    else if(averageSpeed <= 20.9) Mets = 19.8
    else if(averageSpeed <= 22.5) Mets = 23
    else {Mets = 24}
    let durationHours = duration/60
    calories = BMR * (Mets/24) * durationHours
    return calories
  }
  addActivity  = async () => {
    try{
      const asyncStorage = await AsyncStorage.getItem("token")
      const activity = await axios.post(Constant.rootAPI+'/activities',
      {
          distance: this.state.distanceTravelled,
          duration: this.state.duration,
          calories: this.state.calories,
          average_pace: this.state.averagePace,
          average_speed: this.state.averageSpeed,
          start_time:  this.state.startTime,
          date: this.state.date
      },
      {headers: {'Authorization': `Bearer ${asyncStorage}`}})
  
      if(activity.data.business_code == 1) {
          ToastAndroid.show("Add activity successfully!", ToastAndroid.SHORT)
          this.setState({activityId: activity.data.data.id})
      } else {
          throw new Error("Failed to add activity!")
      }
      
      } catch (err) {
          throw new Error(err)
      }
  }

  async componentDidMount() {
    const { coordinate } = this.state;
    try {
      const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
      if(granted) {
        this.watchID = await Geolocation.watchPosition(
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
        )
        const asyncStorage = await AsyncStorage.getItem("token")
        if(asyncStorage) {
            await axios.get(Constant.rootAPI+'/users/profile',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            .then(({data}) => {
              let age = moment().diff(moment(data.data.birthday, 'YYYYMMDD'), 'years')
              this.setState({height: data.data.height, weight: data.data.weight, gender: data.data.gender, age: age})
            })
            .catch(err => console.log(err))
        }
      } else {console.log("Location permission denied")}
    } catch(err) {
      console.warn(err)
    }
    // this.watchID = await Geolocation.watchPosition(
    //   position => {
    //     console.log(position)
    //     const { routeCoordinates, distanceTravelled } = this.state;
    //     const { latitude, longitude } = position.coords;

    //     const newCoordinate = {
    //       latitude,
    //       longitude
    //     };

    //     if (Platform.OS === "android") {
    //       if (this.marker) {
    //         this.marker._component.animateMarkerToCoordinate(
    //           newCoordinate,
    //           500
    //         );
    //       }
    //     } else {
    //       coordinate.timing(newCoordinate).start();
    //     }

    //     this.setState({
    //       latitude,
    //       longitude,
    //       routeCoordinates: routeCoordinates.concat([newCoordinate]),
    //       distanceTravelled:
    //         distanceTravelled + this.calcDistance(newCoordinate),
    //       prevLatLng: newCoordinate
    //     })
    //   },
    //   error => console.log(error),
    //   {
    //     enableHighAccuracy: false,
    //     timeout: 20000,
    //     maximumAge: 1000,
    //     distanceFilter: 10
    //   }
    // )
    // const asyncStorage = await AsyncStorage.getItem("token")
    // if(asyncStorage) {
    //     await axios.get(Constant.rootAPI+'/users/profile',
    //     {headers: {'Authorization': `Bearer ${asyncStorage}`}})
    //     .then(({data}) => {
    //       let age = moment().diff(moment(data.data.birthday, 'YYYYMMDD'), 'years')
    //       this.setState({height: data.data.height, weight: data.data.weight, gender: data.data.gender, age: age})
    //     })
    //     .catch(err => console.log(err))
    // }
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
              <View style={{flex:1, borderBottomWidth: 1, borderBottomColor: colors.gray, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => this.setState({isClickScreen: !this.state.isClickScreen})} style={{height: 'auto', alignItems: 'center', paddingBottom: 20}}>
                    {/* {this.state.isClickScreen === false ? (
                    <View style={{alignItems: 'center'}}>
                      <Image source={require('../../../assets/images/runer-silhouette-running-fast.png')} style={{marginTop: 10, width:50, height: 50}}/>
                      <View  style={{alignItems: 'center', marginBottom: 5}}>
                          <Text style={{fontSize: 25, fontWeight: 'bold'}}>{parseFloat(this.state.distanceTravelled).toFixed(2)}</Text>
                          <Text style={{fontSize: 15}}>Distance (km)</Text>
                      </View>
                    </View> 
                     ): (
                      <View style={{alignItems: 'center'}}>
                        <Image source={require('../../../assets/images/runer-silhouette-running-fast.png')} style={{marginTop: 5, width:40, height: 40}}/>
                      </View> 
                     )
                    }  */}
                    <View style={{flexDirection: 'row'}}>
                        <Left style={{alignItems: 'center'}}>
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
                          <Image source={require('../../../assets/images/runer-silhouette-running-fast.png')} style={{width:40, height: 40}}/>
                        </Body>
                        <Right style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{parseFloat(this.state.distanceTravelled).toFixed(2)}</Text>
                            <Text style={{fontSize: 12}}>Distance</Text>
                            <Text style={{fontSize: 12}}>(km)</Text>
                        </Right>
                    </View>
                </TouchableOpacity>
              </View>
              <View style={{flex:4}}>
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
                        {/* <View style={{
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
                        </View> */}
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
                            (<TouchableOpacity disabled={this.state.disableButton} onPress={this.toggleStopwatch} style={{flex: 1, alignItems: 'center', backgroundColor: this.state.disableButton ? (colors.darkGray):(colors.green), borderRadius: metrics.DEVICE_WIDTH*0.25, paddingVertical: 5}}>
                              <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 18}}>RESUME</Text>
                           </TouchableOpacity>) :
                            (
                            <TouchableOpacity disabled={this.state.disableButton} onPress={this.toggleStopwatch} style={{flex: 1, alignItems: 'center', backgroundColor: this.state.disableButton ? (colors.darkGray):(colors.yellow), borderRadius: metrics.DEVICE_WIDTH*0.25, paddingVertical: 5}}>
                              <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 18}}>PAUSE</Text>
                            </TouchableOpacity>
                            )
                          }
                              <TouchableOpacity 
                                onPress={() => this.finishActivity()} 
                                disabled={this.state.disableButton} 
                                style={{flex: 1, alignItems: 'center', backgroundColor: this.state.disableButton ? (colors.darkGray):(colors.red), borderRadius: metrics.DEVICE_WIDTH*0.25, paddingVertical: 5}}>
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