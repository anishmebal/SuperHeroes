import React, { useState,useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,View,Image} from "react-native";
import axios from 'axios'
import HerosDetailPage from './HerosDetailPage'
import HerosListPage from './HerosListPage'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const homeStack = createStackNavigator();


const RootStack = () => (
  <homeStack.Navigator screenOptions={{
   
    headerStyle: {
      backgroundColor: '#007AFF'
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <homeStack.Screen name="Home" component={HerosListPage} options={{
      headerShown:false
      // headerLeft: () => (
      //   <Icon.Button name="menu" size={25} backgroundColor="#007AFF" onPress={() => { navigation.openDrawer() }}></Icon.Button>
      // )
    }} />
    <homeStack.Screen name="HeroDetails" component={HerosDetailPage} options={({navigation})=>{
      headerLeft: () => (
        <Icon.Button name="arrow-left" size={25} backgroundColor="#007AFF" onPress={() => {
          navigation.navigate("Home")
        }}></Icon.Button>
      )
    }} />
  </homeStack.Navigator>
)

const App =()=>{

  const [splash,setSplash] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setSplash(false)
    },3000)
  },[])

  return(
    <>
    {
      splash ? <View style={{flex:1,backgroundColor:"#1E1B26",alignItems:'center',justifyContent:'center'}}>
        <StatusBar backgroundColor="#1E1B26"/><Text style={{color : "white", fontSize: 28, fontWeight:"bold"}}>Super Heroes</Text>
      </View> :
      (
        <NavigationContainer>
        <StatusBar backgroundColor="#1E1B26"/>
        <RootStack/>
      </NavigationContainer>
      )
    }
    </>

  )
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;