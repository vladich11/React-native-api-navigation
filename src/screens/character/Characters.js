import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, ActivityIndicator, Image, StyleSheet } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';



const CharactersScreen = (props) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    const getCharacters = async () => {
        try {
            const url = 'https://www.breakingbadapi.com/api/characters/';
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
        getCharacters();
    }, []);

    const deadStyle = value => {
        switch (value) {
            case "Presumed dead":
                return "yellow"
            case "Alive":
                return "green"
            case "Deceased":
                return "red"
            default:
                break;
        }

    }


    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ flexDirection: "column", flex: 1, backgroundColor: "black" }}>


                <Image
                    style={{ width: null, height: null, flex: 3,marginTop:60 }}
                    resizeMode={'center'}
                    source={require('../images/black3.png')}
                />


                <View style={{ flex: 6, padding: 24 }}>
                    {isLoading ? <ActivityIndicator /> : (

                        <FlatList
                            data={data}
                            keyExtractor={item => item.char_id}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.characters} onPress={() => { props.navigation.navigate("CharacterData", { characterData: item }) }}>
                                    <Image
                                        style={{ height: 120, width: 120 ,flex:0.5}}
                                        source={{ uri: item.img }}
                                    />
                                    <View style={{ backgroundColor: deadStyle(item.status), width: 10 }} >
                                        <Text></Text>
                                    </View>
                                    <View style={{ justifyContent: "center", padding: 10 }}>
                                        <Text style={{ fontSize: 20, color: "black", fontFamily: 'Inter_900Black', fontSize: 17 }}>{item.name}</Text>
                                        <Text>{item.nickname}</Text>
                                    </View>

                                </TouchableOpacity>
                            )}
                        />

                    )}
                </View>

            </View>
        )

    }
}

const styles = StyleSheet.create({

    characters: {
        flexDirection: "row",
        backgroundColor: '#dadada',
        marginBottom: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginVertical: 10,

    },
    mainText: {
        flex: 0.2,
        marginVertical: 30,
        backgroundColor: "#90A4AE",
        width: "100%",

    },
});

export default CharactersScreen;

