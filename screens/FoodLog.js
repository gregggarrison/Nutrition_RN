import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native'
import { APP_API_ID, API_KEY } from 'react-native-dotenv'

import NutritionLabel from '../components/NutritionLabel'
import SearchResults from '../components/SearchResults'
import SearchBar from '../components/SearchBar'



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
            .then(console.log(meal))
    }

   

    const clearState = () => {
        setMeal({})
    }

    return (
        <View style={styles.container}>
         
            <SearchBar handlePress={handlePress} query={query} setQuery={setQuery} />
    
            {meal.full_nutrients
                ?
                <>
                    <SearchResults meal={meal} />
                    <NutritionLabel meal={meal} clearState={clearState} />
                </>
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 30, backgroundColor: '#fff' },

    textInput: {
        color: "#4E709D",
        fontSize: 25,
        textAlign: "left",
        marginLeft: 15,
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
        justifyContent: "center",
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

    ColHeader: {
        flexDirection: "column",
        height: "95%",
        width: "20%",
        justifyContent: "flex-end",
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