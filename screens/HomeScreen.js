import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Nav from '../components/Nav'

import SummaryHeader from '../components/SummaryHeader'
import MealsTable from '../components/MealsTable'
import FoodLog from '../components/FoodLog'
import SavedNutritionLabel from '../components/SavedNutritionLabel'
import NutritionLabel from '../components/NutritionLabel'
import SearchResults from '../components/SearchResults'

const mealsURL = "http://10.0.0.178:3000/meals/"

export default function HomeScreen({ navigation, route }) {

    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState(false)
    const [searchMeal, setSearchMeal] = useState(null)
    const [imageSearch, setImageSearch] = useState(false)
    const [meal, setMeal] = useState(null)
    const [date, newDate] = useState("")

    const toggleClick = (meal) => setMeal(meal)
    const clearClick = () => setMeal(null)
    const toggleSearch = () => setSearch(!search)

    const addToMeals = (mealData) => {
        setMeals([...meals, mealData])
        clearClick()
        fetch(mealsURL, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(mealData)
        })
    }

    const minusDate = (date) => {
        let result = new Date(date);
        result.setDate(result.getDate() - 1);
        console.log(result)
        return result;

        setDate(result)
    }

    const deleteMeal = (exMeal) => {
        let newMeals = meals.filter(exMeal => meal.id !== exMeal.id)
        setMeals(newMeals)
        clearClick()

        fetch(mealsURL + exMeal.id, {
            method: "DELETE",
            "Content-Type": "application/json"
        })
    }

    const getMeals = () => {
        fetch(mealsURL)
            .then(response => response.json())
            .then(meals => setMeals(meals))
    }

    useEffect(() => {
        getMeals()
        newDate(new Date().toDateString())
    }, [])

    useEffect(() => {
        if (route.params) {
            setSearchMeal(route.params.searchMeal)
            setSearch(true)
            setImageSearch(true)
        }
    }, [route.params])

    const totalCal = meals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.calories
        }, 0)

    const totalCarbs = meals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.carbohydrates
        }, 0)

    const totalFat = meals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.allFat
        }, 0)

    const totalProtein = meals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.protein
        }, 0)

    const showMeals = () => {
        return meals.map(meal => {
            return (
                <ScrollView key={meal.id}>
                    <MealsTable
                        meal={meal}
                        toggleClick={toggleClick}
                        clearClick={clearClick}
                    />
                </ScrollView>
            )
        })
    }

    const clearState = () => {
        toggleSearch()
        setImageSearch(false)
    }

    return (
        <View style={styles.container} >
            <FoodLog
                toggleSearch={toggleSearch}
                addToMeals={addToMeals}
            />

            {imageSearch
                ?
                <>
                    <SearchResults meal={searchMeal} />
                    <NutritionLabel
                        meal={searchMeal}
                        addToMeals={addToMeals}
                        clearState={clearState}
                    />
                </>
                : null
            }

            {search
                ? null
                : <>
                    <SummaryHeader
                        meals={meals}
                        totalCal={totalCal}
                        totalCarbs={totalCarbs}
                        totalFat={totalFat}
                        totalProtein={totalProtein}
                        date={date}
                        newDate={newDate}
                    />
                    <ScrollView>
                        {meal
                            ? <SavedNutritionLabel clearClick={clearClick} meal={meal} deleteMeal={deleteMeal} />
                            : showMeals()
                        }
                    </ScrollView>
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
