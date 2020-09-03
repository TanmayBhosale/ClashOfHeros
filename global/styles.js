import React from "react";
import {StyleSheet, Dimensions} from "react-native"

const globalStyles =StyleSheet.create({
    mainBackground:{
        backgroundColor: "#5e5e5d",
        flexDirection:"column",
        flex:1,
    },
    startButton:{
        width: 120,
        height: 60,
        justifyContent:"center",
        alignContent:"center",
    },
    startButtonText:{
        fontSize:20,
        textAlign:"center",
        color:"white"

    },
    buttonText:{
        color:"white"
    },
    textColor:{
        color:"white",
    },
    button:{
        backgroundColor: "#027ce0",
        borderRadius: 20,
        // borderColor:"#0fff7f",
        // borderWidth: 2,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    brandLogo:{
        width:200,
        height: 200,
    },
    heroImage:{
        height:"100%",
        width:"100%",
        borderRadius:10
    },
    cardModal:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
    },
    cardHolder:{
        width:"100%",
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center",
        // backgroundColor:"white"
    },
    displayCard:{
        backgroundColor:"#2f3030",
        height:150,
        width: Dimensions.get("screen").width,
        borderRadius:10,
        flexDirection:"row",
        padding:5,
        marginBottom:10
    },
    displayImage:{
        height:"100%",
        flex:0.4,
        borderRadius:10,
    },
    stats:{
        marginLeft:10,
        flex:0.6,
        padding:2
        // backgroundColor:"white"
    },
    aciveText:{
        color:"#027ce0"
    },
});

export default globalStyles;