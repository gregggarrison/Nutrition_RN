import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export default function SummaryHeader() {
    return (
        <>
            <View style={styles.dateRow}>
                <View style={styles.dateRowSides}>
                    <AntDesign name="arrowleft" size={30} color="black" />
                </View>
                <View style={styles.dateRowCenter}>
                    <Text style={{ fontSize: 25, color: "#ff8584", fontWeight: "bold" }}>Today</Text>
                </View>
                <View style={styles.dateRowSides}>
                    <AntDesign name="arrowright" size={30} color="black" />
                </View>
            </View>

            <View style={styles.summaryRow}>
                <View style={styles.summaryHalf}>
                    <Text style={styles.textSummaryLeft}>545 cal intake</Text>
                </View>
                <View style={styles.summaryHalf}>
                    <Text style={styles.textSummaryRight}>remaining cal: 1445</Text>
                </View>
            </View>

            <View style={styles.summaryRow}>
                <View style={styles.summaryThird}>
                    <Text style={styles.textSummaryLeft}>4g Protein</Text>
                </View>
                <View style={styles.summaryThird}>
                    <Text style={styles.textSummaryCenter}>5g Carbs</Text>

                </View>
                <View style={styles.summaryThird}>
                    <Text style={styles.textSummaryRight}>6g Fat</Text>
                </View>
            </View>
            <View style={styles.headerRow}>
                <View style={styles.summaryHalf}>
                    <Text style={styles.textHeaderLeft}>Meals</Text>
                </View>
                <View style={styles.summaryHalf}>
                    <Text style={styles.textHeaderRight}>45g</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

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
        backgroundColor: "#B7C3D2",
        flexDirection: "row",
        borderWidth: 1,
        marginTop: 3,
    },

    summaryHalf: {
        height: "100%",
        width: "50%",
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

    container: {
        flex: 1,
        backgroundColor: "#4E709D",
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

})