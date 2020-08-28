import React, { useState } from "react";
import {SafeAreaView,View,Text,TouchableOpacity, Modal,StyleSheet, Dimensions,Image} from "react-native";
import globalStyles from "../global/styles";

export default function Home(){
    const [isModalOpen,setModalOpen] = useState(true);
    const [isCardModalOpen,setCardModal] = useState(false);

    const changeModal = () => {
        setModalOpen(false);
        setCardModal(true);
    }

    const heroSelected = ()=>{
        setCardModal(false)
    }

  return(
    <SafeAreaView 
     style={globalStyles.mainBackground}>
      <Modal visible={isModalOpen} animationType="slide">
          <View style={{...globalStyles.mainBackground,...localStyes.modal}} >
              <Image style={{...globalStyles.brandLogo,marginBottom:30}} source={require("../assets/Logo.png")} />
          <TouchableOpacity onPress={changeModal} style={{...globalStyles.button,...localStyes.startButton}} >
            <Text style={{...globalStyles.textColor,...localStyes.buttonText}}>Start Mach</Text>
        </TouchableOpacity>
          </View>
      </Modal>
      <Modal visible={isCardModalOpen}>
          <View style={{...globalStyles.mainBackground,...localStyes.cardModal}}>
            <View style={localStyes.cardHolder}>
            
            <TouchableOpacity style={localStyes.displayCard} onPress={heroSelected} >
                <Image style={localStyes.displayImage} source={{uri:"https://www.superherodb.com/pictures2/portraits/10/100/10653.jpg"}} />
                <View style={localStyes.stats} >
                    <Text style={globalStyles.textColor}>Name: Thanos</Text>
                    <Text style={globalStyles.textColor}>Itelligece: 100</Text>
                    <Text style={globalStyles.textColor}>Strength: 100</Text>
                    <Text style={globalStyles.textColor}>Speed: 33</Text>
                    <Text style={globalStyles.textColor}>durability: 100</Text>
                    <Text style={globalStyles.textColor}>Power: 100</Text>
                    <Text style={globalStyles.textColor}>Combat: 80</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={localStyes.displayCard}>
                <Image style={localStyes.displayImage} source={{uri:"https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg"}} />
                <View style={localStyes.stats}>
                    <Text style={globalStyles.textColor}>Name: Thanos</Text>
                    <Text style={globalStyles.textColor}>Itelligece: 100</Text>
                    <Text style={globalStyles.textColor}>Strength: 100</Text>
                    <Text style={globalStyles.textColor}>Speed: 33</Text>
                    <Text style={globalStyles.textColor}>durability: 100</Text>
                    <Text style={globalStyles.textColor}>Power: 100</Text>
                    <Text style={globalStyles.textColor}>Combat: 80</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={localStyes.displayCard}>
                <Image style={localStyes.displayImage} source={{uri:"https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"}} />
                <View style={localStyes.stats}>
                    <Text style={globalStyles.textColor}>Name: Thanos</Text>
                    <Text style={globalStyles.textColor}>Itelligece: 100</Text>
                    <Text style={globalStyles.textColor}>Strength: 100</Text>
                    <Text style={globalStyles.textColor}>Speed: 33</Text>
                    <Text style={globalStyles.textColor}>durability: 100</Text>
                    <Text style={globalStyles.textColor}>Power: 100</Text>
                    <Text style={globalStyles.textColor}>Combat: 80</Text>
                </View>
            </TouchableOpacity>
            </View>
          </View>
      </Modal>
      <View style={localStyes.opponentArea}>
          <View style={localStyes.opponentDetais}>

          </View>
        <View style={localStyes.opponentCard}>
            <Image style={localStyes.heroImage} source={{uri:"https://www.superherodb.com/pictures2/portraits/10/100/10653.jpg"}} />
        </View>
      </View>
      <View style={localStyes.playerArea}>
        <View style={localStyes.playerCard} >
            <Image style={localStyes.heroImage} source={{uri:"https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"}} />
        </View>
        <View style={localStyes.playerAttack} >
            <TouchableOpacity style={{...globalStyles.button,...localStyes.attackButton}}>
                <Text style={localStyes.buttonText}>Attack</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...globalStyles.button,...localStyes.attackButton}}>
                <Text style={localStyes.buttonText}>Defence</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...globalStyles.button,...localStyes.attackButton}}>
                <Text style={localStyes.buttonText}>One hit K.O.</Text>
            </TouchableOpacity>
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
    cardModal:{
        justifyContent:"center",
        alignItems:"center",
        padding:10,
    },
    cardHolder:{
        height: "90%",
        width:"100%",
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center"
    },
    displayCard:{
        backgroundColor:"#2f3030",
        height:"25%",
        width:"95%",
        borderRadius:10,
        flexDirection:"row",
        padding:5,
    },
    displayImage:{
        height:"100%",
        flex:0.4,
        borderRadius:10,
    },
    stats:{
        marginLeft:10,
        flex:0.6,
        // backgroundColor:"white"
    },
    startButton:{
        width: 120,
        height: 60,
        justifyContent:"center",
        alignContent:"center",
    },
    buttonText:{
        fontSize:20,
        textAlign:"center",
        color:"white"

    },
    opponentArea:{
        flexDirection: "row",
        flex: 1,
        padding: 5,
    },
    opponentDetais:{
        flex:2,
        borderWidth:2,
        borderColor:"#027ce0",
        height:"60%",
        marginTop:10,
        marginRight:20,
    },
    opponentCard:{
        flex:1,
        top: 10,
        right: 10,
        borderRadius:10,
        backgroundColor:"#2f3030",
        height: "60%",
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
    heroImage:{
        height:"100%",
        width:"100%",
        borderRadius:10
    }
})