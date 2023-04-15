import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GeneralInput } from '../../components/GeneralInput'
import { styles } from './style'
import * as Animatable from 'react-native-animatable'
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
        Alert.alert('Redefinição de senha', 'Um e-mail foi enviado para você realizar a redefinição de senha, verifique seu e-mail e redefina sua senha de acesso!')
      })
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.header}>
        <Text
          style={styles.title}
        >
          Recuperação de senha
        </Text>
      </View>

      <Animatable.View 
        animation="fadeInUp"
        style={styles.main}
        >
        <View>
          <Text style={styles.text}>E-mail</Text>

          <GeneralInput
            placeholder="Informe o e-mail cadastrado"
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleClickResetPassword}
          >
            <Text style={styles.buttonText}>Redefinir senha</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  )
}