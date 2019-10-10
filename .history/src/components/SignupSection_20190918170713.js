import React, {Component} from 'react';
import metrics from '../constants/Metric';
import {StyleSheet, View, Text} from 'react-native';

class SignupSection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Create Account</Text>
                <Text style={styles.text}>Forgot Password?</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    width: metrics.DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
export default SignupSection