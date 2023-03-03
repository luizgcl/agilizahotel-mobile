import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style'
import { GeneralInput } from '../../components/GeneralInput'
import { PasswordInput } from '../../components/PasswordInput'
import { MapPinLine } from 'phosphor-react-native';
import { Constants } from '../../Constants'

export function Login() {
    return (
        <View style={styles.container}>

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
              <Button
                style={styles.font}
                title='Clique aqui'
                color={'#85c'}
              />
            </View>
          </View>
    
          <TouchableOpacity
            style={styles.joinButton}
          >
            <Text style={styles.accessText}>Acessar</Text>
          </TouchableOpacity>
      </View>   
    )
}