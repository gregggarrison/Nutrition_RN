import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export default function SummaryHeader({ totalCal, totalCarbs, totalFat, totalProtein, date, newDate }) {


    const handlePress = () => {
        // minusDate()
        console.log('date',date)
        let result = new Date(date);
        console.log('result', result)
        result.setDate(result.getDate() - 1);
        console.log(result)
       

        newDate(result)
    }
    const remainingCal = 2370 - totalCal

    return (
        <>
            <View style={styles.dateRow}>
                <View style={styles.dateRowSides}>
                    <AntDesign name="arrowleft" size={30} color="black" onPress={handlePress} />
                </View>
                <View style={styles.dateRowCenter}>
                    <Text style={{ fontSize: 25, color: "#ff8584", fontWeight: "bold" }}>{date}</Text>
                </View>
                <View style={styles.dateRowSides}>
                    <AntDesign name="arrowright" size={30} color="black" />
                </View>
            </View>
            <View style={styles.summaryRow}>
                <View style={styles.summaryHalf}>
                    <Text style={styles.textSummaryLeftTop}>{totalCal} cal intake</Text>
                </View>
                <View style={styles.summaryHalf}>
                    <Text style={styles.textSummaryRightTop}>remaining cal: {remainingCal}</Text>
                </View>
            </View>
            <View style={styles.summaryRow}>
                <View style={styles.summaryThird}>
                    <Text style={styles.textSummaryLeft}>{Math.floor(totalProtein)}g Protein</Text>
                </View>
                <View style={styles.summaryThird}>
                    <Text style={styles.textSummaryCenter}>{Math.floor(totalCarbs)}g Carbs</Text>

                </View>
                <View style={styles.summaryThird}>
                    <Text style={styles.textSummaryRight}>{Math.floor(totalFat)}g Fat</Text>
                </View>
            </View>
            <View style={styles.headerRow}>
                <View style={styles.summaryHalf}>
                    <Text style={styles.textHeaderLeft}>Meals</Text>
                </View>
                <View style={styles.summaryHalf}>
                    <Text style={styles.textHeaderRight}>{totalCal}g</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#4E709D",
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

    headerRow: {
        height: 35,
        width: "100%",
        flexDirection: "row",
        borderBottomWidth: 1,
        marginTop: 3,
    },

    summaryHalf: {
        height: "100%",
        width: "50%",
        justifyContent: "center",
    },

    textSummaryLeftTop: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "left",
        marginLeft: 3,
        color: "#ff8584",
    },

    textSummaryLeft: {
        color: "#4E709D",
        fontSize: 14,
        marginLeft: 3,
        fontWeight: "bold",
    },

    textSummaryCenter: {
        color: "#4E709D",
        fontSize: 14,
        textAlign: "center",
        fontWeight: "bold"
    },

    textSummaryRightTop: {
        color: "#ff8584",
        fontSize: 14,
        marginRight: 3,
        textAlign: "right",
        fontWeight: "bold"
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
        flexDirection: "row",
        borderBottomWidth: 1,
        alignItems: "center",
    },

    summaryThird: {
        height: "100%",
        width: "33%",
        justifyContent: "center",
    },

    textSummaryRight: {
        color: "#4E709D",
        fontSize: 14,
        marginRight: 3,
        textAlign: "right",
        fontWeight: "bold"
    },
})