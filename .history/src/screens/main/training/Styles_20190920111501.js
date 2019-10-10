import { StyleSheet }  from 'react-native'
import metrics from '../../../constants/Metric'
export default StyleSheet.create({
    scrollContainer: {
        flex: 1
    },
    resetPadding: {
        paddingLeft: 0,
        paddingRight: 0, 
        paddingTop:0, 
        paddingBottom: 0
    },
    imageBackground: {
        width: '100%',
        height:metrics.DEVICE_HEIGHT*0.2,
        alignItems: 'center',
        justifyContent: 'center'
    }
    // progressImageHeader: {
    //     height: metrics.DEVICE_HEIGHT*0.3,
    //     width: metrics.DEVICE_WIDTH,
    //     alignItems: 'center',
    //     paddingTop: 20,
    //     overflow: 'scroll',
    // }
})