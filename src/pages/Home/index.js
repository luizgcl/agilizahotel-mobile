import React from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { style } from './style'

export function Home() {
  return (
      <SafeAreaView>
        <Image
          style={style.imageCard}
          source={require('../../assets/quarto-de-hotel.jpg')}
        />
       <SafeAreaView
        style={style.promotionView}
       >
        <View
          style={{flexDirection: 'row', gap: 6}}
        >
          <View>
            <Text>Descontos de</Text>
          </View>
          <View>
            <Text>
              20%
            </Text>
          </View>
          <View>
            <Text>OFF</Text>
          </View>
        </View>
       </SafeAreaView>
       <View style={style.content}>
        <Text style={style.titleOne}>Hotéis Disponíveis</Text>
       </View>
      </SafeAreaView>
  )
}