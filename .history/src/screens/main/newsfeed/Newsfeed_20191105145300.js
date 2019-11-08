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
            data: null
        }
    }
   async componentDidMount () {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const posts = await axios.get(Constant.rootAPI+'/posts',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data = posts.data.data
            this.setState({data: data})
            console.log(this.state.data)
        } catch(err) {
            console.log(err)
        }
    }
    render() {
        // const { navigation } = this.props
        return (
            <Container style={styles.container}>
                <Content>
                <CardComponent 
                    nickname={'Teo Nguyen'} 
                    created_at={'14-10-1995'}
                    distance={'0.78'}
                    pace={'10:20'}
                    duration={'10:02:01'}
                    content={'Afternoon ride'}/>
                <CardComponent 
                    nickname={'Ti Thai'} 
                    created_at={'14-10-1995'}
                    distance={'0.78'}
                    pace={'10:20'}
                    duration={'10:02:01'}
                    content={'Afternoon ride'}/>
                </Content>
            </Container>
        );
    }
}
export default NewsFeed;