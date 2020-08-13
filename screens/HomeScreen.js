import React, { useState, useEffect } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

const mealsURL = "http://10.0.0.178:3000/meals/"

export default function HomeScreen({ navigation }) {

    const [meals, setMeals] = useState([])

    const getMeals = () => {
        fetch(mealsURL)
            .then(response => response.json())
            .then(meals => setMeals(meals))
            console.log(meals)
    }

    useEffect(()=> {
        getMeals()
    }, [])

    const showMeals = () => {

        
       return meals.map(meal => {
            return(
                <View>
                    <Text>{meal.foodName}</Text>
                </View>
            )
        })
    }

    return (

        <View>
            <Text>Home </Text>
            <Button
                title='Profile'
                onPress={() => navigation.navigate('Profile')}
            />
            <Button
                title="Meals"
                onPress={() => { getMeals() }}
            />
            {showMeals()}
        </View>
    )

}
