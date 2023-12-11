import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from '@rneui/base';
import { Kanit_300Light } from "@expo-google-fonts/kanit";
import { useFonts } from "expo-font";

export default function Main({ navigation }) {

    const [fontsLoaded] = useFonts({
        Kanit_300Light,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View 
            style={{
                flex: 1, 
                backgroundColor: '#edd605',
                justifyContent: 'center',
                alignItems: 'center',   
                flexDirection: 'column',
            }}
        >
            <Image 
                    style={{
                        width: 300, 
                        height: 300,
                        marginBottom: 20,
                    }}
                    source={require('../images/banana2.png')}
            />
           

            <TouchableOpacity 
                style={{    
                    backgroundColor: '#fcfcfc',
                    backgroundRadius: 2,
                    borderColor: '#080808',
                    borderWidth: 1,
                    width: 250,
                    height: 50,
                }}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={{
                    color: '#080808',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                }}>Click here</Text>
            </TouchableOpacity>
        </View>
    )
}