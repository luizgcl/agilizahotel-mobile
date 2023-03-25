import { MapPinLine } from 'phosphor-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Constants } from '../../../Constants';
import { GeneralInput } from '../../components/GeneralInput';
import { PasswordInput } from '../../components/PasswordInput';
import { styles } from './style';

export function Login() {
    return (
        <SafeAreaView style={styles.container}>

          <MapPinLine
            size={80}
            color={Constants.colors.purple}
          />
          
          <View
            style={styles.textLogo}
          >
            <Text style={styles.textLogoPartOne}>Agiliza</Text>
            <Text style={styles.textLogoPartTwo}>Hotel</Text>
          </View>
    
          <View>
            <Text>Usuário</Text>
            <GeneralInput
              placeholder="E-mail ou nome de usuário"
            />
    
            <Text>Senha</Text>
            <PasswordInput />
    
            <View
              style={{
                ...styles.textLogo,
                marginTop: 6,
                alignItems: 'center'
              }}
            >
              <Text style={styles.font}>Esqueceu a senha? </Text>
              <TouchableOpacity>
                <Text 
                  style={{
                    ...styles.font,
                    color: '#85c'
                  }}  
                  >
                    Clique aqui
                </Text>
              </TouchableOpacity>
            </View>
          </View>
    
          <TouchableOpacity
            style={styles.joinButton}
          >
            <Text style={styles.accessText}>Acessar</Text>
          </TouchableOpacity>
      </SafeAreaView>   
    )
}