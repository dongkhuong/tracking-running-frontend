import { StyleSheet }  from 'react-native'
import metrics from '../../../constants/Metric'
export default StyleSheet.create({
    scrollContainer: {
        flex: 1
    },
    progressImageHeader: {
        height: metrics.DEVICE_HEIGHT*0.25,
        width: metrics.DEVICE_WIDTH,
        alignItems: 'center',
        justifyContent:'center',
    }
})