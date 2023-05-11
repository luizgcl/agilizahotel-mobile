import { ArrowLeft, Barricade, Info } from "phosphor-react-native"
import React, { useEffect, useState } from "react"
import { Text, TouchableOpacity } from "react-native"
import { Image, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { globalStyle } from "../../shared/GlobalStyles"
import { styles } from "./style"
import { useLogin } from "../../hooks/use-login"
import { firebase } from '../../../firebase-connection'

export function MyAccount({ navigation }) {
    const [isLogged, emailLogged, _, handleLogout] = useLogin({ email: '' })
    const [pressed, setPressed] = useState()

    const [user, setUser] = useState({ name: '', cpf: '', imageBase64: '' })

    useEffect(() => {
        if (isLogged)
            firebase.app().database()
                .ref(`users/${emailLogged.toLowerCase().replace('.com', '')}`)
                .get()
                .then((value) => {
                    let userFromDatabase = JSON.parse(JSON.stringify(value))
                    setUser(userFromDatabase)
                })
                .catch((err) => console.error(err))
    }, [])

    const handleClickViewMyInformation = () => {
        navigation.navigate('MyPersonalInformation', { email: emailLogged });
    }

    const handleClickLeaveApp = () => {
        handleLogout()
        navigation.navigate('Welcome')
    }

    const handleClickDisableAccount = () => {
        firebase.app().auth().currentUser.delete().then(() => {
            handleLogout()
        })
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View
                style={styles.userContainer}
            >
                <Image
                    style={styles.userImage}
                    source={
                        user ? {uri: 'data:image/png;base64,' + user.imageBase64 } :
                            require('../../assets/avatar.png')
                    }
                />
                <View>
                    <Text
                        style={globalStyle.textBold}
                    >
                        {user?.name}
                    </Text>
                    <Text style={styles.text}>
                        {emailLogged?.toLowerCase()}
                    </Text>
                </View>
            </View>

            <View style={styles.cardContainer}>
                <TouchableOpacity
                    style={styles.cardButton}
                    onPress={handleClickViewMyInformation}
                >
                    <Info
                        size={styles.cardButton.iconSize}
                        color={'#222'}
                    />
                    <Text style={styles.cardButtonText}>
                        Dados pessoais
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleClickDisableAccount}
                    style={styles.cardButton}
                >
                    <Barricade
                        size={styles.cardButton.iconSize}
                        color={'#222'}
                    />
                    <Text style={styles.cardButtonText}>
                        Desativar conta
                    </Text>
                </TouchableOpacity>
                
            </View>
            <View style={{marginTop: 15}}>
                <TouchableOpacity
                        style={pressed ? styles.accountButtonHover : styles.accountButton}
                        activeOpacity={0.9}
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