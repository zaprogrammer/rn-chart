import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from 'screens/Chart/styles';
import ChartComponent from 'screens/Chart/components/ChartComponent';
import FilterComponent from 'screens/Chart/components/FilterComponent';
import BottomComponent from 'screens/Chart/components/BottomContainer';

const data = require('../../../assets/data.json');

const ChartScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={styles.container}>
            <View style={styles.box}>
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{`${
                  data.values[data.values.length - 1].value
                } €`}</Text>
              </View>
              <ChartComponent chartData={data} />
              <FilterComponent />
              <BottomComponent />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChartScreen;
