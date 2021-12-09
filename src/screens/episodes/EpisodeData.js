import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const EpisodeData = (props) => {

    const episodeData = props.route.params.episodeData

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>

                <Image
                    style={{ height: 200, width: 420, marginTop: 40 }}
                    source={require('../images/white1.jpg')}
                />
                <View style={{ flex: 0.1, backgroundColor: "black", justifyContent: 'center' }}>
                    <Text style={{ textAlign: "center", fontFamily: 'Inter_900Black', color: "white", fontSize: 20 }}>
                        Season {episodeData.season} | Episode {episodeData.episode}
                    </Text>
                </View>


                <View style={{ flex: 0.4, justifyContent: "center" }}>
                    <Text style={{ textAlign: "center", color: "black", fontFamily: 'Inter_900Black', fontSize: 40,flexWrap:'wrap' }}>
                        {episodeData.title}
                    </Text>
                </View>

                <View style={{ backgroundColor: "black", flex: 0.1, justifyContent: "center" }}>
                    <Text style={{ fontFamily: 'Inter_900Black', textAlign: "center", color: "white", fontSize: 20 }}>
                        Characters
                    </Text>
                </View>

                <View style={{ flexDirection: "row",flex:0.5}}>
                    <FlatList
                        data={episodeData.characters}
                        keyExtractor={(item,index) => ""+index}
                        renderItem={({ item }) => <Text style={{textAlign:"center",marginTop:7,fontFamily: 'Inter_900Black',}}>{item}</Text>}
                    />
                </View>




            </View>
        )

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    mainText: {
        flex: 0.2,
        marginVertical: 30,
        backgroundColor: "red",
        width: "100%",

    },
});
// {} return a object



export default EpisodeData;