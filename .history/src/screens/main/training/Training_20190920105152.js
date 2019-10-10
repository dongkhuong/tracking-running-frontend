import React, { Component } from "react"
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native"
// import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card, CardItem, Body, Header, Left, Thumbnail, Container } from 'native-base'
import styles from './Styles'
import TextPage from "../../../components/TextPage"
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
class Training extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <ScrollView style={styles.scrollContainer}>
                </ScrollView>
            </Container>
        )
    }
}
export default Training;