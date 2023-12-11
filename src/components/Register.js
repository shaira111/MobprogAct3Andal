import { View, TouchableOpacity } from 'react-native'
import { TextInput, Text, Button } from 'react-native-paper';
import { Image } from '@rneui/base';
import React from 'react'
import { Kanit_400Regular, Kanit_300Light } from "@expo-google-fonts/kanit";
import { useFonts } from "expo-font";

export default function Login({ navigation }) {
    const [showPass, setShowPass] = React.useState(false);    

    const [fontsLoaded] = useFonts({
        Kanit_400Regular,
        Kanit_300Light,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                paddingVertical: 60,
                backgroundColor: '#edd605',
            }}
        >
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    marginTop: 50,
                    marginRight: 70,
                    alignItems: 'flex-end',
                }}
            >
            </View>
                <Text
                    style={{
                        padding: 10,
                        fontSize: 40,
                        textAlign: 'center',
                        color: 'black',
                    }}
                >Signup</Text>
            
            <View
                style={{
                    paddingTop: 5,
                    paddingHorizontal: 30,
                    marginTop: 50,
                }}
            >
                <TextInput 
                    mode='outlined'
                    placeholder='Username'
                    style={{
                        marginVertical: 15,
                    }}
                    error={false}
                    theme={{ fonts: { regular: 'Apple Color Emoji' } }}
                />
                <TextInput 
                    mode='outlined'
                    placeholder='Email'
                    style={{
                        marginVertical: 15,
                    }}
                    error={false}
                    theme={{ fonts: { regular: 'Apple Color Emoji' } }}
                />
                <TextInput
                    mode='outlined'
                    placeholder='Password'
                    secureTextEntry={!showPass}
                    right={
                        <TextInput.Icon
                            icon={showPass ? "eye-off" : "eye"}
                            onPress={() => setShowPass(!showPass)}
                        />
                    }
                    style={{
                        marginVertical: 15,
                        fontFamily: 'Kanit_300Light',
                    }}
                />
            </View>
            <View
                style={{
                    paddingHorizontal: 60,
                    paddingVertical: 20,
                }}
            >
                <Button 
                    mode="contained"
                    buttonColor='#fcfcfc'
                    textColor='#080808'
                    style={{
                        padding: 3,
                        marginVertical: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 30,
                    }}
                    labelStyle={{
                        fontSize: 30,
                    }}
                    onPress={() => navigation.pop()}
                >
                    <Text style={{width: '60%', color: '#080808', fontSize: 18, fontFamily: 'Kanit_300Light'}}>Register</Text>
                </Button>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 15,
                    }}
                >
                    <Text
                        style={{
                            width: 180,
                            textAlign: 'center',
                            color: '#080808',
                            marginHorizontal: 1,
                            fontFamily: 'Kanit_300Light',
                            fontSize: 15,
                        }}
                    >Already have an Account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.pop()}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                color: 'red',
                                marginHorizontal: 1,
                                fontFamily: 'Kanit_300Light',
                                fontSize: 17,
                            }}
                        >Signin</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}