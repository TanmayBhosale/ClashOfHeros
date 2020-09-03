import React,{useState,useEffect}from "react"
import {Text,ActivityIndicator,SafeAreaView,StyleSheet,} from "react-native"
import globalStyles from "../global/styles"
import allHeros from "../data/Allheros"

export default function Loading({navigation}){
    const [palyerHeros,setPlayerHeros] = useState([]);
    const [opponentHeros,setOpponentHeros] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            if(palyerHeros.length<3){
                for(var i=0;i<3;i++){    
                    try{
                        var index = Math.floor(Math.random()*(allHeros.length-1));
                        var id = allHeros[index].id;
                        var uriPowestate = `https://superheroapi.com/api/2844522915775529/${id}/powerstats`;
                        var uriImage = `https://superheroapi.com/api/2844522915775529/${id}/image`
                        var response = await fetch(uriPowestate);
                        var powerstats = await response.json();
                        var imageRes = await fetch(uriImage);
                        var image = await imageRes.json();
                        var imageUrl = image.url;
                        setPlayerHeros(
                            palyerHeros.push({powerstats:powerstats,imageUrl:imageUrl,health:100})
                        )
                        allHeros.splice(index,1)
                        console.log("allheros hength: "+allHeros.length)
                        index = Math.floor(Math.random()*(allHeros.length-1));
                        id = allHeros[index].id;
                        uriPowestate = `https://superheroapi.com/api/2844522915775529/${id}/powerstats`;
                        uriImage = `https://superheroapi.com/api/2844522915775529/${id}/image`;
                        response = await fetch(uriPowestate);
                        powerstats = await response.json();
                        imageRes = await fetch(uriImage);
                        image = await imageRes.json();
                        imageUrl = image.url;
                        setOpponentHeros(
                            opponentHeros.push({powerstats:powerstats,imageUrl:imageUrl,health:100})
                        )
                        allHeros.splice(index,1)
                        console.log(palyerHeros.length)
                    }catch(e){
                        console.log(e);
                    }
                }
                navigation.replace("Home",{palyerHeros:palyerHeros})
            }else{
                setPlayerHeros(
                    palyerHeros =[]
                )
                fetchData()
            }
            console.log("opponent: ");
            console.log(opponentHeros)
        }
        fetchData();
        
    },[]);

    return(
        <SafeAreaView style={{...globalStyles.mainBackground,...localStyles.background}}>
            <ActivityIndicator size="large" color="#027ce0" />
            <Text style={globalStyles.textColor}>Loading...</Text>
        </SafeAreaView>
    )
}

const localStyles = StyleSheet.create({
    background:{
        justifyContent:"center",
        alignItems:"center"
    }
})