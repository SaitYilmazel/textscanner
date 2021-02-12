//Imports
import styles from './styles';

//Libraries
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import { CustomTextInput } from '../../components/index'


class screen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',

                    }}
                    source={{
                        uri:
                            "https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
                    }}>
                    <View
                        style={{
                            backgroundColor: "rgba(255,255,255,0.45)",
                            width: Dimensions.get('window').width * 0.9,
                            borderRadius: 24,
                            marginBottom: 20,
                            alignSelf: "center",
                            justifyContent: 'center',
                            height: true ? 250 : 350,
                            marginTop: Dimensions.get('window').height * 0.55,
                        }}>
                        <CustomTextInput
                            label={"E-Posta"}
                            iconName={'https://raw.githubusercontent.com/WrathChaos/react-native-login-screen/master/lib/local-assets/user.png'}
                            style={{
                                backgroundColor: "#ffffff",
                                margin: 20,
                                borderRadius: 20,
                            }}
                            activeColor={"#1F85DE"}
                            passiveColor={"#000000"}
                            borderColor={"#1F85DE"} />
                        <CustomTextInput
                            label={"Şifre"}
                            style={styles.input}
                            passwordhide={true}
                            iconName={'https://raw.githubusercontent.com/WrathChaos/react-native-login-screen/master/lib/local-assets/password.png'}
                            style={{
                                backgroundColor: "#ffffff",
                                marginLeft: 20,
                                borderRadius: 20,
                                marginRight: 20,

                            }}
                            borderColor={"#1F85DE"}
                            activeColor={"#1F85DE"}
                            passiveColor={"#000000"}
                        />
                        <View
                            style={{
                                flex: 1,
                                margin: 16,
                                alignItems: "center",
                                flexDirection: "row",
                            }}>
                            <TouchableOpacity
                                style={{
                                    padding: 10,
                                    minHeight: 30,
                                    borderRadius: 16,
                                    margin: 30,
                                    marginLeft: "auto",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "rgba(0,0,0,0.45)",
                                }}
                                activeOpacity={0.7}>
                                <Image style={{ transform: [{ rotate: '180deg' }], width: 15, height: 15, marginRight: 5 }} source={{ uri: "https://raw.githubusercontent.com/WrathChaos/react-native-login-screen/master/lib/local-assets/right-arrow.png" }}></Image>
                                <Text style={{ color: "#fdfdfd", fontWeight: "700", marginRight: 5 }}>Kayıt Ol</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    padding: 10,
                                    minHeight: 30,
                                    borderRadius: 16,
                                    margin: 30,
                                    marginRight: "auto",
                                    flexDirection: "row",
                                    backgroundColor: "rgba(0,0,0,0.45)",
                                }}
                                activeOpacity={0.7}>
                                <Text style={{ color: "#fdfdfd", fontWeight: "700", marginLeft: 5 }}>Giriş Yap</Text>
                                <Image style={{ width: 15, height: 15, marginLeft: 5 }} source={{ uri: "https://raw.githubusercontent.com/WrathChaos/react-native-login-screen/master/lib/local-assets/right-arrow.png" }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
// Default Props
screen.defaultProps = {};
screen.propTypes = {};

export default screen;