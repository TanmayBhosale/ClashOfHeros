import React from "react";
import {StyleSheet, Dimensions} from "react-native"

const globalStyles =StyleSheet.create({
    mainBackground:{
        backgroundColor: "#5e5e5d",
        flexDirection:"column",
        flex:1,
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
    }
});

export default globalStyles;