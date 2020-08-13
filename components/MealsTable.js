import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function MealsTable({meal}) {
    return (
        <>
         

            <View style={styles.itemRow}>
                <View style={styles.imgContainer}>
                    <Image source={{ uri: meal.img}} style={styles.img}></Image>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.textSummaryCenter}>{meal.foodName}</Text>
                </View>
                <View style={styles.qtyContainer}>
                    <Text style={styles.textSummaryCenter}>{meal.serveQty}</Text>
                </View>
                <View style={styles.unitContainer}>
                    <Text style={styles.textSummaryCenter}>{meal.serveUnit}</Text>
                </View>
                <View style={styles.qtyContainer}>
                    <Text style={styles.textSummaryCenter}>{meal.calories}g</Text>
                </View>
            </View>
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