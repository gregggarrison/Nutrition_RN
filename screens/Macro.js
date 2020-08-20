import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import Nav from '../components/Nav'

export default function Macro({ navigation }) {

    const [kcal, setKcal] = useState(2346)
    const [carbP, setCarbP] = useState(.30)
    const [protP, setProtP] = useState(.40)
    const [fatP, setFatP] = useState(.30)
    const [BMR, setBMR] = useState(2070)
    const [activityLevel, setActivityLevel] = useState('slightly active')

    const handlePress = () => {
        alert('values saved')
    }

    const getMaintain = () => {
        if (activityLevel === "sedentary") {
            let apal = 1.2
            return Math.floor(apal * BMR)
        }
        else if (activityLevel === "slightly active") {
            let apal = 1.375
            return Math.floor(apal * BMR)
        }
        else if (activityLevel === "active") {
            let apal = 1.55
            return Math.floor(apal * BMR)
        }
        else if (activityLevel === "very active") {
            let apal = 1.725
            return Math.floor(apal * BMR)
        }
        else if (activityLevel === "too active") {
            let apal = 1.9
            return Math.floor(apal * BMR)
        }
    }

    return (

        <View style={styles.container}>
            <View style={{height: 20}}></View>
            <View style={{ alignItems: "center", justifyContent: "center", height: 35, borderWidth: 1, backgroundColor: "#4E709D", }}>
                <Text style={styles.textHeader}>Recomended Calories:</Text>
            </View>
            
            <View style={styles.row}>
                <View style={styles.leftSide}>
                    <Text style={styles.leftText}>Maintain:</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.textInput}>
                        {BMR === null ? null : getMaintain()}
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.leftSide}>
                    <Text style={styles.leftText}>-1 lb/wk:</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.textInput}>
                        {BMR === null ? null : getMaintain() - 500}
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.leftSide}>
                    <Text style={styles.leftText}>+1 lb/wk:</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.textInput}>
                        {BMR === null ? null : getMaintain() + 500}
                    </Text>
                </View>
            </View>
            <View style={{height: 20}}></View>

            <View style={{ alignItems: "center", justifyContent: "center", height: 35, borderWidth: 1, backgroundColor: "#4E709D", }}>
                <Text style={styles.textHeader}>Source of Calories:</Text>
            </View>
            <View style={styles.rows}>
                <View style={styles.leftSideRows}>
                    <View style={styles.leftTop}>
                        <Text style={styles.leftSmallText}>
                            % of calories from
                            </Text>
                    </View>
                    <View style={styles.leftBottom}>
                        <Text style={styles.leftText}>
                            Carbohydrates:
                            </Text>
                    </View>
                </View>
                <View style={styles.rightSide}>
                    <TextInput onChangeText={(text) => setCarbP(text / 100)} style={styles.textInput}>{(Math.floor(carbP * 100))}</TextInput>
                    <Text style={styles.rightText}>%</Text>
                    <Text style={styles.rightTextRight}>{Math.floor(carbP * kcal)}g</Text>
                </View>
            </View>
            <View style={styles.rows}>
                <View style={styles.leftSideRows}>
                    <View style={styles.leftTop}>
                        <Text style={styles.leftSmallText}>
                            % of calories from
                            </Text>
                    </View>
                    <View style={styles.leftBottom}>
                        <Text style={styles.leftText}>
                            Protein:
                            </Text>
                    </View>
                </View>
                <View style={styles.rightSide}>
                    <TextInput onChangeText={(text) => setProtP(text / 100)} style={styles.textInput}>{(Math.floor(protP * 100).toFixed(0))}</TextInput>
                    <Text style={styles.rightText}>%</Text>
                    <Text style={styles.rightTextRight}>{Math.floor(protP * kcal)}g</Text>
                </View>
            </View>
            <View style={styles.rows}>
                <View style={styles.leftSideRows}>
                    <View style={styles.leftTop}>
                        <Text style={styles.leftSmallText}>
                            % of calories from
                            </Text>
                    </View>
                    <View style={styles.leftBottom}>
                        <Text style={styles.leftText}>
                            Fat:
                            </Text>
                    </View>
                </View>
                <View style={styles.rightSide}>
                    <TextInput onChangeText={(text) => setFatP(text / 100)} style={styles.textInput}>{fatP * 100}</TextInput>
                    <Text style={styles.rightText}>%</Text>
                    <Text style={styles.rightTextRight}>{Math.floor(fatP * kcal)}g</Text>
                </View>
            </View>
            <View style={{height: 20}}></View>

            <View style={{ alignItems: "center", justifyContent: "center", height: 35, borderWidth: 1, backgroundColor: "#4E709D", }}>
                <Text style={styles.textHeader}>Goal:</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.leftSide}>
                    <Text style={styles.leftText}>Daily Calories:</Text>
                </View>
                <View style={styles.rightSide}>
                    <TextInput onChangeText={(text) => setKcal(text)} style={styles.textInput}>{kcal}</TextInput>
                    <Text style={styles.rightText}>kcal</Text>
                </View>
            </View>
            <View style={styles.saveRow}>
                <Button title="Save" onPress={() => { handlePress() }}></Button>
            </View>
            <Nav navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F6F6F6",
    },

    saveRow: {
        height: 40,
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "21%",
        backgroundColor: "#F5B17B",
        borderRadius: 14,
        borderWidth: 2,
        borderColor: "#4E709D",
        bottom: 120,
        position: "absolute",
    },

    row: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        borderBottomWidth: 1,
        backgroundColor: "#F6F6F6",
        alignItems: "center",
    },

    rows: {
        width: "100%",
        height: 75,
        flexDirection: "row",
        borderBottomWidth: 1,
        backgroundColor: "#F6F6F6",
    },

    leftSide: {
        flexDirection: "row",
        height: "100%",
        width: "50%",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 3,
    },

    leftSideRows: {
        height: "100%",
        width: "50%",
        justifyContent: "flex-end",
        alignItems: "center",
    },

    leftTop: {
        height: "50%",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },

    leftBottom: {
        height: "50%",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-end",
    },

    rightSide: {
        flexDirection: "row",
        height: "100%",
        width: "50%",
        alignItems: "center",
        marginTop: 3,
    },

    leftText: {
        fontSize: 20,
        textAlign: "right",
        color: "#ff8584",
        fontWeight: "bold",
    },

    leftSmallText: {
        fontSize: 14,
        marginRight: 8,
        color: "#4E709D",
        fontWeight: "bold"
    },

    rightText: {
        fontSize: 20,
        marginLeft: 4,
        color: "#ff8584",
        fontWeight: "bold",
    },

    rightTextRight: {
        fontSize: 15,
        marginLeft: 18,
        textAlign: "right",
        color: "#4E709D",
        fontWeight: "bold",
    },

    textInput: {
        borderWidth: 1,
        marginLeft: 15,
        height: 35,
        width: 70,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold",
    },

    header: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        borderWidth: 1,
        backgroundColor: "#4E709D",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
    },

    labelContainer: {
        height: 50,
        width: "40%",
        flexDirection: "row",
        borderColor: "#000000",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#F6F6F6",
    },

    inputContainer: {
        height: 50,
        width: "60%",
        flexDirection: "row",
        alignItems: "center",
    },

    label: {
        color: "#ff8584",
        fontSize: 25,
        textAlign: "right",
        marginLeft: 10,
        fontFamily: "Verdana"

    },

    textInput: {
        color: "#4E709D",
        fontSize: 25,
        textAlign: "left",
        marginLeft: 15,
        fontFamily: "Verdana"
    },

    textHeader: {
        color: "#F6F6F6",
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold",
    },

    rowButton: {
        height: 200,
        width: "100%",
        flexDirection: "row",
        borderWidth: 1,
        color: "#ff8584",
        justifyContent: "space-evenly",
        backgroundColor: "#4E709D",
    },

})