import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function SearchBar({ handlePress, query, setQuery }) {

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.search}
                value={query}
                placeholder="search here"
                onChangeText={(text) => setQuery(text)}>
            </TextInput>

            <Button
                buttonStyle={styles.button}
                title="search"
                onPress={handlePress}
                titleStyle={{paddingLeft: 4}}
                
                >
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({

    search: {
        backgroundColor: "white",
        height: 40,
        width: "70%",
        marginLeft: -20,
        color: "#4E709D",
        fontSize: 25,
        marginBottom: 15,
        marginTop: 15,
        textAlign: 'center',
        borderRadius: 20,
        borderWidth: 2,
    },

    searchContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        borderBottomWidth: 1,
        backgroundColor: "#F5B17B",
        justifyContent: "center",
        paddingTop: 40,
    },

    button: {
        backgroundColor: "#ff8584",
        color: "#ff8584",
        borderWidth: 1,
    
    },

    textInput: {
        color: "#4E709D",
        fontSize: 25,
        textAlign: "left",
        marginLeft: 15,
    }
})