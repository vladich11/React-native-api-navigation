import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
const CharacterDataScreen = (props) => {


    const productData = props.route.params.characterData

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

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
            <View style={styles.container}>

                <View style={styles.mainText}>
                    <Text style={{ textAlign: 'center', marginTop: 40 ,fontFamily: 'Inter_900Black',color:"white"}}>{productData.name}</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Image
                        style={{ width: '100%', flex: 1 }}
                        source={{ uri: productData.img }}
                    />
                </View>

                <View style={{ flex: 0.1, backgroundColor: deadStyle(productData.status), justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center' ,fontFamily: 'Inter_900Black',color:"black"}}>{productData.status}</Text>
                </View>


                <View style={{ flex: 0.4 ,alignItems:'center'}}>
                    <Text style={[styles.paragraph]}>Name: {productData.name}</Text>
                    <Text style={styles.paragraph}>Nickname: {productData.nickname}</Text>
                    <Text style={styles.paragraph}>Portrayed: {productData.portrayed}</Text>
                    <Text style={styles.paragraph}>Appearance: {productData.appearance + ","}</Text>
                </View>

            </View>
        )

    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor:"black",
    }, mainText: {
        flex: 0.15,
        backgroundColor: "#369457",
        alignContent: 'center',
        justifyContent: 'center',

    },
    paragraph:{
        color:"white",
        marginTop:10,
        paddingTop:10,
        fontSize:15,
        fontFamily: 'Inter_900Black'
    }
});



export default CharacterDataScreen;