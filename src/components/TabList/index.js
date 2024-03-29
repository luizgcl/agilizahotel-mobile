import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./style";
import { Constants } from "../../../Constants";

export function TabList({ state, descriptors, navigation }) {
    return (
      <View style={styles.navContainer}>
        <View style={styles.content}>
          {state.routes.map((route, index) => {
              const [isPressed, setPressed] = useState()
              const { options } = descriptors[route.key];

              const isFocused = state.index === index
              
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
                  <View style={styles.button}>
                    <View 
                      style={[styles.innerButton, {
                        backgroundColor: isFocused ? '#f8e2fd' : 'transparent'
                      }]}>
                      { options.tabBarIcon({ 
                          color: isPressed || isFocused ?
                           Constants.colors.purple : '#111', 
                          size: 32 
                        }) 
                      }
                    </View>
                  </View>
                </TouchableOpacity>
              );
          })}
        </View>
      </View>
    );
}