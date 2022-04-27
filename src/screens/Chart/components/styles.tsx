import { StyleSheet } from 'react-native';
import { width } from 'utils/constants';

const styles = StyleSheet.create({
  segmentContainerStyle: {
    marginVertical: 20,
    borderRadius: 20,
    height: 42,
  },
  segmentTextStyle: {
    fontWeight: '600',
  },
  bottomContainerOuterView: { flex: 1, backgroundColor: '#009bad' },
  bottomContainerInnerView: {
    flex: 1,
    height: 100,
    width: width,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // overflow: 'hidden',
  },
});

export default styles;
