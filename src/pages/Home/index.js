import React from 'react'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { style } from './style'
import { globalStyle } from '../../shared/GlobalStyles'
import { Constants } from "../../../Constants"

export function Home() {
  return (
    <SafeAreaView>
      <Image
        style={style.imageCard}
        source={require('../../assets/promocao.png')}
      />
      <View style={style.content}>
        <Text style={style.titleOne}>Hotéis Disponíveis</Text>
          <FlatList
            data={[
              { key: '1', name: 'Suíte Master, Plaza Hotel', value: 250, locale: 'Minas Gerais, MG' },
              { key: '2', name: 'Suíte Comum, Hotel Imperial', value: 130, locale: 'São José do Rio Preto, SP' },
              { key: '3', name: 'Suíte Master Deluxe, Dream Hotel', value: 300, locale: 'Búzios, RJ' },
            ]}
            keyExtractor={(_, index) => index}
            renderItem={
              ({ item }) => (
                <View
                  style={style.card}
                >
                  <Text
                    style={{
                      ...globalStyle.textBold,
                      fontSize: 16
                    }}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Text>{item.locale}</Text>
                    <Text
                      style={{
                        ...globalStyle.textBold,
                        fontSize: 14
                      }}>
                      {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.value)}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        padding: 8,
                        backgroundColor: Constants.colors.green,
                        borderRadius: 10
                      }}
                    >
                      <Text
                        style={{ color: 'white', fontWeight: 900 }}
                      >Reservar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }
          />
      </View>
    </SafeAreaView>
  )
}