import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// cart - screens
import CartScreen from '../screens/quotes/quotes';

//catalog - screens
import catalogScreen from '../screens/episodes/Episodes';
import ProductsScreen from '../screens/episodes/EpisodeData';

//dashbord - screens
import CharactersScreen from '../screens/character/Characters';
import CharacterDataScreen from '../screens/character/CharacterData';


// step 3- Create Const For Each Stack

const CharactersStackNavigator = createStackNavigator();
export const CharactersStack = () => {
    return (
        <CharactersStackNavigator.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <CharactersStackNavigator.Screen name='Character' component={CharactersScreen} />
            <CharactersStackNavigator.Screen name='CharacterData' component={CharacterDataScreen} />
        </CharactersStackNavigator.Navigator>)
}

const CatalogStackNavigator = createStackNavigator();

export const CatalogStack = () => {
    return (
        <CatalogStackNavigator.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <CatalogStackNavigator.Screen name='catalog' component={catalogScreen} />
            <CatalogStackNavigator.Screen name='products' component={ProductsScreen} />

        </CatalogStackNavigator.Navigator>
    )
}

const CartStackNavigator = createStackNavigator();

export const CartStack = () => {
    return (
        <CartStackNavigator.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <CartStackNavigator.Screen name='cart' component={CartScreen} />
        </CartStackNavigator.Navigator>
    )
}



// step 4 - Create Bottom Bar

const AppBottomBarNavigator = createMaterialBottomTabNavigator();

export const AppBottomBar = () => {
    return (
        <AppBottomBarNavigator.Navigator activeColor='#fde404' inactiveColor='#fff' barStyle={{ backgroundColor: 'black' }}

        >



            <AppBottomBarNavigator.Screen
                name='Characters'
                component={CharactersStack}
                options=
                {
                    {
                        tabBarLabel: 'Characters',
                        tabBarIcon: ({ focused }) => {
                            const iconShape = focused ? 'shield-account' : 'shield-account';
                            const iconColor = focused ? '#fde404' : '#fff';
                            const iconSize = focused ? 26 : 24;
                            return (
                                <MaterialCommunityIcons name={iconShape} color={iconColor} size={iconSize} />
                            )
                        }
                    }
                }
               
            />



            <AppBottomBarNavigator.Screen
                name='Episodes'
                component={CatalogStack}
                options=
                {
                    {
                        tabBarLabel: 'Episodes',
                        tabBarIcon: ({ focused }) => {
                            const iconShape = focused ? 'monitor-screenshot' : 'monitor-screenshot';
                            const iconColor = focused ? '#fde404' : '#fff';
                            const iconSize = focused ? 26 : 24;
                            return (
                                <MaterialCommunityIcons name={iconShape} color={iconColor} size={iconSize} />
                            )
                        }
                    }
                }
            />



            <AppBottomBarNavigator.Screen
                name='Quotes'
                component={CartStack}
                options=
                {
                    {
                        tabBarLabel: 'Quotes',
                        tabBarIcon: ({ focused }) => {
                            const iconShape = focused ? 'comment-quote' : 'comment-quote';
                            const iconColor = focused ? '#fde404' : '#fff';
                            const iconSize = focused ? 26 : 24;
                            return (
                                <MaterialCommunityIcons name={iconShape} color={iconColor} size={iconSize} />
                            )
                        }
                    }
                }
            />


        </AppBottomBarNavigator.Navigator>
    )
}