import React from "react"
import { View, SafeAreaView,Image,TouchableOpacity,Text,StyleSheet } from "react-native"
import globalStyles from "../global/styles"

export default function Start({navigation}){
    const handleNavigation =()=>{
        navigation.push("Loading")
    }
    return(
        <SafeAreaView style={{...globalStyles.mainBackground,...localStyles.startScreen}}>
            <Image style={{...globalStyles.brandLogo,marginBottom:30}} source={require("../assets/Logo.png")} />
          <TouchableOpacity onPress={handleNavigation} style={{...globalStyles.button,...globalStyles.startButton}} >
            <Text style={{...globalStyles.textColor}}>Start Mach</Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
}

const localStyles = StyleSheet.create({
    startScreen:{
        flexDirection: "column",
        flex:1,
        justifyContent: "center",
        alignItems:"center"
    },
})