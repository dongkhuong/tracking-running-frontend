import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel';

export class MyCarousel extends Component {

    _renderItem ({item, index}) {
        return (
            <View>
                <Text >av</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              renderItem={this._renderItem}
              sliderWidth={500}
              itemWidth={200}
            />
        );
    }
}