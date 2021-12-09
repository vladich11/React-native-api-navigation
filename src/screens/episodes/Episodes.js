import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';

import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const Episodes = (props) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    const getEpisodes = async () => {
        try {
            const url = 'https://www.breakingbadapi.com/api/episodes/';
            const response = await fetch(url, {
                method: 'GET'
            });
            const serverData = await response.json();
            setData(serverData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getEpisodes();
    }, []);


    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.mainContainer}>

                <Image
                    style={{ height: 200, width: 420, marginTop: 40 }}
                    source={require('../images/white1.jpg')}
                />

                {isLoading ? <ActivityIndicator /> : (

                    <FlatList
                        data={data}
                        keyExtractor={item => item.episode_id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.container} onPress={() => { props.navigation.navigate("products", { episodeData: item }) }}>


                                <View style={styles.episode}>
                                    <View>
                                        <Text style={styles.font}>{item.title}</Text>
                                    </View>
                                    <View style={styles.episodeInfo}>
                                        <Text>Season {item.season} | Episode {item.episode}</Text>
                                        <Text>Air date {item.air_date}</Text>
                                    </View>
                                </View>



                            </TouchableOpacity>
                        )}
                    />

                )}
            </View>
        )

    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:"white"
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    episode: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginVertical: 10,
        marginHorizontal: 25
    },
    episodeInfo: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    font: {
        fontFamily: 'Inter_900Black',
        fontSize:20
    }
});


export default Episodes;