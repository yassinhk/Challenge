import { StyleSheet } from "react-native";

const mainStyle = StyleSheet.create({
    container: {
        flex:1, 
    }, 
    header: {
        marginVertical:8,
        marginHorizontal:16,
    },
    text: {
        fontSize:16, 
        fontWeight:'500', 
        color:'#616161'
    },
    button: {
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16, 
        marginHorizontal:16,
    },
    buttonText: {
        fontSize:20,
        fontWeight:'bold', 
        color:'white'
    }
})

export default mainStyle