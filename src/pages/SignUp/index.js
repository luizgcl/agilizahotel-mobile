import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { GeneralInput } from '../../components/GeneralInput'
import { PasswordInput } from '../../components/PasswordInput'
import { globalStyle } from "../../shared/GlobalStyles";
import * as Animatable from 'react-native-animatable'
import { firebase } from '../../../firebase-connection'
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useLogin } from "../../hooks/use-login";
import { DocumentInput } from "../../components/DocumentInput";

export function SignUp () {
    const navigation = useNavigation();

    const [email, setEmail] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    const [isLogged, loggedUser, handleLogin] = useLogin({ email });

    const handleClickRegister = () => {
        if (!email || !cpf || !name || !password) {
            Alert.alert('Ops!', 'Preencha todos os campos para prosseguir com o cadastro.')
            return;
        }

        if (!new RegExp(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})*$/).test(cpf)) {
            Alert.alert('Ops!', 'O CPF informado é invalido.')
            return;
        }

        firebase.app().auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                if (user) {
                    firebase.app().database().ref(`users/${email.toLowerCase().replace('.com', '')}`).set({
                        name,
                        cpf,
                    })
                    .then(() => {
                        handleLogin({email, password})
                    })
                    .catch(() => {
                        Alert.alert('Ops!', 'Ocorreu um erro ao cadastrar seus dados.')
                        navigation.navigate('Welcome')
                    })
                }
            })
            .catch((err) => {
                console.error(err)
                Alert.alert('Ops!', 'Ocorreu um erro ao cadastrar seus dados.')
                navigation.navigate('Welcome')
            })
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            <View style={styles.headerContainer}>
                <Text style={globalStyle.textBold}>Cadastre-se</Text>
            </View>
            <Animatable.View 
                delay={300}
                animation="fadeInUp"
                style={styles.mainContainer}
                >
                <Text style={styles.label}>Nome completo</Text>
                <GeneralInput
                    placeholder="Digite seu nome"
                    onChangeText={setName}
                />
                <Text style={styles.label}>CPF</Text>
                <DocumentInput
                    placeholder="Informe seu CPF"
                    updateDocument={setCpf}
                />
                <Text style={styles.label}>E-mail</Text>
                <GeneralInput
                    placeholder="Informe seu e-mail"
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>Senha</Text>
                <PasswordInput
                    updatePassword={(password) => setPassword(password)}
                />

                <View
                    style={styles.buttonView}
                >
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.button}
                        onPress={handleClickRegister}
                    >
                        <Text style={styles.buttonText}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </SafeAreaView>
    )
}