import React from 'react'
import { View } from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

function App()  {
        const data = [ 7, 10, 40 ]
        const colors = [
            '#05EC00', '#EC0000', '#0097EC'
        ]
        const labels = ["Positive", "Negative", "Neutrals"]

        const CUT_OFF = 50
        const Labels = ({  x, y, bandwidth, data }) => (
            data.map((value, index) => (
                <Text
                    key={ index }
                    x={ value > CUT_OFF ? x(0) + 10 : x(value) + 10 }
                    y={ y(index) + (bandwidth / 2) }
                    fontSize={ 14 }
                    fill={ value > CUT_OFF ? 'white' : 'black' }
                    alignmentBaseline={ 'middle' }
                >
                    {value}
                </Text>
            ))
        )

        return (
          <>
            <View style={{ flexDirection: 'row', height: 200, paddingVertical: 24}}>
                <BarChart
                    style={{ flex: 1, marginLeft: 8, marginHorizontal: 30}}
                    data={data}
                    horizontal={true}
                    // withCustomBarColorFormData={true}
                    // flatColor={true}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                >
                    <Labels/>
                </BarChart>
            </View>
          </>
        )
    }

export default App
