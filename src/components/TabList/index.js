import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./style";
import { Constants } from "../../../Constants";








export function TabList({ state, descriptors, navigation }) {
    return (
      <View style={styles.navContainer}>
        {state.routes.map((route) => {
            const [isPressed, setPressed] = useState()

            const { options } = descriptors[route.key];
            
            function handleClickIcon () {
              navigation.navigate(route.name);
              setTimeout(() => {
                setPressed(false)
              }, 0.2 * 1000)
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                activeOpacity={1}
                onPress={handleClickIcon}
                onPressIn={() => setPressed(true)}
                key={route.key}
              >
                { options.tabBarIcon({ color: isPressed ? Constants.colors.purple : '#111', size: 32 }) }
              </TouchableOpacity>
            );
        })}
      </View>
    );
}