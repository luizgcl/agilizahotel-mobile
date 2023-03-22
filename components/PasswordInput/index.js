import { useState } from "react";
import { GeneralInput } from "../GeneralInput"
import {TextInput} from "react-native";
import {Eye} from "phosphor-react-native";

export function PasswordInput() {
    const [passwordController, changePassword] = useState({
        view: '',
        value: ''
    });

    const handleEditPassword = (text) => {
        changePassword({
            view: text.split('').map((letter) => letter.replace(letter, '*')).join(''),
            value: text
        })
    }

    return (
    <TextInput
        secureTextEntry={true}
        ></TextInput
>
    )
}