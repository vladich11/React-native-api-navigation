import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet ,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';

import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const QuotesScreen = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });


    const getQuotes = async () => {
        try {
            const url = 'https://www.breakingbadapi.com/api/quotes/';
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
        getQuotes();
    }, []);


    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ flex: 1, padding: 24 ,backgroundColor:"#fde404"}}>

                <Image
                    style={{ height:250, width: 300, marginTop: 40 ,marginLeft:25}}
                    source={require('../images/yellow1.jpg')}
                />


                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={data}
                        keyExtractor={item => item.quote_id}
                        renderItem={({ item }) => (
                            <View style={styles.episode}>
                                <Text style={{fontFamily: 'Inter_900Black'}}>{item.quote}</Text>
                                <Text>{item.author}</Text>
                            </View>
                        )}
                    />

                )}

            </View>
        )

    }
}


const styles = StyleSheet.create({

    episode: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginVertical: 10,
        marginHorizontal: 5
    }

});

export default QuotesScreen;