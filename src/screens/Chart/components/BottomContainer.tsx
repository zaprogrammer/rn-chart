import React from 'react';
import { View } from 'react-native';
import styles from 'screens/Chart/components/styles';

const BottomComponent = () => {
  return (
    <View style={styles.bottomContainerOuterView}>
      <View style={styles.bottomContainerInnerView} />
    </View>
  );
};

export default BottomComponent;
