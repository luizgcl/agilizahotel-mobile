import { StatusBar } from 'expo-status-bar';
import { Login } from './pages/Login';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Login
      />

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
  }
});
