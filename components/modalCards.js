import React from "react"
import { View,TouchableOpacity,Image,Text,StyleSheet,FlatList } from "react-native";
import globalStyles from "../global/styles"
import PercentBar from "../components/percentBar"

export default function ModalCards({palyerHeros,heroSelected}){
    return(
        <View style={globalStyles.cardHolder}>
            <FlatList
                data={palyerHeros}
                renderItem={({item}) => template(item)}
            />
        </View>
    )
}

const localstyles = StyleSheet.create({
    holder:{
        flexDirection:"row",
    },
    percentHolder:{
        flexDirection:"row",
        // backgroundColor:"white",
        flex:1,
        alignItems:"center"
    },
})

const template =(hero) => {
    return(
        <TouchableOpacity style={globalStyles.displayCard} onPress={() => heroSelected(hero)} key={Math.random()} >
                    <Image style={globalStyles.displayImage} source={{uri:hero.imageUrl}} />
                    <View style={globalStyles.stats} >
                        <View style={localstyles.holder}>
                            <Text style={globalStyles.textColor}>Name:</Text><Text style={globalStyles.aciveText}> {hero.powerstats.name}</Text>
                        </View>
                        <View style={localstyles.holder} >
                        <Text style={globalStyles.textColor}>Itelligece : </Text><View style={localstyles.percentHolder}><PercentBar percent={hero.powerstats.intelligence} /></View>
                        </View>
                        <View style={localstyles.holder}>
                        <Text style={globalStyles.textColor}>Strength : </Text><View style={localstyles.percentHolder}><PercentBar percent={hero.powerstats.strength} /></View>
                        </View>
                        <View style={localstyles.holder}>
                        <Text style={globalStyles.textColor}>Speed : </Text><View style={localstyles.percentHolder}><PercentBar percent={hero.powerstats.speed} /></View>
                        </View>
                        <View style={localstyles.holder}>
                        <Text style={globalStyles.textColor}>durability : </Text><View style={localstyles.percentHolder}><PercentBar percent={hero.powerstats.durability} /></View>
                        </View>
                        <View style={localstyles.holder}>
                        <Text style={globalStyles.textColor}>Power: </Text><View style={localstyles.percentHolder}><PercentBar percent={hero.powerstats.power} /></View>
                        </View>
                        <View style={localstyles.holder}>
                        <Text style={globalStyles.textColor}>Combat: </Text><View style={localstyles.percentHolder}><PercentBar percent={hero.powerstats.combat} /></View>
                        </View>
                    </View>
                </TouchableOpacity>
    );
}