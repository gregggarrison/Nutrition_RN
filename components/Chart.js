import React from 'react'
import { StyleSheet, Dimensions, View, Text } from 'react-native'
import { StackedBarChart } from 'react-native-chart-kit'
import * as Svg from 'react-native-svg';

export default function Chart({ totalCarbs, totalProtein, totalCal, totalFat }) {


    const chartConfig = {
        backgroundGradientFrom: "whhite",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 125, 146, ${opacity})`,
        strokeWidth: 1, // optional, default 3
        barPercentage: 0.1,
        useShadowColorFromDataset: false // optional
    };

    const data = {
        labels: ["carbs", "protein", "fat"],
        legend: ["actual", "goal", "over"],
        data: [
            [Math.floor(totalCarbs) * 4, 703, 2346],
            [Math.floor(totalProtein) * 4, 938, 2346],
            [Math.floor(totalFat) * 9, 703, 2346],
        ],
        barColors: ["blue", "#ced6e0","red"]
        // barColors: ['blue', 'green']
    }




    return (
        // <View style={{flex: 1}}>
        //     <StackedBarChart
        //         data={data}
        //         chartConfig={chartConfig}
        //         // height= "200"
        //         width="100%"

        //     />
        // </View>
        <View style={styles.container}>
            <Text>Source of Calories</Text>
            <StackedBarChart
                data={data}
                width={Dimensions.get('window').width - 16}
                height={220}
                title="Source of Calories"
                chartConfig={{
                    // backgroundColor: '#10abc9',
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
                style={{
                    marginVertical: 8,
                    // borderRadius: 16,
                    textAlign: "right",
                    // font: 7,

                    // marginLeft: 200
                }}
            />
        </View>

    )


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', padding: 8,
        // paddingTop: 30, 
        // marginBottom: 100,
        marginTop: -15
    },
});