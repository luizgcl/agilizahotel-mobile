import { useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { GeneralInput } from "../../components/GeneralInput"
import { MagnifyingGlass } from "phosphor-react-native"
import * as Animatable from "react-native-animatable"
import { styles } from "./style"


export const ViaCep = () => {
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState(null);

    useEffect(() => {}, [address])

   async function handleClickSearchCep() {
        await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((cityResponse) => {
                if (cityResponse) {
                    setAddress(cityResponse)
                }
            })
            .catch(console.error)
    }

    return (<SafeAreaView style={styles.mainContainer}>
        <View style={styles.searchContainer}>
            <Text style={styles.title}>Buscar CEP</Text>
            <Text>CEP</Text>
            <GeneralInput
                placeholder="Digite o cep..."
                onChangeText={setCep}
            />
            <TouchableOpacity 
                activeOpacity={0.8}
                style={styles.searchButton}
                onPress={async () => { await handleClickSearchCep() }}
            >
                <MagnifyingGlass
                    size={20}
                    color={"#fff"}
                />
                <Text style={styles.searchButtonText}>Pesquisar</Text>
            </TouchableOpacity>
        </View>
        {address && <View style={styles.responseContainer}>
            {address.cep && <Animatable.View
                animation={"fadeInUp"}
            >
            <Text style={styles.responseTitle}>
                Conteúdo pesquisado
            </Text>
            <Text style={styles.responseText}>
                Cep: { address.cep }
            </Text>
            <Text style={styles.responseText}>
                Logradouro: { address.logradouro ?? 'Não informado' }
            </Text>
            <Text style={styles.responseText}>
                Complemento: { address.complemento ?? 'Não informado' }
            </Text>
            <Text style={styles.responseText}>
                Bairro: { address.bairro ?? 'Não informado' }
            </Text>
            <Text style={styles.responseText}>
                Localidade: { address.localidade }
            </Text>
            <Text style={styles.responseText}>
                UF: { address.uf }
            </Text>
            <Text style={styles.responseText}>
                DDD: { address.ddd }
            </Text>
        </Animatable.View>}
        {!address.cep && <Animatable.View
                animation={"fadeInUp"}
            >
            <Text style={styles.responseTitle}>
                Cep inválido! Tente pesquisar novamente por outro cep.
            </Text>
            </Animatable.View>}
        </View>}
    </SafeAreaView>)
}