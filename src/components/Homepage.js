import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { Image } from '@rneui/base';

export default function Homepage({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#edd605',
                justifyContent: 'center',
                alignItems: 'center'
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
            <Text
                    style={{
                        padding: 30,
                        fontSize: 50,
                        textAlign: 'center',
                        fontFamily: 'Kanit_400Regular',
                        color: '#080808',
                    }}
                >Welcome BananaQ!</Text>
            <TouchableOpacity 
                style={{    
                    borderColor: '#080808',
                    borderWidth: 1,
                    width: 250,
                    height: 50,
                }}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={{
                    color: '#080808',
                    backgroundColor: '#fcfcfc',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                }}>Logout!</Text>
            </TouchableOpacity>
        </View>
    )
}