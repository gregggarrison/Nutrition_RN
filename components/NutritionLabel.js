import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const mealsURL = "http://10.0.0.178:3000/meals/"


export default function NutritionLabel({ meal, clearState, addToMeals }) {
    console.log('meal', meal)
    console.log('foodName', meal.food_name)

    const [foodName, setFoodName] = useState("")
    const [serveQty, setServeQty] = useState("")
    const [serveUnit, setServeUnit] = useState("")
    const [img, setImg] = useState("")

    useEffect(() => {
        setFoodName(meal.food_name)
        setServeQty(meal.serving_qty)
        setServeUnit(meal.serving_unit)
        setImg(meal.photo.thumb)
    }, [])

    function handlePress(meal) {

        setFoodName(meal.food_name)
        if (meal) {

            const mealData = {
                foodName: foodName,
                serveQty: serveQty,
                serveUnit: serveUnit,
                calories: lCalories,
                allFat: lTotalFat,
                protein: lProtein,
                carbohydrates: lCarbs,
                cholesterol: lCholest,
                img: img,
                fiber: lFiber,
                protein: lProtein,
                satFat: lSFat,
                sodium: lSodium,
                sugar: lSugar,
            }

            addToMeals(mealData)

            fetch(mealsURL, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(mealData)
            })
            clearState()
        }

    }

    function findNutrient(id) {
        if (meal.full_nutrients) {
            return meal.full_nutrients.find(nutrient => nutrient["attr_id"] === id)
        }
    }

    function toNumberUnits(nutrient, decimals) {
        const amount = nutrient ? nutrient.value : 0
        return parseFloat(amount).toFixed(decimals)
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

    const calories = findNutrient(208)
    const lCalories = toNumberUnits(calories, 0)
    const fiber = findNutrient(291)
    const lFiber = toNumberUnits(fiber, 1)
    const totalFat = findNutrient(204)
    const lTotalFat = toNumberUnits(totalFat, 1)
    const lCaloriesFat = (totalFat.value * 9).toFixed(0)
    const protein = findNutrient(203)
    const lProtein = toNumberUnits(protein, 1)
    const carbs = findNutrient(205)
    const lCarbs = toNumberUnits(carbs, 1)
    const cholest = findNutrient(601)
    const lCholest = toNumberUnits(cholest, 1, "mg")
    const sFat = findNutrient(606)
    const lSFat = toNumberUnits(sFat, 1)
    const transFat = findNutrient(605)
    const lTransFat = toNumberUnits(transFat, 1)
    const sugar = findNutrient(269)
    const lSugar = toNumberUnits(sugar, 1)
    const sodium = findNutrient(307)
    const lSodium = toNumberUnits(sodium, 1, "mg")

    const fiberDV = percentDV(fiber, lFiberDV)
    const sodiumDV = percentDV(sodium, sodDV)
    const totalFatDV = percentDV(totalFat, tFatDV)
    const sFatDV = percentDV(sFat, lSatFatDV)
    const carbsDV = percentDV(carbs, lCarbsDV)
    const cholestDV = percentDV(cholest, lCholestDV)

    // const foodName = meal.food_name
    // const serveQty = meal.serving_qty
    // const serveUnit = meal.serving_unit

    return (

        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <View style={styles.borderThick}></View>

                <View style={styles.rowView}>
                    <Text style={{ textAlign: "left", fontWeight: "bold", left: 9 }}>Calories  {lCalories}</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={{ textAlign: "right", marginRight: 10 }}>Calories from Fat {lCaloriesFat}</Text>
                    </View>
                </View>
                <View style={styles.borderThin}></View>
                <View style={styles.bottomBorder}>
                    <Text style={{ textAlign: "right", right: -230 }}>% Daily Value</Text>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={styles.textLeft}>Total Fat {lTotalFat} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>{totalFatDV}</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={{ marginLeft: 10 }}>Saturated Fat {lSFat} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>{sFatDV}</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={styles.textLeft}>Cholesterol {lCholest} mg</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>{cholestDV}</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={styles.textLeft}>Sodium {lSodium} mg</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>{sodiumDV}</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={styles.textLeft}>Total Carbohydrates {lCarbs} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>{carbsDV}</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={{ marginLeft: 10 }}>Dietary Fiber {lFiber} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}>{fiberDV}</Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={{ marginLeft: 10 }}>Sugars {lSugar} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}></Text>
                    </View>
                </View>
                <View style={styles.bottomBorder}>
                    <Text style={styles.textLeft}>Protein {lProtein} g</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.textRight}></Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 3 }}>
                    <Button onPress={handlePress} title="Add"></Button>
                    <Button onPress={() => clearState()} title="Go Back"></Button>
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