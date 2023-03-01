import { useState } from "react";
import { GeneralInput } from "../GeneralInput"

export function PasswordInput() {
    const [passwordController, changePassword] = useState({
        view: '',
        value: ''
    });

    handleEditPassword = (text) => {
        changePassword({
            view: text.split('').map((letter) => letter.replace(letter, '*')).join(''),
            value: text
        })
    }

    return (
        <GeneralInput
            autoCorrect={false}
            placeholder="Digite sua senha"
            onChangeText={handleEditPassword}
            value={passwordController.view}
        />
    )
}