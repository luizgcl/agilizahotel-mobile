import { ArrowLeft, CheckCircle } from "phosphor-react-native"
import React, { useEffect, useState } from "react"
import { Alert, Text, TouchableOpacity, } from "react-native"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./style"
import { GeneralInput } from "../../components/GeneralInput"
import { DocumentInput } from "../../components/DocumentInput"
import { useLogin } from "../../hooks/use-login"
import { firebase } from '../../../firebase-connection'
import { PasswordInput } from "../../components/PasswordInput"

export function EditMyInformation({ navigation }) {
    const [isLogged, emailLogged, handleLogin, handleLogout] = useLogin({ email: '' })
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        cpf: '',
        password: '',
    });

    useEffect(() => {
        firebase.app().database().ref(`users/${emailLogged.toLowerCase().replace('.com', '')}`).get()
            .then((value) => {
                let userFromDatabase = JSON.parse(JSON.stringify(value))
                console.log(value)
                setFormValues({
                    email: emailLogged,
                    name: userFromDatabase.name,
                    cpf: userFromDatabase.cpf,
                })
            })
            .catch((err) => console.error(err))
    }, [])

    async function updateUserData() {
        if (emailLogged != formValues.email) {
            firebase.app().database().ref(`users/${emailLogged.toLowerCase().replace('.com', '')}`).remove().then(() => {
                firebase.app().database().ref(`users/${formValues.email.toLowerCase().replace('.com', '')}`).set({
                    name: formValues.name,
                    cpf: formValues.cpf
                }).then(() => {
                    firebase.app().auth().signInWithEmailAndPassword(emailLogged, formValues.password).then(() => {
                        firebase.app().auth().signOut().then(() => {
                            firebase.app().auth().createUserWithEmailAndPassword(
                                formValues.email,
                                formValues.password
                            )
                            .then(() => 
                                handleLogin(formValues.email, formValues.password))
                        })
                    })
                    Alert.alert('Dados atualizados com sucesso!')
                    navigation.navigate('MyPersonalInformation')
                })
                .catch(() => {
                    Alert.alert('Ops!', 'Ocorreu um erro ao cadastrar seus dados.')
                    navigation.navigate('Home')
                })
            })
        } else {
            firebase.app().database().ref(`users/${formValues.email.toLowerCase().replace('.com', '')}`).set({
                name: formValues.name,
                cpf: formValues.cpf
            }).then(() => {
                Alert.alert('Dados atualizados com sucesso!')
                navigation.navigate('MyPersonalInformation')
            }).catch(() => {
                Alert.alert('Ops!', 'Ocorreu um erro ao cadastrar seus dados.')
                navigation.navigate('Home')
            })
        }
    }

    function handleChangeValues(key, value) {
        setFormValues((prev) => {
            prev[key] = value
            return {
                ...prev,
            }
        })
    }

    function handleClickBack() {
        navigation.navigate('MyPersonalInformation')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headContainer}>
                 <Text style={styles.headTitle}>Editar Informações</Text>
            </View>
            <View style={styles.mainContainer}>
                <View>
                    <Text>Nome: </Text>
                    <GeneralInput
                        placeholder="Nome completo"
                        autoCapitalize="none"
                        value={formValues.name}
                        onChangeText={(name) => handleChangeValues('name', name)}
                    />
                </View>
                <View>
                    <Text>CPF: </Text>
                    <DocumentInput
                        document={formValues.cpf}
                        placeholder="Informe seu CPF"
                        updateDocument={(cpf) => handleChangeValues('cpf', cpf)}
                    />
                </View>
                <View>
                    <Text>E-mail: </Text>
                    <GeneralInput
                        placeholder="Digite seu e-mail"
                        autoCapitalize="none"
                        value={formValues.email}
                        onChangeText={(email) => handleChangeValues('email', email)}
                    />
                </View>
                <View>
                    <Text>Senha: </Text>
                    <PasswordInput
                        updatePassword={(password) => handleChangeValues('password', password)}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={updateUserData}
                        style={[styles.button, styles.confirmButton]}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={handleClickBack}
                        style={[styles.button, styles.backButton]}>
                        <ArrowLeft size={20} color="#000"/>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}