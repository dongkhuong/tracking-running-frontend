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
    render() {
        // const { data } = this.state
        // const { navigation } = this.props
        return (
            <Container style={styles.container}>
                <Content>
                {this.state.data.map((item) => (
                    <CardComponent 
                    nickname={item.user.firstname + ' '+ item.user.lastname} 
                    created_at={item.created_at}
                    distance={item.activity.distance}
                    pace={'10:10'}
                    duration={"s"}
                    content={'Afternoon ride'}/>
                ))}
                </Content>
            </Container>
        );
    }
}
export default NewsFeed;