import React from 'react'
import Cam from '../components/Cam'

export default function ImageSearch({ navigation }) {

    return (
        <Cam setQuery={setQuery} handlePress={handlePress} navigation={navigation} />
    )
}

