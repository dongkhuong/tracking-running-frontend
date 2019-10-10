import { StyleSheet }  from 'react-native'
import metrics from '../../../constants/Metric'
export default StyleSheet.create({
    scrollContainer: {
        flex: 1
    },
    progressImageHeader: {
        height: metrics.DEVICE_HEIGHT*0.3,
        width: metrics.DEVICE_WIDTH,
        alignItems: 'center',
        paddingTop: 20,
        overflow: 'scroll',
    },
    textSignupSection: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    signupSection: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around'
    }
})