import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyle } from '../../shared/GlobalStyles'
import { styles } from './style'

export function Notifications() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={globalStyle.textBold}>Notificações</Text>
      <View style={styles.notificationsContainer}>
        <Text style={styles.noneNotificationsText}>
          Sem notificações por aqui...
        </Text>
      </View>
    </SafeAreaView>
  )
}