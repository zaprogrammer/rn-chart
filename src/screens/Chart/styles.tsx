import { StyleSheet } from 'react-native';
import { width } from 'utils/constants';

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  box: {
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 16,
    backgroundColor: '#009bad',
  },
  headerTextContainer: {
    width: width,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 16,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
