import React, { useState } from 'react';
import { segmentedControlBgColor } from 'utils/constants';
import SegmentedControl from 'rn-segmented-control';
import styles from 'screens/Chart/components/styles';

const FilterComponent = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index: React.SetStateAction<number>) => {
    setTabIndex(index);
  };

  const filterOptions = ['1W', '1M', '6M', 'MAX'];

  return (
    <SegmentedControl
      tabs={filterOptions}
      paddingVertical={6}
      containerStyle={styles.segmentContainerStyle}
      tileStyle={{
        borderRadius: 20,
      }}
      activeTextColor={'black'}
      textColor={'white'}
      segmentedControlBackgroundColor={segmentedControlBgColor}
      textStyle={styles.segmentTextStyle}
      currentIndex={tabIndex}
      onChange={handleTabsChange}
    />
  );
};

export default FilterComponent;
