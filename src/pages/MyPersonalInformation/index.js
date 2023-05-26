import { ArrowLeft, Barricade, Info } from "phosphor-react-native"
import React, { useEffect, useState } from "react"
import { Alert, Image, Text, TouchableOpacity } from "react-native"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { globalStyle } from "../../shared/GlobalStyles"
import { styles } from "./style"
import { useLogin } from "../../hooks/use-login"
import { firebase } from '../../../firebase-connection'
import { launchCamera, launchImageLibrary } from "react-native-image-picker"

export function MyPersonalInformation({ navigation }) {
    const [isLogged, emailLogged, _, handleLogout] = useLogin({ email: '' })
    const [avatar, setAvatar] = useState();
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

    function formatCpf(text) {
        const badChars = /[^\d]/g
        const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/
        const cpf = new String(text).replace(badChars, "");
        return cpf.replace(mask, "$1.$2.$3-$4");
    }

    function handleClickEditUserInfo() {
        navigation.navigate('EditMyInformation')
    }

    function handleClickBackPage() {
        navigation.navigate('MyAccount')
    }

    async function handleOpenImagePicker() {
        Alert.alert(
            'Selecione',
            'Informe de onde você irá enviar a foto',
            [
                {
                    text: 'Galeria',
                    style: 'default',
                    onPress: async () => {
                        await handleOpenImageLibrary();
                    }
                },
                {
                    text: 'Camera',
                    style: 'default',
                    onPress: async () => {
                        await handleClickOpenCamera();
                    }
                }
            ],
            {
                cancelable: true,
                onDismiss: () => {}
            }
        );
    }

    async function handleOpenImageLibrary() {
       await launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true,
            includeExtra: true,
            quality: 0.1
        }).then(async (result) => {
            if (result.didCancel) return;

            if (result.errorMessage) return;
    
            const data = result.assets[0]
    
            if (!data.base64) {
                Alert.alert(
                    'Ops!',
                    'Ocorreu um erro ao importar a foto de sua galeria, tente novamente.'
                );
                return;
            }
    
            setAvatar(data);
            await handleUpdateUserInfo();
        }).catch((err) => {
            console.error(err)
            Alert.alert(
                'Ops!',
                'Ocorreu um erro ao importar a foto de sua galeria, tente novamente.'
            );
            return;
        })
    }

    async function handleClickOpenCamera() {
        const options = {
            mediaType: 'photo',
            saveToPhotos: false,
            cameraType: 'front',
            includeBase64: true,
            quality: 1
        }

        const result = await launchCamera(options)

        if (result.didCancel) return;

        if (result.errorMessage) return;

        const [data] = result.assets

        if (!data.base64) {
            Alert.alert(
                'Ops!',
                'Ocorreu um erro ao importar a foto de sua galeria, tente novamente.'
            );
            return;
        }

        setAvatar(data);
    }

    async function handleUpdateUserInfo() {
        firebase.app().database().ref(`users/${emailLogged.toLowerCase().replace('.com', '')}`).set({
            ...user,
            imageBase64: avatar.base64 ? avatar.base64 : avatar.uri
        })
        .then(() => {
            Alert.alert('Imagem salva com sucesso!')
        })
        .catch(() => {
            Alert.alert('Ops!', 'Ocorreu um erro ao cadastrar seus dados.')
            navigation.navigate('Welcome')
        })
    }

    return (
        <SafeAreaView>
            <View style={styles.headContainer}>
                <Text style={globalStyle.textBold}>Seus Dados</Text>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={async() => {
                        await handleOpenImagePicker();
                    }}>
                        <Image
                            style={styles.userImage}
                            source={
                                user ? {
                                    uri: `data:image/png;base64,${user.imageBase64}` 
                                } : require('../../assets/avatar.png')
                            }
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.holderText}>Nome:</Text>
                        <Text style={styles.buttonText}>{user?.name}</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.holderText}>E-mail:</Text>
                        <Text style={styles.buttonText}>{emailLogged}</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.holderText}>CPF:</Text>
                        <Text style={styles.buttonText}>{user.cpf ? formatCpf(user.cpf) : ''}</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={handleClickEditUserInfo}
                        style={[styles.button, styles.editButton]}>
                        <Text style={styles.buttonText}>Editar informações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={handleClickBackPage}
                        style={[styles.button, styles.disableAccountButton]}>
                        <ArrowLeft size={20} color="#000"/>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}