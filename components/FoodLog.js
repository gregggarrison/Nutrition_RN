import React, { useState } from 'react'
import { View, Keyboard, Navigation } from 'react-native'
import { APP_API_ID, API_KEY } from 'react-native-dotenv'

import NutritionLabel from '../components/NutritionLabel'
import SearchResults from '../components/SearchResults'
import SearchBar from '../components/SearchBar'
import SummaryHeader from '../components/SummaryHeader'
import Cam from '../components/Cam'


export default function FoodLog({ toggleSearch, addToMeals, date }) {

    const [query, setQuery] = useState("")
    const [meal, setMeal] = useState({})
    const [imageSearch, setImageSearch] = useState(false)

    const handlePress = () => {
        Keyboard.dismiss()
        toggleSearch()
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

    const toggleImageSearch = () => setImageSearch(!imageSearch)

    const handleClick = () => {
        console.log(query)
        toggleSearch()
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
        toggleSearch()
        setMeal({})
    }

    return (
        <View>

            {imageSearch
                ? <Cam handleClick={handleClick} query={query} setQuery={setQuery} />
                : null
            }

                <>
                    <SearchBar handlePress={handlePress} query={query} setQuery={setQuery} toggleImageSearch={toggleImageSearch} />
                    {meal.full_nutrients
                        ?
                        <>
                            <SearchResults meal={meal} />
                            <NutritionLabel meal={meal} clearState={clearState} addToMeals={addToMeals} date={date} />
                        </>
                        : null
                    }
                </>

        </View>
    )
}

