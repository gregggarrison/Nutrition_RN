import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import moment from 'moment'
import PureChart from 'react-native-pure-chart';
import Chart from '../components/Chart'


import Nav from '../components/Nav'
import SummaryHeader from '../components/SummaryHeader'
import MealsTable from '../components/MealsTable'
import FoodLog from '../components/FoodLog'
import SavedNutritionLabel from '../components/SavedNutritionLabel'
import NutritionLabel from '../components/NutritionLabel'
import SearchResults from '../components/SearchResults'
import SavedSearchResults from '../components/SavedSearchResults'

const mealsURL = "http://10.0.0.178:3000/meals/"

export default function HomeScreen({ navigation, route }) {

    const [meals, setMeals] = useState([])
    const [currentMeals, setCurrentMeals] = useState([])
    const [search, setSearch] = useState(false)
    const [searchMeal, setSearchMeal] = useState(null)
    const [imageSearch, setImageSearch] = useState(false)
    const [meal, setMeal] = useState(null)
    const [date, setDate] = useState(null)
    const toggleClick = (meal) => setMeal(meal)
    const clearClick = () => setMeal(null)
    const toggleSearch = () => setSearch(!search)


    const getDate = () => {
        let selectedDate = moment().format('MM/DD/YYYY')
        setDate(selectedDate)
    }

    const handleMinus = () => {
        let selectedDate = moment(date).subtract(1, 'days').calendar("MM/DD/YYYY")
        setDate(selectedDate)
        console.log(date)
    }

    const handlePlus = () => {
        let selectedDate = moment(date).add(1, 'days').calendar("MM/DD/YYYY")
        setDate(selectedDate)
        console.log(date)
    }

    const filterMealDate = () => {
        let activeMeals = meals.filter(meal => {
            let mealDate = moment(meal.created_at).format("MM/DD/YYYY")
            return date == mealDate
        })
        setCurrentMeals(activeMeals)
    }

    const addToMeals = (mealData) => {
        setMeals([...meals, mealData])
        setCurrentMeals([...currentMeals, mealData])
        clearClick()
        fetch(mealsURL, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(mealData)
        })
    }

    useEffect(() => {
        if (meals.length > 0) {
            filterMealDate()
        }
    }, [date, meal])

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
        getDate()
        getMeals()
        filterMealDate()
    }, [])

    useEffect(() => {
        if (route.params) {
            setSearchMeal(route.params.searchMeal)
            setSearch(true)
            setImageSearch(true)
        }
    }, [route.params])

    const totalCal = currentMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.calories
        }, 0)

    const totalCarbs = currentMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.carbohydrates
        }, 0)

    const totalFat = currentMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.allFat
        }, 0)

    const totalProtein = currentMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.protein
        }, 0)

    const showMeals = () => {
        return currentMeals.map(meal => {
            return (
                <ScrollView key={meal.id}>
                    <MealsTable
                        key={meal.id}
                        meal={meal}
                        toggleClick={toggleClick}
                        clearClick={clearClick}
                        style={styles.scrollView}
                    />
                </ScrollView>
            )
        })
    }

    const clearState = () => {
        toggleSearch()
        setImageSearch(false)
    }

    let sampleData = [
        {
          value: 50,
          label: 'Marketing',
          color: 'red',
        }, {
          value: 40,
          label: 'Sales',
          color: 'blue'
        }, {
          value: 25,
          label: 'Support',
          color: 'green'
        }
    
      ]
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
                :
                null
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
                        handleMinus={handleMinus}
                        handlePlus={handlePlus}
                    />
                    {meal
                        ?
                        <>
                            <SavedSearchResults meal={meal} />
                            <SavedNutritionLabel clearClick={clearClick} meal={meal} deleteMeal={deleteMeal} />
                        </>
                        :
                        <>
                            <View style={{ height: 200 }}>
                                <ScrollView style={styles.scrollView}>
                                    {showMeals()}
                                </ScrollView>

                            </View>
                            <View style={styles.chart}>

                               <Chart 
                               totalCal={totalCal}
                               totalFat={totalFat}
                               totalCarbs={totalCarbs}
                               totalProtein={totalProtein}
                               
                               />
                            </View>

                        </>
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

    scrollView: {
        height: 250
    },

    chart: {
        marginTop: 40,

    }
})
