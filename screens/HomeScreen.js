import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import Nav from '../components/Nav'

import SummaryHeader from '../components/SummaryHeader'
import MealsTable from '../components/MealsTable'
import FoodLog from './FoodLog'
import SavedNutritionLabel from '../components/SavedNutritionLabel'

const mealsURL = "http://10.0.0.178:3000/meals/"

export default function HomeScreen({ navigation }) {

    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState(false)
    const [meal, setMeal] = useState(null)

    const toggleClick = (meal) => setMeal(meal)
    const clearClick = () => setMeal(null)
    const addToMeals = (mealData) => setMeals([...meals, mealData])
    const toggleOn = () => setSearch(true)
    const toggleOff = () => setSearch(false)

    const getMeals = () => {
        fetch(mealsURL)
            .then(response => response.json())
            .then(meals => setMeals(meals))
    }

    useEffect(() => {
        getMeals()
    }, [])

    const showMeals = () => {
        return meals.map(meal => {
            return (
                <MealsTable
                    key={meal.id}
                    meal={meal}
                    toggleClick={toggleClick}
                    clearClick={clearClick}
                />
            )
        })
    }

    return (
        <View style={styles.container}>
            <FoodLog
                toggleOn={toggleOn}
                toggleOff={toggleOff}
                addToMeals={addToMeals}
            />

            {search
                ? null
                :
                <>
                    <SummaryHeader />

                    {meal
                        ? <SavedNutritionLabel clearClick={clearClick} meal={meal} />
                        : showMeals()
                    }
                </>
            }

            <Nav navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
})
