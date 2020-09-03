import React from "react"
import { View,Image,Text,StyleSheet } from "react-native"
import globalStyles from "../global/styles";
import PercentBar from "../components/percentBar"

export default function HeroCard({playHeroInfo,hero}){
    return playHeroInfo ? <View style={localStyles.card} >
        <Text style={globalStyles.textColor}>Name : {hero.powerstats.name}</Text>
        <Text style={globalStyles.textColor}>Intellience : {hero.powerstats.intelligence}</Text>
        <PercentBar percent={hero.powerstats.intelligence} />
        <Text style={globalStyles.textColor}>Strength : {hero.powerstats.strength}</Text>
        <PercentBar percent={hero.powerstats.strength} />
        <Text style={globalStyles.textColor}>Speed : {hero.powerstats.speed}</Text>
        <PercentBar percent={hero.powerstats.speed} />
        <Text style={globalStyles.textColor}>Durability : {hero.powerstats.durability}</Text>
        <PercentBar percent={hero.powerstats.durability} />
        <Text style={globalStyles.textColor}>Power : {hero.powerstats.power}</Text>
        <PercentBar percent={hero.powerstats.power} />
        <Text style={globalStyles.textColor}>Combat : {hero.powerstats.combat}</Text>
        <PercentBar percent={hero.powerstats.combat} />
    </View>:<Image style={globalStyles.heroImage} source={{uri:hero.imageUrl}} />
}

const localStyles = StyleSheet.create({
    card:{
        flexDirection:"column",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
    }
})