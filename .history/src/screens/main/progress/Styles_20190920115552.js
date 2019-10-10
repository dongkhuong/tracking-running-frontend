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
        flex: 1,
        width: '100%',
        height:metrics.DEVICE_HEIGHT*0.25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonInCard: {
        // flexDirection: 'row',
        justifyContent:'space-around'
    }
})