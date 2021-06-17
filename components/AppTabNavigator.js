import React from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import RequestScreen from '../screens/RequestScreen.js'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Image} from 'react-native'

export const AppTabNavigator = createBottomTabNavigator({
    DonateItems: {
        screen: HomeScreen,
        navigationOptions: {
           tabBarLabel: "Donate Items"
        }
    },

    ItemRequest: {
        screen: RequestScreen,
        navigationOptions: {
            
            tabBarLabel: "Request Items",
        }
    }
});


