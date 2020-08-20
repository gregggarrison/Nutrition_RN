import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function SavedNutritionLabel({ meal, clearClick, deleteMeal }) {

    const removeMeal = () => {
        deleteMeal(meal)
        console.log('click')
    }

    function percentDV(nutrient, nutrientDV) {
        const amount = nutrient ? nutrient.value : 0
        return ((parseFloat(amount) / nutrientDV) * 100).toFixed(0) + "%"
    }

    let sodDV = 2400
    let lSatFatDV = 20
    let tFatDV = 65
    let lCarbsDV = 300
    let lCholestDV = 300
    let lFiberDV = 25

    const totalFatDV = Math.floor((meal.allFat / tFatDV) * 100)
    const sFatDV = Math.floor((meal.satFat / lSatFatDV) * 100)
    const cholestDV = Math.floor((meal.cholesterol / lCholestDV) * 100)
    const fiberDV = Math.floor((meal.fiber / lFiberDV) * 100)
    const sodiumDV = Math.floor((meal.sodium / sodDV) * 100)
    const carbsDV = Math.floor((meal.carbohydrates / lCarbsDV) * 100)

    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <View style={styles.borderThick}></View>
                <View style={styles.rowView}>
                    <Text style={{ textAlign: "left", fontWeight: "bold", left: 9 }}>Calories  {meal.calories}</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={{ textAlign: "right", marginRight: 10 }}>Calories from Fat {Math.floor(meal.allFat * 9)}</Text>
                    </View>
                </View>
                <View style={styles.borderThin}></View>
                <View style={styles.bottomBorder}>
                    <Text style={{ textAlign: "right", right: -230 }}>% Daily Value</Text>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={styles.textLeft}>Total Fat {meal.allFat} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>{totalFatDV}%</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={{ marginLeft: 10 }}>Saturated Fat {meal.satFat} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>{sFatDV}%</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={styles.textLeft}>Cholesterol {meal.cholesterol} mg</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>{cholestDV}%</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={styles.textLeft}>Sodium {meal.sodium} mg</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>{sodiumDV}%</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={styles.textLeft}>Total Carbohydrates {meal.carbohydrates} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>{carbsDV}%</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={{ marginLeft: 10 }}>Dietary Fiber {meal.fiber} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>{fiberDV}%</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={{ marginLeft: 10 }}>Sugars {meal.sugar} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}></Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={styles.textLeft}>Protein {meal.protein} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}></Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 3 }}>
                    <Button onPress={removeMeal} title="Delete"></Button>
                    <Button onPress={() => clearClick()} title="Go Back"></Button>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center" },

    labelContainer: {
        flexDirection: "column",
        borderWidth: 1,
        top: "3%",
        height: 350,
        width: "90%",
        backgroundColor: "white",
    },

    borderThick: {
        width: "95%",
        height: 10,
        backgroundColor: "black",
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 5,
    },

    borderThin: {
        width: "95%",
        height: 5,
        backgroundColor: "black",
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 5,
    },

    textRight: {
        textAlign: "right",
    },

    textLeft: {
        textAlign: "left",
        fontWeight: "bold",
    },

    rowView: {
        flexDirection: "row",
    },

    bottomBorder: {
        flexDirection: "row",
        borderBottomWidth: 1,
        width: "95%",
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 5,
    },
})
