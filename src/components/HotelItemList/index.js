import { Text, TouchableOpacity, View } from "react-native";
import { globalStyle } from '../../shared/GlobalStyles'
import { styles } from "./style";

export function HotelItemList({ hotel }) {
    return (
        <View
            style={styles.hotelCard}
        >
            <Text
                style={{
                    ...globalStyle.textBold,
                    fontSize: 16
                }}>
                {hotel.name}
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text style={styles.text}>
                    {hotel.locale}, {hotel.uf}
                </Text>
            </View>
            <View
                style={styles.hotelCardContainer}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.hotelCardButton}
                >
                    <Text
                        style={styles.hotelCardButtonText}
                    >
                        Ver opções
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}