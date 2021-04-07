import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native';

export default function HerosDetailsPage({ route }) {
    const { item } = route.params

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1B26' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', padding: 15 }}>
                    <Image
                        source={{ uri: item.image.url }}
                        resizeMode='cover'
                        style={{ width: 400, height: 215, borderRadius: 30, }}
                    />
                </View>
                <View style={{ flex: 2, padding: 15 }}>
                    <ScrollView >
                        <Text style={{ color: 'white', fontSize: 34, fontWeight: 'bold',marginBottom:'5%' }}>{item.name}</Text>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', }}>Power Stats</Text>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '300', }}>Intelligence:{item.powerstats.intelligence}</Text>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '300', }}>Strength:{item.powerstats.strength}</Text>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '300', }}>Speed:{item.powerstats.speed}</Text>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '300', }}>Durability:{item.powerstats.durability}</Text>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '300',marginBottom:'5%'}}>Power:{item.powerstats.power}</Text>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', }}>Gender</Text>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '300', }}>{item.appearance.gender}</Text>
                        {/* <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{item.description}</Text> */}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}