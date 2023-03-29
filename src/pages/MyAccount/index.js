import { ArrowLeft } from "phosphor-react-native"
import React from "react"
import { Text, Touchable, TouchableOpacity } from "react-native"
import { Image, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { globalStyle } from "../../shared/GlobalStyles"

export function MyAccount({ navigation }) {

    const handleClickLeaveApp = () => {
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView>
            <View
                style={{
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'center'
                }}
            >
                <Image
                    style={{ width: 200 }}
                    source={require('../../assets/avatar.svg')}
                />
                <Text
                    style={globalStyle.textBold}
                >
                    Luiz Gustavo
                </Text>
            </View>

            <TouchableOpacity
                style={{
                    padding: 8,
                    backgroundColor: '#EF4444',
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 6,
                    margin: 10
                }}
                onPress={handleClickLeaveApp}
            >
                <ArrowLeft
                    size={20}
                    color={'white'}
                />
                <Text style={{ fontWeight: 900, color: 'white', fontSize: 20 }}>Sair</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}