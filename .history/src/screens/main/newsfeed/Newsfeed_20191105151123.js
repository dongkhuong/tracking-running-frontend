import React, { Component } from "react"
import { View, Text } from "react-native"
import styles from './Styles'
import { Container, Content } from 'native-base'
import CardComponent from '../../../components/CardComponent'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class NewsFeed extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: []
        }
    }
    async componentDidMount () {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const posts = await axios.get(Constant.rootAPI+'/posts',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data = posts.data.data.data
            this.setState({data: data})
            console.log(this.state.data)
        } catch(err) {
            console.log(err)
        }
    }
    getFormatTime = (time) => {
        return new Date(time).getMonth() + " " + 
        new Date(time).getDate() + ", " + 
        new Date(time).getFullYear() +  " at" + 
        new Date(time).getHours() + ":" + 
        new Date(time).getMinutes()
    }
    render() {
        // const { data } = this.state
        // const { navigation } = this.props
        return (
            <Container style={styles.container}>
                <Content>
                {this.state.data.map((item) => (
                    <CardComponent 
                    nickname={item.user.firstname + ' '+ item.user.lastname} 
                    created_at={this.getFormatTime(item.created_at)}
                    distance={item.activity.distance}
                    pace={'10:10'}
                    duration={item.activity.duration}
                    content={'Afternoon ride'}/>
                ))}
                </Content>
            </Container>
        );
    }
}
export default NewsFeed;