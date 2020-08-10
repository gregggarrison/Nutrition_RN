import React, { useState, useEffect } from 'react'
import { Button, View, Text, StyleSheet, ActionSheetIOS } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

function ProfileScreen({ navigation }) {

    const [username, setUsername] = useState('')
    const [age, setAge] = useState(null)
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [sex, setSex] = useState("")
    const [BMR, setBMR] = useState(null)
    const [activityLevel, setActivityLevel] = useState('')


    const handlePress = () => {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ["Cancel", "male", "female"],
                cancelButtonIndex: 0
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                } else if (buttonIndex === 1) {
                    setSex('male')
                } else if (buttonIndex === 2) {
                    setSex('female')
                }
            }
        );
    }

    const pal = () => {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ["cancel", "sedentary", "lightly active", "active", "very active", "too active"],
                cancelButtonIndex: 0
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                } else if (buttonIndex === 1) {
                    setActivityLevel("sedentary")
                } else if (buttonIndex === 2) {
                    setActivityLevel("lightly active")
                } else if (buttonIndex === 3) {
                    setActivityLevel("active")
                } else if (buttonIndex === 4) {
                    setActivityLevel("very active")
                } else if (buttonIndex === 5) {
                    setActivityLevel("too active")
                }
            }
        )
    }

    const getBMR = () => {
        const cmConv = 2.54
        const kgConv = 0.453592
        const heightCM = height * cmConv
        const weightKG = weight * kgConv
        const s = sex === "male" ? 5 : -161

        let bmr = Math.floor(10 * weightKG + 6.25 * heightCM - 5 * age + s)
        setBMR(bmr)
        return (bmr)
    }

    useEffect(() => {
        if (weight && height && sex && age && activityLevel) {
            getBMR()
        }
    }, [weight, height, age, sex, activityLevel])


    const getMaintain = () => {
        if (activityLevel === "sedentary") {
            let apal = 1.2
            return Math.floor(apal * BMR)
        }
        else if (activityLevel === "lightly active") {
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
            <View style={styles.main}>
                <View style={styles.profileContainer}>
                    <View style={styles.rowView}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Username:</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="name"
                                onChangeText={(text) => setUsername(text)}
                                value={username}
                            />
                        </View>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Age:</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="age"
                                onChangeText={(text) => setAge(text)}
                                value={age}
                            />
                        </View>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Height:</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="inchs"
                                onChangeText={(text) => setHeight(text)}
                                value={height}
                            />
                        </View>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Weight:</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="pounds"
                                onChangeText={(text) => setWeight(text)}
                                value={weight}
                            />
                        </View>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label} onPress={handlePress}>Sex:</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textInput} >{sex}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.calorieContainer}>
                    <View style={styles.header}>
                        <Text style={styles.textHeader}>Recomended Calories</Text>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label} onPress={pal}>PA Level:</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textInput} >{activityLevel}</Text>
                        </View>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>BMR:</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textInput} >
                                {BMR}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Maintain:</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textInput}>
                                {BMR === null ? null : getMaintain()}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>-1 lb/wk:</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textInput}>
                                {getMaintain() === 0 ? null : getMaintain() - 500}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>+1 lb/wk:</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textInput}>
                                {getMaintain() === 0 ? null : getMaintain() + 500}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    main: {
        height: "85%",
        backgroundColor: "#4E709D",
    },

    profileContainer: {
        height: 250,
        width: "100%",
        backgroundColor: "#F6F6F6",
        marginTop: 12,
    },

    calorieContainer: {
        height: 3000,
        width: "100%",
        backgroundColor: "#F6F6F6",
        marginTop: 12,
    },

    rowView: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        borderWidth: 1,
    },

    header: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        borderWidth: 1,
        backgroundColor: "#F5B17B",
        alignItems: "center",
        justifyContent: "center",
    },

    labelContainer: {
        height: 50,
        width: "40%",
        flexDirection: "row",
        borderColor: "#000000",
        alignItems: "center",
        justifyContent: "flex-end",
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
        marginLeft: 30,
    },

    textInput: {
        color: "#4E709D",
        fontSize: 25,
        textAlign: "left",
        marginLeft: 15
    },

    textHeader: {
        color: "#F6F6F6",
        fontSize: 28,
        textAlign: "center",
        fontWeight: "bold",
    }
})

export default ProfileScreen