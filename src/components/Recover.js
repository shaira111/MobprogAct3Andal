import { View } from 'react-native'
import React from 'react'
import { Button, TextInput, Text } from 'react-native-paper'

export default function Recover({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#edd605',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text
                    style={{
                        padding: 10,
                        fontSize: 40,
                        textAlign: 'center',
                        color: 'black',
                    }}
                >Account Recovery</Text>
            <TextInput 
                    mode='outlined'
                    placeholder='Email Address'
                    style={{
                        marginVertical: 15,
                        width: '80%',
                    }}
                    error={false}
                    theme={{ fonts: { regular: 'Apple Color Emoji' } }}
                />
            <Button 
                    mode="contained"
                    buttonColor='#fcfcfc'
                    textColor='#080808'
                    style={{
                        padding: 3,
                        marginVertical: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                    }}
                    labelStyle={{
                        fontSize: 30,
                    }}
                    onPress={() => navigation.navigate("HomePage")}
                >
                    <Text style={{width: '60%', color: '#080808', fontSize: 18, fontFamily: 'Kanit_300Light'}}>Submit</Text>
                </Button>
        </View>
    )
}