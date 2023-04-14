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

    const [user, setUser] = useState({ name: '', cpf: '' })

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

    const handleClickLeaveApp = () => {
        handleLogout()
        navigation.navigate('Welcome')
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View
                style={styles.userContainer}
            >
                <Image
                    style={styles.userImage}
                    source={
                        emailLogged?.toLowerCase() == 'luiizgcl@gmail.com' ?
                        {uri: 'https://github.com/luizgcl.png'} :
                        require('../../assets/avatar.png')
                    }
                />
                <View>
                    <Text
                        style={globalStyle.textBold}
                    >
                        {user?.name}
                    </Text>
                    <Text>
                        {emailLogged?.toLowerCase()}
                    </Text>
                </View>
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