import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import SavedNutritionLabel from './SavedNutritionLabel'

export default function MealsTable({ meal, isClicked, toggleClick, clearClick }) {


    const [ clickedMeal, setClickedMeal] = useState(null)



    // const toggleActive = () => {
    //     console.log('clickero')
    //     setActive(!active)
    // }


    const handlePress = () => {
        console.log('clickeroo')
        console.log('meal', meal)
        setClickedMeal(meal)
        toggleClick(meal)
        console.log(meal)
        console.log('clickedmeal', clickedMeal)
    }
    return (
        <>
        
    


            <View style={styles.itemRow} key={meal.id}>
                <TouchableOpacity onPress={handlePress}>

                    <View style={styles.imgContainer}>
                        <Image source={{ uri: meal.img }} style={styles.img}></Image>
                    </View>
                </TouchableOpacity>
                <View style={styles.nameContainer}>
                    <Text style={styles.textSummaryCenter}>{meal.foodName}</Text>
                </View>
                <View style={styles.qtyContainer}>
                    <Text style={styles.textSummaryCenter}>{meal.serveQty}</Text>
                </View>
                <View style={styles.unitContainer}>
                    <Text onPress={handlePress} style={styles.textSummaryCenter}>{meal.serveUnit}</Text>
                </View>
                <View style={styles.qtyContainer}>
                    <Text style={styles.textSummaryCenter}>{meal.calories}g</Text>
                </View>
            </View>




            {/* <SavedNutritionLabel meal={meal}  /> */}










        </>
    )
}

const styles = StyleSheet.create({

    summaryRow: {
        height: 25,
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        // borderWidth: 1,
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
        // borderWidth: 1,
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
        // borderWidth: 1,
    },
    qtyContainer: {
        height: "100%",
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 1,
    },
    unitContainer: {
        height: "100%",
        width: "25%",
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 1,
    },

})