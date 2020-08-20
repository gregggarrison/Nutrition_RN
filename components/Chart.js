import React from 'react'
import { StyleSheet, Dimensions, View, Text } from 'react-native'
import { StackedBarChart } from 'react-native-chart-kit'

export default function Chart({ totalCarbs, totalProtein, totalCal, totalFat }) {

    const data = {
        labels: ["carbs", "protein", "fat"],
        legend: ["actual", "goal", "over"],
        data: [
            [Math.floor(totalCarbs) * 4, 703, 2346],
            [Math.floor(totalProtein) * 4, 938, 2346],
            [Math.floor(totalFat) * 9, 703, 2346],
        ],
        barColors: ["blue", "#ced6e0","red"]
    }

    return (
        <View style={styles.container}>
            <Text>Source of Calories</Text>
            <StackedBarChart
                data={data}
                width={Dimensions.get('window').width - 16}
                height={220}
                title="Source of Calories"
                chartConfig={{
                    backgroundGradientFrom: '#f7f78b',
                    backgroundGradientTo: '#fc5858',
                    decimalPlaces: 0,
                    paddingLeft: 100,
                    justifyContent: "flex-start",
                    textAlign: "left",
                    horizontalLabelRotation: 180,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, style: {
                        borderRadius: 16,
                    },
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', padding: 8,
        marginTop: -10,
    },
});