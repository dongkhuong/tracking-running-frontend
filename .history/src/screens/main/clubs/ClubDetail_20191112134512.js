import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
import Icon from 'react-native-ionicons'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Thumbnail } from 'native-base'
class ClubDetail extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: '#E7EAED'}}>
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/backgroundImage.jpg')} style={{height: '100%', width: '100%'}}/>
                    </TouchableOpacity>
               </View>
               <View style={{height: metrics.DEVICE_HEIGHT*0.4, alignItems: 'center', backgroundColor: colors.white}}>
                    <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>SACOMBANK KV.BTB Runners Club</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                        <Icon name={'pin'} style={{marginRight: 10}} color={colors.darkGray}/><Text style={{color: colors.darkGray}}>Da Nang</Text>
                    </View>
                    <View style={{width: metrics.DEVICE_WIDTH*0.7}}>
                        <Text style={{textAlign: 'center'}}>
                        Contrary to popular belief, Lorem Ipsum is not simply College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1, borderBottomWidth: 1, borderColor: colors.darkGray, justifyContent: 'flex-end', alignItems:'flex-end', paddingBottom: 10}}>
                   <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{textAlign: 'center'}}>144</Text>
                            <Text style={{textAlign: 'center', fontSize: 12, color: colors.darkGray}}>RUNNERS</Text>
                        </View>
                   </TouchableOpacity>
                   <TouchableOpacity style={{flex: 1}}>
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <Text style={{textAlign: 'center'}}>3</Text>
                            <Text style={{textAlign: 'center', fontSize: 12, color: colors.darkGray}}>POSTS</Text>
                        </View>
                   </TouchableOpacity>
               </View>
               </View>
               <Text style={{paddingVertical: 5, paddingLeft: 10, fontWeight: 'bold'}}>POSTS</Text>
               <View>
                   <View>

                   </View>
               </View>
            </ScrollView>
        )
    }
}
export default ClubDetail