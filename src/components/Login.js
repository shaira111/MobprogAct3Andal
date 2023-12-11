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
                <Image 
                        style={{
                            width: 200, 
                            height: 120,
                        }}
                        source={require('../images/banana2.png')}
                />
            </View>
                <Text
                    style={{
                        borderColor: '#B99470',
                        padding: 16,
                        fontSize: 25,
                        textAlign: 'left',
                        marginTop: 100,
                        marginLeft: 20,
                        fontFamily: 'Kanit_400Regular',
                        color: 'black',
                    
                    }}
                >Signin</Text>
            
            <View
                style={{
                    paddingTop: 0,
                    paddingHorizontal: 30,
                    marginTop: 0,
                    
                }}
            >
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
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                    marginRight: 35,
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("Recovery")}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'red',
                            marginHorizontal: 2,
                            fontFamily: 'Kanit_300Light',
                            fontSize: 16,
                        }}
                    >Forgot your Password ?</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    paddingHorizontal: 80,
                    paddingVertical: 20,
                }}
            >
                <Button 
                    mode="contained"
                    buttonColor='#fcfcfc'
                    textColor='#0a0a0a'
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
                    <Text style={{width: '60%', color: '#0a0a0a', fontSize: 18, fontFamily: 'Kanit_300Light'}}>Login</Text>
                </Button>
                <Button 
                    mode="outlined"
                    
                    textColor='#0a0a0a'
                    style={{
                        borderColor:'#0a0a0a',
                        padding: 3,
                        marginVertical: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                    }}
                    labelStyle={{
                        fontSize: 30,
                    }}
                    onPress={() => navigation.pop()}
                >
                    <Text style={{width: '60%', color: '#0a0a0a', fontSize: 18, fontFamily: 'Kanit_300Light'}}>Exit</Text>
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
                        textAlign: 'center',
                        color: 'black',
                        marginHorizontal: 3,
                        fontFamily: 'Kanit_300Light',
                        fontSize: 15,
                    }}
                >Don't have an Account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'red',
                            marginHorizontal: 3,
                            fontFamily: 'Kanit_300Light',
                            fontSize: 17,
                        }}
                    >Signup</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}