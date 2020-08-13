import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native'
import { APP_API_ID, API_KEY } from 'react-native-dotenv'

import NutritionLabel from '../components/NutritionLabel'
import SearchResults from '../components/SearchResults'
import SearchBar from '../components/SearchBar'
import Nav from '../components/Nav'


export default function FoodLog({ navigation }) {

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
        <View>
            <SearchBar handlePress={handlePress} query={query} setQuery={setQuery} />

            {meal.full_nutrients
                ?
                <>
                    <SearchResults meal={meal} />
                    <NutritionLabel meal={meal} clearState={clearState} />
                </>
                : null
            }

            {/* <Nav navigation={navigation} /> */}

        </View>
    )
}

