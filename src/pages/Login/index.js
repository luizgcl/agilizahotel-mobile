import { MapPinLine } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Constants } from '../../../Constants';
import { GeneralInput } from '../../components/GeneralInput';
import { PasswordInput } from '../../components/PasswordInput';
import { styles } from './style';
import * as Animatable from 'react-native-animatable'
import { globalStyle } from '../../shared/GlobalStyles';
import { useLogin } from '../../hooks/use-login';

export function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [isLogged, emailLogged, handleLogin] = useLogin({
    email
  })
  
  useEffect(() => {
    if (isLogged) {
      navigation.navigate('Home')
    }
  }, []);

  const handleClickForgetPassword = () => {
    navigation.navigate('ForgetPassword')
  }

  const handleClickLogin = () => {
    handleLogin({ email, password })
  }

  return (
    <SafeAreaView style={styles.container}>

      <Animatable.View
        animation="flipInY"
        style={styles.headerContainer}
      >
        <MapPinLine
          size={80}
          color={Constants.colors.purple}
        />
        <View
          style={styles.textLogo}
        >
          <Text style={styles.textLogoPartOne}>Agiliza</Text>
          <Text style={styles.textLogoPartTwo}>Hotel</Text>
        </View>
      </Animatable.View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.mainContainer}
      >
        <Text style={globalStyle.textBold}>Bem vindo(a)</Text>
        <View
          style={styles.formContainer}
        >
          <Text style={styles.font}>Usuário</Text>
          <GeneralInput
            placeholder="Digite seu e-mail"
            autoCapitalize="none"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />

          <Text style={styles.font}>Senha</Text>
          <PasswordInput
            updatePassword={(password) => setPassword(password)}
          />

          <View
            style={{
              ...styles.textLogo,
              marginTop: 6,
              alignItems: 'center'
            }}
          >
            <Text style={styles.font}>Esqueceu a senha? </Text>
            <TouchableOpacity
              onPress={handleClickForgetPassword}
            >
              <Text
                style={{
                  ...styles.font,
                  color: Constants.colors.purple
                }}
              >
                Clique aqui
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={styles.buttonContainer}
          >
            <TouchableOpacity
              style={styles.joinButton}
              onPress={handleClickLogin}
            >
              <Text style={styles.accessText}>Acessar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </SafeAreaView>
  )
}