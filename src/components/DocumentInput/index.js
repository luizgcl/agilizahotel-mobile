import { TextInputMask } from "react-native-masked-text";
import { style } from '../GeneralInput/style'
import { useState } from "react";

export function DocumentInput(props) {
    const [document, setDocument] = useState()

    const handleChangeText = (text) => {
        setDocument(text)
        props.updateDocument(text)
    }

    return (
        <TextInputMask
            style={style.input}
            type={'cpf'}
            value={document}
            onChangeText={handleChangeText}
            placeholderTextColor='#3c3c3c'
            {...props}
        />
    )
}