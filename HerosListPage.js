import React, { useState,useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,View,Image, TextInput } from "react-native";
import axios from 'axios'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HerosListPage = ({navigation}) => {
const [ heroes, setHeroes ] = useState([])
var id=1;
// const getDataUsingSimpleGetCall = () => {
//   // for()
  
//   for(id=1;id<=10;id++)
//   {  
//     console.log(id)
//     axios
//       .get(`https://www.superheroapi.com/api.php/1630299024026552/${id}`)
//       .then((response) => {
//         // const val = response.data.jobfile.jobs;
//         setHeroes((prevItems)=>{
//           return [...prevItems,response.data]
//         })
//         // console.log(heroes)
//       })
//       .catch((error) => {
//         alert(error.message);
//       })
//   }
// };

const multipleRequestsInSingleCall = () => {
  axios
    .all([
      axios
        .get(`https://www.superheroapi.com/api.php/1630299024026552/1`)
        .then((response) => {
          setHeroes((prevItems)=>{
            return [...prevItems,response.data]
          })
          // console.log('Post 1 : ' + JSON.stringify(response.data));
        }),
      axios
        .get(`https://www.superheroapi.com/api.php/1630299024026552/2`)
        .then((response) => {
          // console.log('Post 2 : ' + JSON.stringify(response.data));
          setHeroes((prevItems)=>{
            return [...prevItems,response.data]
          })
        }),
      axios
        .get(`https://www.superheroapi.com/api.php/1630299024026552/3`)
        .then((response) => {
          // console.log('Post 2 : ' + JSON.stringify(response.data));
          setHeroes((prevItems)=>{
            return [...prevItems,response.data]
          })
        }),
      axios
        .get(`https://www.superheroapi.com/api.php/1630299024026552/4`)
        .then((response) => {
          // console.log('Post 2 : ' + JSON.stringify(response.data));
          setHeroes((prevItems)=>{
            return [...prevItems,response.data]
          })
        }),
      axios
        .get(`https://www.superheroapi.com/api.php/1630299024026552/5`)
        .then((response) => {
          // console.log('Post 2 : ' + JSON.stringify(response.data));
          setHeroes((prevItems)=>{
            return [...prevItems,response.data]
          })
        }),
      axios
        .get(`https://www.superheroapi.com/api.php/1630299024026552/6`)
        .then((response) => {
          setHeroes((prevItems)=>{
            return [...prevItems,response.data]
          })
          // console.log('Post 1 : ' + JSON.stringify(response.data));
        }),
      axios
        .get(`https://www.superheroapi.com/api.php/1630299024026552/7`)
        .then((response) => {
          // console.log('Post 2 : ' + JSON.stringify(response.data));
          setHeroes((prevItems)=>{
            return [...prevItems,response.data]
          })
        }),
      axios
        .get(`https://www.superheroapi.com/api.php/1630299024026552/8`)
        .then((response) => {
          // console.log('Post 2 : ' + JSON.stringify(response.data));
          setHeroes((prevItems)=>{
            return [...prevItems,response.data]
          })
        }),
      axios
        .get(`https://www.superheroapi.com/api.php/1630299024026552/9`)
        .then((response) => {
          // console.log('Post 2 : ' + JSON.stringify(response.data));
          setHeroes((prevItems)=>{
            return [...prevItems,response.data]
          })
        }),
      axios
        .get(`https://www.superheroapi.com/api.php/1630299024026552/10`)
        .then((response) => {
          // console.log('Post 2 : ' + JSON.stringify(response.data));
          setHeroes((prevItems)=>{
            return [...prevItems,response.data]
          })
        }),
    ]).then(
      axios.spread(function (acct, perms) {
        // Both requests are now complete
        // alert('Both requests are now complete');
      }),
    );
};



  useEffect(()=>{
    // console.log("In effect")
    multipleRequestsInSingleCall()
  },[])

  const [selectedId, setSelectedId] = useState(null);

  const searchUser=(text)=>{
    if(text){
        axios.get(`https://www.superheroapi.com/api.php/1630299024026552/search/${text}`)
        .then((response) => {
          // console.log('Post 2 : ' + JSON.stringify(response.data));
          setHeroes(response.data.results)
        })
    }
    else{
        multipleRequestsInSingleCall()
    }

  }

  const renderItem = ({ item }) => {
    return(
      <View style={{ marginVertical: 20, }}>
      <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center', }}>
          <TouchableOpacity onPress={() => navigation.navigate('HeroDetails', { item })} >
              <Image
                  source={{ uri: item.image.url }}
                  resizeMode='cover'
                  style={{ width: 250, height: 400, borderRadius: 10, }}
              />
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
              <View style={{ alignItems: 'center', marginTop: 10, }}>
                  <Text style={{ fontSize: 22, color: 'white', textAlign: 'center', maxWidth: 250 }}>
                      {item.name}
                  </Text>
              </View>
              <View
                  style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      alignItems: 'center',
                      justifyContent: 'center'
                  }}
              >
                  <Text style={{ fontSize: 14, color: 'white' }}>
                      {item.biography.publisher}
                  </Text>
              </View>
          </View>
      </View>
  </View>
    )
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1B26' }}>
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text style={{ color: 'white', fontSize: 22, marginTop: 20, marginBottom:15, marginLeft: 27, fontWeight: "bold" }}>Super Heroes</Text>
        <View style = {styles.titleHead}>
        <TextInput placeholder="Search here" placeholderTextColor="white" style={ styles.searchText } onChangeText={text=>{searchUser(text)}}/> 
        <MaterialCommunityIcons name="magnify" color="white" size={25} style={{position:'absolute',right:10}} onPress={()=>{}}/>
    </View>
        <View style={{ flex: 1, marginTop: 8 }}>
            <FlatList
                data={heroes}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    </View>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
    titleHead : {
        marginTop: 10,
        marginBottom:20,
        marginRight:20,
        marginLeft: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title : {
        fontSize : 25,
        fontWeight : "bold",
        color : "white",
      },
      searchText: {
        borderBottomWidth: 1,
        borderColor:"white", 
        width: 322, 
        height: 40, 
        padding: 10,
        color:"white",
        fontSize: 17
      }, 
      icon: {
        marginRight: 10
      },
})

export default HerosListPage;
