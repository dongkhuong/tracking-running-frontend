import React, { Component } from "react"
import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native"
import { Left, Body, Right} from 'native-base'
import { Icon } from 'react-native-elements'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
import styles from './Styles'
class Activity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flex: 1
        }
    }
    render() {
        // const { navigation } = this.props
        return (
            <View style={{flex: 1}}>
                <View style={{flex:1, borderBottomWidth: 1, borderBottomColor: colors.darkGray}}>
                <TouchableOpacity style={{height: 'auto', alignItems: 'center', paddingBottom: 20}} onPress={() => this.setState({flex: 1.5})}>
                    <Image source={require('../../../assets/images/runer-silhouette-running-fast.png')}/>
                    <View  style={{alignItems: 'center', marginTop: 20, marginBottom: 10}}>
                        <Text style={{fontSize: 50, fontWeight: 'bold'}}>0.00</Text>
                        <Text>Distance(km)</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Left style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>00:00</Text>
                            <Text>Duration</Text>
                        </Left>
                        <Body style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>0</Text>
                            <Text>calories (cal)</Text>
                        </Body>
                        <Right style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>00:00</Text>
                            <Text>Avg. Pace (min/km)</Text>
                        </Right>
                    </View>
                </TouchableOpacity>
                </View>
                <View style={{flex: this.state.flex}}>
                    <ImageBackground source={require('../../../assets/images/mapdemo.jpg')} style={{width: metrics.DEVICE_WIDTH, height: metrics.DEVICE_HEIGHT*0.5}}>
                        <View style={{alignItems: 'center', flex: 1}}>
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
                        </View>
                    </ImageBackground>    
                </View>
            </View>
        );
    }
}
export default Activity;