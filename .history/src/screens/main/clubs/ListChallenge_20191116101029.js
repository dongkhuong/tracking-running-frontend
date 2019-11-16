import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, Image, ToastAndroid, RefreshControl, Alert } from 'react-native'
import { Thumbnail } from 'native-base'
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
import Icon from 'react-native-ionicons'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './Styles'
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper'
import { ListItem } from 'react-native-elements'
class ListChallenge extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#E7EAED'}}> 
                <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 10}}>YOUR ACTIVE CHALLENGES</Text>
                <View style={{backgroundColor: colors.white}}>
                    <ListItem
                        leftElement={<Image style={{width: 80, height: 80}} source={{uri: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'}}/>}
                        titleStyle={{fontSize: 13 }}
                        title={"November Half Marathon Challenge"}
                        subtitle={
                        <View style={{marginTop: 5}}>
                            <Text style={{fontSize: 11, color: colors.darkGray}}>14 Day Left</Text>
                        </View>}
                    />
                </View>
            </ScrollView>
        )
    }
}
export default ListChallenge