import { StyleSheet }  from 'react-native'
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
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
        flexDirection: 'row',
        // marginTop: 20
        // justifyContent:'space-around'
    },
    cardItemAdd: {
        borderTopWidth: 1, 
        borderTopColor: '#B6B6b6',
        color: colors.primaryColor
    }
})