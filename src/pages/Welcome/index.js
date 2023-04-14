import React from 'react'
import { styles } from './style'
import { ImageBackground, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import { globalStyle } from '../../shared/GlobalStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export function Welcome() {
    const naviagation = useNavigation();

    const handleClickInLogin = () => {
        naviagation.navigate('Login')
    }

    const handleClickInSignUp = () => {
        naviagation.navigate('SignUp')
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            <Animatable.View
                delay={200}
                animation="flipInY"
                style={styles.headerContainer}
            >
                <View style={styles.text}>
                    <Text style={styles.text.logoPartOne}>Agiliza</Text>
                    <Text style={styles.text.logoPartTwo}>Hotel</Text>
                </View>
            </Animatable.View>
            <Animatable.View
                delay={600}
                animation="fadeInUp"
                style={styles.mainContainer}
            >
                <Text
                    style={globalStyle.textBold}
                >
                    Faça reservas em hotéis na palma da sua mão!
                </Text>
                <Text style={styles.welcomeText}>
                    Cadastre-se no sistema, ou acesse para começar.
                </Text>

                <View style={styles.buttonView}>
                    <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.button}
                            onPress={handleClickInSignUp}
                        >
                        <Text style={styles.buttonText}>Cadastre-se</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.button}
                        onPress={handleClickInLogin}
                    >
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </SafeAreaView>
    )
}