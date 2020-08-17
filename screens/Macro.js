import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import Nav from '../components/Nav'

export default function Macro({ navigation }) {

    const [kcal, setKcal] = useState(2346)
    const [carbP, setCarbP] = useState(.30)
    const [protP, setProtP] = useState(.40)
    const [fatP, setFatP] = useState(.30)

    const handlePress = () => {
        console.log('clicked')
        alert('values saved')
    }

    return (

        <View style={styles.container}>

            <View style={styles.row}>
                <View style={styles.leftSide}>
                    <Text style={styles.leftText}>Daily Calories Goal:</Text>
                </View>
                <View style={styles.rightSide}>
                    <TextInput onChangeText={(text) => setKcal(text)} style={styles.textInput}>{kcal}</TextInput>
                    <Text style={styles.rightText}>kcal</Text>
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
        backgroundColor: "#4E709D",
    },

    saveRow: {
        height: 40,
        width: "100%",
        backgroundColor: "#F6F6F6",
        marginTop: 25,
        bottom: 140,
        position: "absolute",
    },

    row: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        borderBottomWidth: 1,
        backgroundColor: "#F6F6F6",
        top: 10,
        alignItems: "center",
    },

    rows: {
        width: "100%",
        height: 75,
        flexDirection: "row",
        borderBottomWidth: 1,
        backgroundColor: "#F6F6F6",
        top: 10,
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
    },

    leftSmallText: {
        fontSize: 14,
        marginRight: 8,
    },

    rightText: {
        fontSize: 20,
        marginLeft: 4,
    },

    rightTextRight: {
        fontSize: 15,
        marginLeft: 18,
        textAlign: "right",
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

})