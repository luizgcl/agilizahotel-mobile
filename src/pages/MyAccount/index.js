import { ArrowLeft } from "phosphor-react-native"
import React from "react"
import { Text, Touchable, TouchableOpacity } from "react-native"
import { Image, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { globalStyle } from "../../shared/GlobalStyles"
import { styles } from "./style"

export function MyAccount({ navigation }) {

    const handleClickLeaveApp = () => {
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView>
            <View
                style={styles.userContainer}
            >
                <Image
                    style={styles.userImage}
                    source={require('../../assets/avatar.png')}
                />
                <Text
                    style={globalStyle.textBold}
                >
                    Luiz Gustavo
                </Text>
            </View>

            <TouchableOpacity
                style={styles.leaveButton}
                onPress={handleClickLeaveApp}
            >
                <ArrowLeft
                    size={20}
                    color={'white'}
                />
                <Text style={styles.leaveText}>
                    Sair
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}