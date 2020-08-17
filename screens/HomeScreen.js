import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import Nav from '../components/Nav'

import SummaryHeader from '../components/SummaryHeader'
import MealsTable from '../components/MealsTable'
import FoodLog from '../components/FoodLog'
import SavedNutritionLabel from '../components/SavedNutritionLabel'

const mealsURL = "http://10.0.0.178:3000/meals/"

export default function HomeScreen({ navigation }) {

    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState(false)
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

    // const minusDate = () => {
    //     let date;
    //     let result = date.setDate(date.getDate()-1)
    //     console.log(result)
    //     return result
    // }
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
                toggleSearch={toggleSearch}
                addToMeals={addToMeals}
            />

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

                    {meal
                        ? <SavedNutritionLabel clearClick={clearClick} meal={meal} deleteMeal={deleteMeal} />
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
