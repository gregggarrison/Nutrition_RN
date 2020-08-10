import React from 'react'
import { Button, View, Text } from 'react-native'

export default function HomeScreen({navigation}) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home </Text>
            <Button
                title='Profile'
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
}