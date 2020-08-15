import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function SearchResults({ meal }) {

    function findNutrient(id) {
        if (meal.full_nutrients) {
            return meal.full_nutrients.find(nutrient => nutrient["attr_id"] === id)
        }
    }

    function toNumberUnits(nutrient, decimals) {
        const amount = nutrient ? nutrient.value : 0
        return parseFloat(amount).toFixed(decimals)
    }

    const calories = findNutrient(208)
    const lCalories = toNumberUnits(calories, 0)

    return (
        <>
            <View style={styles.rowHeader}>
                <View style={styles.ColHeaderSmall}><Text style={styles.textHeader}></Text></View>
                <View style={styles.ColHeaderBig}><Text style={styles.textHeader}>Item</Text></View>
                <View style={styles.ColHeaderXSmall}><Text style={styles.textHeader}>Qty</Text></View>
                <View style={styles.ColHeaderBig}><Text style={styles.textHeader}>Unit</Text></View>
                <View style={styles.ColHeaderSmall}><Text style={styles.textHeader}>Cal</Text></View>
            </View>

            <View style={styles.rowView}>
                <View style={styles.cellSmall}>
                    <Image source={{ uri: meal.photo.thumb }} style={{ height: 50, width: 50 }}></Image>
                </View>
                <View style={styles.cellBig}>
                    <Text style={styles.text}>{meal.food_name}</Text>
                </View>
                <View style={styles.cellXSmall}>
                    <Text style={styles.text}>{meal.serving_qty}</Text>
                </View>
                <View style={styles.cellBig}>
                    <Text style={styles.text}>{meal.serving_unit}</Text>
                </View>
                <View style={styles.cellSmall}>
                    <Text style={styles.text}>{lCalories}</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    container: { flex: 1, paddingTop: 30, backgroundColor: '#fff' },

    rowView: {
        height: 70,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 3,
    },

    cellSmall: {
        flexDirection: "column",
        height: "95%",
        width: "15%",
        alignItems: "center",
        justifyContent: "center",
    },

    cellXSmall: {
        flexDirection: "column",
        height: "95%",
        width: "10%",
        justifyContent: "center",
    },

    cellBig: {
        flexDirection: "column",
        height: "95%",
        width: "30%",
        justifyContent: "center",
        marginLeft: 3,
    },

    rowHeader: {
        height: 30,
        width: "100%",
        flexDirection: "row",
        marginLeft: 3,
    },

    ColHeaderSmall: {
        flexDirection: "column",
        height: "95%",
        width: "15%",
        justifyContent: "flex-end",
        marginLeft: 3,
    },

    ColHeaderXSmall: {
        flexDirection: "column",
        height: "95%",
        justifyContent: "flex-end",
        marginLeft: 3,
    },

    ColHeaderBig: {
        flexDirection: "column",
        height: "95%",
        width: "30%",
        justifyContent: "flex-end",
        marginLeft: 3,
    },

    text: {
        fontSize: 15,
        textAlign: "center",
    },
})