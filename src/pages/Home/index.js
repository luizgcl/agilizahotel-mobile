import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { globalStyle } from '../../shared/GlobalStyles'
import { firebase } from "../../../firebase-connection";
import { HotelItemList } from '../../components/HotelItemList'

export function Home({ navigation }) {
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    firebase.app().database().ref('hoteis').get().then((response) => {
      Object.keys(response.val()).forEach((id) => setHotels((prev) => {

        if (!prev.find((x) => x.key === id))
          prev.push({ ...response.val()[id], key: id })

        return [...prev]
      }))
    })
  }, [])

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={
        () => navigation.navigate('ViaCep')
      }><Text>ViaCEP</Text></TouchableOpacity>
      <View
        style={styles.imageContainer}
      >
        <Image
          style={styles.imageCard}
          source={require('../../assets/promocao.png')}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.titleOne}>Hotéis Disponíveis</Text>
          <FlatList
            data={hotels}
            keyExtractor={(_, index) => index}
            renderItem={
              ({ item }) => (
                <HotelItemList
                  hotel={item}
                />
              )
            }
          />
      </View>
    </SafeAreaView>
  )
}