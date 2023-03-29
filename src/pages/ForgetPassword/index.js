import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GeneralInput } from '../../components/GeneralInput'
import { styles } from './style'

export function ForgetPassword() {
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
        />
      </View>

      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>Redefinir</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}