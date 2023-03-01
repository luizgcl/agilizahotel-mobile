import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GeneralInput } from './components/GeneralInput';
import { PasswordInput } from './components/PasswordInput';

export default function App() {
  return (
    <View style={styles.container}>

      <View
        style={styles.textLogo}
      >
        <Text style={styles.textLogoPartOne}>Agiliza</Text>
        <Text style={styles.textLogoPartTwo}>Hotel</Text>
      </View>

      <View>
        <Text>Usuário</Text>
        <GeneralInput
          placeholder="E-mail ou nome de usuário"
        />

        <Text>Senha</Text>
        <PasswordInput />

        <View
          style={{
            ...styles.textLogo,
            marginTop: 6,
            alignItems: 'center'
          }}
        >
          <Text style={styles.font}>Esqueceu a senha? </Text>
          <Button
            style={styles.font}
            title='Clique aqui'
            color={'#85c'}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.joinButton}
      >
        <Text style={styles.accessText}>Acessar</Text>
      </TouchableOpacity>

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30
  },
  font: {
    fontSize: 20
  },
  textLogoPartOne: {
    color: '#00bf63',
    fontWeight: 'bold',
    fontSize: 35
  },
  textLogoPartTwo: {
    color: '#85c',
    fontWeight: 'bold',
    fontSize: 35
  },
  textLogo: {
    flexDirection: 'row'
  },
  accessText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  joinButton: {
    marginBottom: 40,
    backgroundColor: '#00bf63',
    padding: 10,
    borderRadius: 8,
    width: 180,
    alignItems: 'center',
  }
});
