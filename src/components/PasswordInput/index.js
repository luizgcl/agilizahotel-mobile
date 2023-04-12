import { Eye, EyeClosed } from "phosphor-react-native";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Constants } from "../../../Constants";
import { GeneralInput } from "../GeneralInput";
import { style } from "./styles";

export function PasswordInput({ updatePassword }) {
    const [password, setPassword] = useState();
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const handleTypePassword = (text) => {
        setPassword(text)
        updatePassword(text)
    }

    return (
        <View style={style.view}>
            <GeneralInput
                placeholder="Digite sua senha"
                secureTextEntry={!isPasswordVisible}
                collapsable={true}  
                value={password}
                onChangeText={handleTypePassword}      
            />
            <TouchableOpacity
                onPress={() => setPasswordVisible(!isPasswordVisible)}        
            >
                {isPasswordVisible ?
                    <EyeClosed
                        size={32}
                        color={Constants.colors.purple}
                    /> :
                    <Eye
                        size={32}
                        color={Constants.colors.purple}
                    />
                }
            </TouchableOpacity>
        </View>
    )
}