import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';


export default function Nav({ navigation }) {
    return (
        <View style={styles.rowButton}>
            <View style={styles.navButton}>
                <View>
                    <MaterialIcons name="home" size={84} color="black" onPress={() => navigation.navigate('Home')} />
                </View>
            </View>
            <View style={styles.navButton}>
                <View>
                    <MaterialCommunityIcons name="nutrition" size={84} color="black" onPress={() => navigation.navigate('Macro')} />
                </View>
            </View>
            <View style={styles.navButton}>
                <View>
                    <FontAwesome5 style={{ marginBottom: 4 }} name="nutritionix" size={84} color="black" onPress={() => navigation.navigate('Food Log')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rowButton: {
        height: 200,
        width: "100%",
        flexDirection: "row",
        borderWidth: 1,
        color: "#ff8584",
        justifyContent: "space-evenly",
    },

    navButton: {
        height: 89,
        width: "25%",
        flexDirection: "row",
        borderWidth: 1,
        marginTop: 14,
        padding: 2,
        backgroundColor: "#F5B17B",
        justifyContent: "center",
        alignItems: "flex-end",

    }
})