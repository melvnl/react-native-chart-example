import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Dimensions
} from 'react-native';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLabel, VictoryTheme } from 'victory-native'

const styles = StyleSheet.create({
    flex: {
      flex: 1,
      backgroundColor: '#000000',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    heading: {
      fontSize: 16,
      color: '#000000',
    },
    categoryContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 11,
      marginBottom: 20,
      marginTop: -10,
    },
    categoryCard: {
      width: '50%',
      padding: 5,
    },
    chartParentContainer: {
      marginTop: 50,
      marginHorizontal: 15,
    },
    chartContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 7,
      marginBottom: 20,
      marginHorizontal: 15,
      justifyContent: 'space-between',
    },
    chartColumn: {
      display: 'flex',
      width: "30%",
    },
    chartRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
  
    },
    chartText: {
      color: '#FFFFFF',
      fontSize: 12,
    },
    textGreen: {
      color: "#9EEBAA",
      fontWeight: 'bold',
      fontSize: 12
    },
    textRed: {
      color: "#BA5A5C",
      fontWeight: 'bold',
      fontSize: 12
    }
  });

class StockChart extends React.Component {

  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.chartParentContainer}>
            <VictoryChart width={Dimensions.get('window').width - 10} padding={40}  theme={VictoryTheme.material} >
              <VictoryLine style={{ data: { stroke: "#9EEBAA" } }}
                data={[
                    // you can populate your api data here
                  { x: 1, y: Math.random() * 1000 + 1 },
                  { x: 2, y: Math.random() * 1000 + 1 },
                  { x: 3, y: Math.random() * 1000 + 1 },
                  { x: 4, y: Math.random() * 1000 + 1 },
                  { x: 5, y: Math.random() * 1000 + 1 }
                ]}
              />
              <VictoryAxis style={{
                axis: { stroke: "#FFFFFF" }, ticks: { stroke: "transparent" }, tickLabels: { fill: "#FFFFFF" }
              }} /><VictoryAxis
                dependentAxis
                style={{ axis: { stroke: "#FFFFFF" }, tickLabels: { fill: "#FFFFFF", fontSize: 12 } }}
                orientation="left"
              />
              
            </VictoryChart>
        </View>
         
        <View style={styles.chartContainer}>
              <View style={styles.chartColumn}>
                <View style={styles.chartRow}>
                  <Text style={styles.chartText}>Open</Text>
                  <Text style={styles.chartText,styles.textGreen}>6393.90</Text>
                </View>
                <View style={styles.chartRow}>
                  <Text style={styles.chartText}>Vol</Text>
                  <Text style={styles.chartText}>27.289B</Text>
                </View>
                <View style={styles.chartRow}>
                  <Text style={styles.chartText}>Up</Text>
                  <Text style={styles.chartText}>212232</Text>
                </View>
              </View>
              <View style={styles.chartColumn}>
                <View style={styles.chartRow}>
                  <Text style={styles.chartText}>High</Text>
                  <Text style={styles.chartText, styles.textRed}>6,435.96</Text>
                </View>
                <View style={styles.chartRow}>
                  <Text style={styles.chartText}>Turnover</Text>
                  <Text style={styles.chartText}>12.787T</Text>
                </View>
                <View style={styles.chartRow}>
                  <Text style={styles.chartText}>Down</Text>
                  <Text style={styles.chartText}>268</Text>
                </View>
              </View>
              <View style={styles.chartColumn}>
                <View style={styles.chartRow}>
                  <Text style={styles.chartText}>Low</Text>
                  <Text style={styles.chartText,styles.textGreen}>6323.12</Text>
                </View>
                <View style={styles.chartRow}>
                  <Text style={styles.chartText}>Freq</Text>
                  <Text style={styles.chartText}>1M</Text>
                </View>
                <View style={styles.chartRow}>
                  <Text style={styles.chartText}>Cap</Text>
                  <Text style={styles.chartText}>7,539.68T</Text>
                </View>
              </View>
        </View>
      </View>
    );
  }
}

export default StockChart;
