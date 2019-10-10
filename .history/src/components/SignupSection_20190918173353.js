import React, {Component} from 'react';
import metrics from '../constants/Metric';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

class SignupSection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text style={styles.text}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    // alignItems: 'f',
    marginTop: 20,
    width: metrics.DEVICE_WIDTH,
    flexDirection: 'row',
    // justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
export default SignupSection