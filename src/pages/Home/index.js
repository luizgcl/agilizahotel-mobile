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
          <Text
              style={style.promotionText}
            >
              Não percam
            </Text>
          <Text
              style={{
                ...style.promotionText,
                color: '#07dfe3'
              }}
            >
              20% OFF
          </Text>
        </View>
        <Text
            style={style.promotionText}
          >
            na sua primeira reserva!
        </Text>
       </SafeAreaView>
       <View style={style.content}>
        <Text style={style.titleOne}>Hotéis Disponíveis</Text>
       </View>
      </SafeAreaView>
  )
}