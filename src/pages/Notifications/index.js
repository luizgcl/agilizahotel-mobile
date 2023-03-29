import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyle } from '../../shared/GlobalStyles'

export function Notifications() {
  return (
    <SafeAreaView>
      <Text style={globalStyle.textBold}>Notificações</Text>
    </SafeAreaView>
  )
}