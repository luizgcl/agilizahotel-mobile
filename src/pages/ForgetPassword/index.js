import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GeneralInput } from '../../components/GeneralInput'
import { styles } from './style'
import {firebase} from '../../../firebase-connection'

export function ForgetPassword({ navigation }) {
  const [email, setEmail] = useState('');

  const handleClickResetPassword = () => {
    if (!email) {
      alert('Preencha o campo de e-mail para prosseguir!')
      return;
    }
    firebase.app().auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        navigation.navigate('Login')
        alert('Um e-mail foi enviado para você realizar a redefinição de senha, verifique seu e-mail e redefina sua senha de acesso!')
      })
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text
        style={styles.title}
      >
        Recuperação de senha
      </Text>

      <View>
        <Text>E-mail</Text>

        <GeneralInput
          placeholder="Informe o e-mail cadastrado"
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleClickResetPassword}
      >
        <Text style={styles.buttonText}>Redefinir senha</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}