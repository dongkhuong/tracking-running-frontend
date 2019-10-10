import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';

const horizontalMargin = 20;
const slideWidth = 280;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

export class MyCarousel extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <View style={styles.slideInnerContainer} />
            </View>
        );
    }

    render () {
        return (
            <Carousel
                data={[2,34,5]}
              renderItem={this._renderItem}
              sliderWidth={slideWidth}
              itemWidth={itemWidth}
            />
        );
    }
}
const styles = StyleSheet.create({
    slide: {
        width: itemWidth,
        height: itemHeight,
        paddingHorizontal: horizontalMargin
        // other styles for the item container
    },
    slideInnerContainer: {
        width: slideWidth,
        flex: 1
        // other styles for the inner container
    }
})
