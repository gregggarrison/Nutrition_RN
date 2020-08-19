import React, { useState } from 'react'
import { View, Keyboard, Navigation } from 'react-native'
import { APP_API_ID, API_KEY } from 'react-native-dotenv'

import NutritionLabel from '../components/NutritionLabel'
import SearchResults from '../components/SearchResults'
import SearchBar from '../components/SearchBar'
import Cam from '../components/Cam'

export default function ImageSearch({ toggleOn, toggleOff, addToMeals, navigation }) {

    const [query, setQuery] = useState(null)
    const [meal, setMeal] = useState({})

    const handlePress = () => {
        toggleOn()
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

    const clearState = () => {
        toggleOff()
        setMeal({})
    }

    return (
        <Cam setQuery={setQuery} handlePress={handlePress} navigation={navigation}/>
    )
}

