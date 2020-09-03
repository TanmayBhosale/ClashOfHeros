import React from"react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Start from "./start" 
import Loading from "./loading"
import Home from "./home"

const Stack = createStackNavigator();

const StackNav = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{header:()=>null}}>
                <Stack.Screen name="Start" component={Start} />
                <Stack.Screen name="Loading" component={Loading} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNav