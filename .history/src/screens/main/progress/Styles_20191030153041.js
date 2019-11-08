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
    cardItemAdd: {
        borderTopWidth: 0.5, 
        borderTopColor: '#B6B6b6'
    },
    touchableTextStyle: {
        color: colors.primaryColor, 
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    iconWeather: {
        width:30,
        height: 30, 
        marginTop: -10
    },
    formatDetailArea: {
        flexDirection: 'column',
        alignItems:'center'
    },
    detailBoldText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    addGoalContainer: {
        flex: 1
    },
    modalCalories: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
        marginVertical: metrics.DEVICE_HEIGHT*0.25
    }
})