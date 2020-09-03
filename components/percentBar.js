import React from "react"
import {View,StyleSheet} from "react-native"

export default function PercentBar({percent}){
    return(
        <View style={localStye.backBar}>
            <View style={dynamicWidth(percent)}></View>
        </View>
    )
}

const dynamicWidth =(percent)=>{
    return{
        height:"100%",
        width:`${percent}%`,
        backgroundColor:"#027ce0",
        borderRadius:5,
    }
}

const localStye = StyleSheet.create({
    backBar:{
        height:8,
        width:"90%",
        backgroundColor:"#fff",
        borderRadius:5,
    }
})