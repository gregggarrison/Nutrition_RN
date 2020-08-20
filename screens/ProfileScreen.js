import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ActionSheetIOS, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Nav from '../components/Nav'

export default function ProfileScreen({ navigation }) {

    const [username, setUsername] = useState('Gregg')
    const [age, setAge] = useState("35")
    const [height, setHeight] = useState("74")
    const [weight, setWeight] = useState("235")
    const [sex, setSex] = useState("male")
    const [BMR, setBMR] = useState(null)
    const [activityLevel, setActivityLevel] = useState('slightly active')


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
                options: ["cancel", "sedentary", "slightly active", "active", "very active", "too active"],
                cancelButtonIndex: 0
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                } else if (buttonIndex === 1) {
                    setActivityLevel("sedentary")
                } else if (buttonIndex === 2) {
                    setActivityLevel("slightly active")
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
            <View style={styles.main}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image
                        style={{ width: 400, height: 300, marginTop: 18, marginBottom: 7 }}
                        source={{ uri: "https://ca.slack-edge.com/T02MD9XTF-U0104PU0YH1-1165c623265e-512" }}>
                    </Image>
                </View>
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
                                placeholder="inches"
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
                            <TextInput style={styles.textInput} placeholder="male/female" value={sex} />
                        </View>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label} onPress={pal}>PA Level:</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.textInput} placeholder="activity level" value={activityLevel} />
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
                </View>
                <Nav navigation={navigation} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4E709D",
        justifyContent: "space-between"
    },

    main: {
        height: "100%",
        backgroundColor: "#4E709D",
    },

    profileContainer: {
        height: 280,
        width: "100%",
        backgroundColor: "#F6F6F6",
        marginTop: 12,
    },

    calorieContainer: {
        height: 250,
        width: "100%",
        backgroundColor: "#F6F6F6",
        marginTop: 12,
    },

    rowView: {
        height: 40,
        width: "100%",
        flexDirection: "row",
        borderBottomWidth: 1,
        alignItems: "center"
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

    navText: {
        color: "#4E709D",
        fontSize: 25,
        fontFamily: "veranda"

    },

    textHeader: {
        color: "#F6F6F6",
        fontSize: 28,
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "veranda"
    },

    rowButton: {
        height: 200,
        width: "100%",
        flexDirection: "row",
        borderWidth: 1,
        color: "#ff8584",
        justifyContent: "space-evenly",
    },
})
