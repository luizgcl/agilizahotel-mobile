import { TextInputMask } from "react-native-masked-text";
import { style } from '../GeneralInput/style'
import { useState } from "react";
import { Keyboard } from "react-native";

export function DocumentInput(props) {
    const [document, setDocument] = useState()

    const handleChangeText = (text) => {
        setDocument(text)
        props.updateDocument(text)
        // Keyboard.dismiss()
    }

    return (
        <TextInputMask
            style={style.input}
            type={'cpf'}
            value={document ? document : props.document} 
            onChangeText={handleChangeText}
            placeholderTextColor='#3c3c3c'
            {...props}
        />
    )
}