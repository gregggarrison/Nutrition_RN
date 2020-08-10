import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native'

export default function FoodLog() {


    const [query, setQuery] = useState("")
    const [meal, setMeal] = useState({})

    const handlePress = () => {
        setMeal({})
        const searchURL = `https://trackapi.nutritionix.com/v2/search/instant?query=${query}&detailed=true`
        fetch(searchURL, {
            method: "GET",
            headers: {
                "x-app-id": process.env.REACT_APP_API_ID,
                "x-app-key": process.env.REACT_APP_API_KEY
            }
        }).then(response => response.json())
            .then(meal => setMeal(meal.common[0]))
    }

    return (
        <View style={styles.container}>
            <Text>Food Log</Text>
            <TextInput style={styles.textInput} onChangeText={(text) => setQuery(text)} >

            </TextInput>
            <Button title="click" onPress={handlePress}></Button>

            {meal.food_name

                ?
                <View style={styles.rowView}>
                    <Image source={{ uri: meal.photo.thumb }} alt="" style={styles.thumb}></Image>
                    <Text>{meal.food_name}</Text>
                    <Text>{meal.serving_qty}</Text>
                    <Text>{meal.serving_unit}</Text>

                </View>
                : null
            }
            {/* <Text>{meal.photo.thumb}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    search: {
        backgroundColor: "red"
    },

    textInput: {
        color: "#4E709D",
        fontSize: 25,
        textAlign: "left",
        backgroundColor: "red",
        height: 30,
    },

    thumb: {
        width: 50,
        height: 50,
    },

    rowView: {
        height: 60,
        width: "100%",
        flexDirection: "row",
        borderWidth: 1,
    },

})