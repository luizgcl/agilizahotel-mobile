import React from "react"
import { TextInput } from "react-native";
import { style } from "./style";

export function GeneralInput(props) {
    return (
        <TextInput
            style={style.input}
            placeholderTextColor='#3c3c3c'
            {...props}
        />
    )
}