import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native'
import { APP_API_ID, API_KEY } from 'react-native-dotenv'
import NutritionLabel from '../components/NutritionLabel'

export default function FoodLog() {

    const [query, setQuery] = useState("")
    const [meal, setMeal] = useState({})

    const handlePress = () => {
        setQuery("")
        const searchURL = `https://trackapi.nutritionix.com/v2/search/instant?query=${query}&detailed=true`
        fetch(searchURL, {
            method: "GET",
            headers: {
                "x-app-id": APP_API_ID,
                "x-app-key": API_KEY
            }
        }).then(response => response.json())
            .then(meal => setMeal(meal.common[0]))
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

    const calories = findNutrient(208)
    const lCalories = toNumberUnits(calories, 0)

    const clearState = () => {
        setMeal({})
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.search} onChangeText={(text) => setQuery(text)} >

            </TextInput>
            <Button title="click" onPress={handlePress}></Button>

            {meal.full_nutrients ?
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

                    <NutritionLabel meal={meal} clearState={clearState}/>
                </>
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 30, backgroundColor: '#fff' },

    search: {
        backgroundColor: "red",
        height: 30,
    },

    rowView: {
        height: 70,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 3,
    },

    cell: {
        flexDirection: "column",
        height: "95%",
        width: "20%",
        alignItems: "center",
        justifyContent: "center"
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
        justifyContent: "center"
    },

    rowHeader: {
        height: 30,
        width: "100%",
        flexDirection: "row",
        marginLeft: 3,
    },

    ColHeader: {
        flexDirection: "column",
        height: "95%",
        width: "20%",
        justifyContent: "flex-end",
    },

    ColHeaderSmall: {
        flexDirection: "column",
        height: "95%",
        width: "15%",
        justifyContent: "flex-end",
    },

    ColHeaderXSmall: {
        flexDirection: "column",
        height: "95%",
        justifyContent: "flex-end",
    },

    ColHeaderBig: {
        flexDirection: "column",
        height: "95%",
        width: "30%",
        justifyContent: "flex-end",
    },

    text: {
        fontSize: 15,
        textAlign: "center",
    },

    textHeader: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
    },

    textRight: {
        fontSize: 15,
        textAlign: "right",
    },

    textLeft: {
        fontSize: 15,
        textAlign: "left",
    },
})