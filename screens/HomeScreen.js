import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

export default function HomeScreen({ navigation }) {

    return (

        <View>
            <Text>Home </Text>
            <Button
                title='Profile'
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    )

}

