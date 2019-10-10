import React, { Component } from "react"
import { View, Text } from "react-native"
import styles from './Styles'
import { Container, Content } from 'native-base'
import CardComponent from '../../../components/CardComponent'
class NewsFeed extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <Container style={styles.container}>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
            </Container>
        );
    }
}
export default NewsFeed;