import React, { useState, useEffect } from 'react'
import { Button, View, Text, StyleSheet, Keyboard } from 'react-native'
import Nav from '../components/Nav'
import { TextInput } from 'react-native-gesture-handler';

import SummaryHeader from '../components/SummaryHeader'
import MealsTable from '../components/MealsTable'
import FoodLog from './FoodLog'
import SavedNutritionLabel from '../components/SavedNutritionLabel'

const mealsURL = "http://10.0.0.178:3000/meals/"

export default function HomeScreen({ navigation }) {

    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState(false)
    const [meal, setMeal] = useState(null)


    const toggleClick = (meal) => {
        setMeal(meal)
    }

    const clearClick = () => {
        setMeal(null)
    }

    const addToMeals = (mealData) => {
        setMeals([...meals, mealData])
    }

    const toggleOn = () => {
        setSearch(true)
    }

    const toggleOff = () => {
        setSearch(false)
    }

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
                <MealsTable meal={meal} meals={meals} key={meal.id} meal={meal} toggleClick={toggleClick} clearClick={clearClick} />
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

    dateRow: {
        height: 50,
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        top: 10,
    },

    dateRowSides: {
        height: "100%",
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },

    dateRowCenter: {
        height: "100%",
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
    },

    summaryRow: {
        height: 25,
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        borderWidth: 1,
        alignItems: "center",
    },

    summaryHalf: {
        height: "100%",
        width: "50%",
        justifyContent: "center",
    },

    summaryThird: {
        height: "100%",
        width: "33%",
        justifyContent: "center",
    },

    textSummaryLeft: {
        color: "#ff8584",
        // fontFamily: "Lato",
        fontSize: 14,
        marginLeft: 3,

    },
    textSummaryCenter: {
        color: "#ff8584",
        // fontFamily: "Lato",
        fontSize: 14,
        textAlign: "center",

    },
    textSummaryRight: {
        color: "#ff8584",
        // fontFamily: "Lato",
        fontSize: 14,
        marginRight: 3,
        textAlign: "right",

    },

    headerRow: {
        height: 35,
        width: "100%",
        backgroundColor: "#B7C3D2",
        flexDirection: "row",
        borderWidth: 1,
        marginTop: 3,
    },

    textHeaderLeft: {
        color: "#ff8584",
        fontSize: 20,
        marginLeft: 3,
        textAlign: "left",
        fontWeight: "bold",
    },

    textHeaderRight: {
        color: "#ff8584",
        fontSize: 20,
        marginRight: 5,
        textAlign: "right",
        fontWeight: "bold",

    },

    itemRow: {
        height: 50,
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
    },

    imgContainer: {
        height: "100%",
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
    },

    img: {
        height: 45,
        width: 45,
    },

    nameContainer: {
        height: "100%",
        width: "25%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
    },
    qtyContainer: {
        height: "100%",
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
    },
    unitContainer: {
        height: "100%",
        width: "25%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
    },



})