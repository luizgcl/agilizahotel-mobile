import { ArrowLeft, Barricade, Info } from "phosphor-react-native"
import React, { useState } from "react"
import { Text, TouchableOpacity } from "react-native"
import { Image, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { globalStyle } from "../../shared/GlobalStyles"
import { styles } from "./style"

export function MyAccount({ navigation }) {
    const [pressed, setPressed] = useState()

    const handleClickLeaveApp = () => {
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View
                style={styles.userContainer}
            >
                <Image
                    style={styles.userImage}
                    source={require('../../assets/avatar.png')}
                />
                <Text
                    style={globalStyle.textBold}
                >
                    Luiz Gustavo
                </Text>
            </View>

            <View style={{gap: 1}}>
                <TouchableOpacity
                    style={styles.accountButton}
                >
                    <Info
                        size={20}
                        color={'#222'}
                    />
                    <Text style={styles.accountButtonText}>
                        Informações pessoais
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.accountButton}
                >
                    <Barricade
                        size={20}
                        color={'#222'}
                    />
                    <Text style={styles.accountButtonText}>
                        Desativar conta
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={pressed ? styles.accountButtonHover : styles.accountButton}
                    onPress={handleClickLeaveApp}
                    onPressIn={() => setPressed(true)}
                    onPressOut={() => setPressed(false)}
                >
                    <ArrowLeft
                        size={20}
                        color={pressed ? '#fff' : '#222'}
                    />
                    <Text style={pressed ? styles.accountButtonTextHover : styles.accountButtonText}>
                        Sair do App
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}