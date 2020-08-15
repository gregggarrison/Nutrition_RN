import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function MealsTable({ meal, toggleClick }) {

    const [clickedMeal, setClickedMeal] = useState(null)

    const handlePress = () => {
        setClickedMeal(meal)
        toggleClick(meal)
    }

    return (
        <>
            <View style={styles.itemRow} key={meal.id}>
                <TouchableOpacity onPress={handlePress}>
                    <View style={styles.imgContainer}>
                        <Image source={{ uri: meal.img }} style={styles.img}></Image>
                    </View>
                </TouchableOpacity>
                <View style={styles.nameContainer}>
                    <Text style={styles.textSummaryCenter}>{meal.foodName}</Text>
                </View>
                <View style={styles.qtyContainer}>
                    <Text style={styles.textSummaryCenter}>{meal.serveQty}</Text>
                </View>
                <View style={styles.unitContainer}>
                    <Text onPress={handlePress} style={styles.textSummaryCenter}>{meal.serveUnit}</Text>
                </View>
                <View style={styles.qtyContainer}>
                    <Text style={styles.textSummaryCenter}>{meal.calories}g</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    textSummaryCenter: {
        color: "#ff8584",
        fontSize: 14,
        textAlign: "center",
    },

    itemRow: {
        height: 50,
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
    },

    imgContainer: {
        height: "100%",
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
    },

    img: {
        height: 45,
        width: 45,
    },

    nameContainer: {
        height: "100%",
        width: "25%",
        justifyContent: "center",
        alignItems: "center",
    },

    qtyContainer: {
        height: "100%",
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
    },

    unitContainer: {
        height: "100%",
        width: "25%",
        justifyContent: "center",
        alignItems: "center",
    },

})