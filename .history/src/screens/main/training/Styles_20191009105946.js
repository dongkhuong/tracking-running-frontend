import { StyleSheet }  from 'react-native'
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
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
    marginCardItem:{
        marginBottom: 1
    },
    imageBackground: {
        width: '100%',
        height:metrics.DEVICE_HEIGHT*0.25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleBig: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: fonts.fontCardLarge
    },
    titleSmall: {
        color: colors.white,
        fontSize: fonts.fontCardSmall
    },
    titleMedium: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: fonts.fontCardMedium,
        marginBottom: 20
    },
    getStartedText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 15,
    },
    getStartedButton: {
        width: metrics.DEVICE_WIDTH*0.8, 
        alignItems: 'center', 
        backgroundColor: colors.primaryColor, 
        paddingVertical: 10, 
        borderRadius: metrics.DEVICE_WIDTH*0.5
    }

})