import React, { useState,useEffect } from "react";
import {SafeAreaView,View,Text,TouchableOpacity, Modal,StyleSheet, Dimensions,Image} from "react-native";
import globalStyles from "../global/styles";
import HeroCard from "../components/heroCard"
import PercentBar from "../components/percentBar"
import Icon from "react-native-vector-icons/MaterialIcons"
import ModalCards from "../components/modalCards"


export default function Home({route}){
    const [isCardModalOpen,setCardModal] = useState(true);
    const [playHeroInfo,setPlayerHeroInfo] = useState(false);
    const [selectedHero,setHero] = useState({})

    const {palyerHeros} = route.params;


    const heroSelected = (hero)=>{
        setPlayerHeroInfo(false)
        setHero((perHero) =>{
            return{
                ...hero
            }
        } )
        setCardModal(false)
    }

    console.log("current hero")
    console.log(selectedHero)

  return(
    <SafeAreaView 
     style={globalStyles.mainBackground}>
      <Modal animationType="slide" visible={isCardModalOpen}>
          <View style={{...globalStyles.mainBackground,...globalStyles.cardModal}}>
            <ModalCards palyerHeros={palyerHeros} heroSelected={heroSelected}/>
          </View>
      </Modal>
      <View style={localStyes.topContainer}>
        <View style={localStyes.opponentArea}>
            <View style={localStyes.opponentDetais}>
                <Text style={globalStyles.textColor}>Name : Steppenof</Text>
                <Text style={globalStyles.textColor}>Intelligence : 94</Text>
                <Text style={globalStyles.textColor}>Stregth : 100</Text>
                <Text style={globalStyles.textColor}>Speed : 83</Text>
                <Text style={globalStyles.textColor}>Durability : 100</Text>
                <Text style={globalStyles.textColor}>Power : 100</Text>
                <Text style={globalStyles.textColor}>Combat : 100</Text>
            </View>
            <View style={localStyes.opponentCard}>
                <Image style={globalStyles.heroImage} source={{uri:"https://www.superherodb.com/pictures2/portraits/10/100/10653.jpg"}} />
            </View>
        </View>
            <PercentBar percent={80} />
        </View>
        <View style={localStyes.topContainer}>
            <PercentBar percent={60} />
            <View style={localStyes.playerArea}>
                <View style={localStyes.playerCard} >
                    <HeroCard playHeroInfo={playHeroInfo} hero={selectedHero}  />
                    <TouchableOpacity style={localStyes.infoIcon} onPress={() => setPlayerHeroInfo(!playHeroInfo)} >
                        <Icon name="info" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={localStyes.playerAttack} >
                    <TouchableOpacity style={{...globalStyles.button,...localStyes.attackButton}}>
                        <Text style={globalStyles.buttonText}>Attack</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...globalStyles.button,...localStyes.attackButton}}>
                        <Text style={globalStyles.buttonText}>Defence</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...globalStyles.button,...localStyes.attackButton}}>
                        <Text style={globalStyles.buttonText}>One hit K.O.</Text>
                    </TouchableOpacity>
                    {/*remove*/}
                    <TouchableOpacity onPress={() => setCardModal(true)} style={{...globalStyles.button,...localStyes.attackButton}}>
                        <Text style={globalStyles.buttonText}>Change</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      
    </SafeAreaView>
  );
}

const localStyes = StyleSheet.create({
    modal:{
        flexDirection: "column",
        flex:1,
        justifyContent: "center",
        alignItems:"center"
    },
    topContainer:{
        flexDirection:"column",
        flex:1,
        alignItems:"center",
        // borderWidth:5,
        // borderColor:"white",
        justifyContent:"center"
    },
    opponentArea:{
        // backgroundColor:"pink",
        flexDirection: "row",
        flex: 0.8,
        padding:0,
        paddingLeft:10,
    },
    opponentDetais:{
        flex:2,
        borderWidth:2,
        height:"80%",
        marginTop:10,
        marginRight:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#2f3030",
        borderRadius:10,
    },
    opponentCard:{
        flex:1,
        top: 10,
        right: 10,
        borderRadius:10,
        backgroundColor:"#2f3030",
        height: "80%",
        padding: 5,
    },
    playerArea:{
        padding:5,
        borderRadius: 10,
        margin:10,
        flexDirection: "row",
        flex: 1,
        alignItems:"center",
    },
    playerCard:{
        borderRadius:10,
        backgroundColor:"#2f3030",
        height: "90%",
        width: 100,
        flex:2.5,
        padding:5,

    },
    infoIcon:{
        position:"absolute",
        top:5,
        left:5,
    },
    playerAttack:{
        padding:5,
        // backgroundColor:"white",
        flex:2,
        flexDirection:"column",
        justifyContent:"space-around"
    },
    attackButton:{
        height: 60,
        marginBottom:10,
    },
})