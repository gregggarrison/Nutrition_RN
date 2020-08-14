import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function SavedNutritionLabel({meal, clearClick}) {
    console.log(meal.calories)
    return (

        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <View style={styles.borderThick}></View>

                <View style={styles.rowView}>
                    <Text style={{ textAlign: "left", fontWeight: "bold", left: 9 }}>Calories  {meal.calories}</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={{ textAlign: "right", marginRight: 10 }}>Calories from Fat {meal.allFat * 9}</Text>
                    </View>
                </View>
                <View style={styles.borderThin}></View>
                <View style={styles.bottomBorder}>
                    <Text style={{ textAlign: "right", right: -230 }}>% Daily Value</Text>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={styles.textLeft}>Total Fat {meal.allFat} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>X</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={{ marginLeft: 10 }}>Saturated Fat {meal.satFat} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>X</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={styles.textLeft}>Cholesterol {meal.cholesterool} mg</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>X</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={styles.textLeft}>Sodium {meal.sodium} mg</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>X</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={styles.textLeft}>Total Carbohydrates {meal.carboydrates} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>X</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={{ marginLeft: 10 }}>Dietary Fiber {meal.fiber} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>X</Text>
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
                    {/* <Button onPress={handlePress} title="Add"></Button> */}
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
        top: "10%",
        height: 400,
        width: "90%",
        backgroundColor: "white",
    },

    borderThick: {
        width: "95%",
        height: 10,
        backgroundColor: "black",
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 5,
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