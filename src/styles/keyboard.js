// @flow
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  boardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    lineHeight: 50,
  },
  boardKey: {
    height: 60,
    borderRadius: 4,
    width: 30,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    backgroundColor: '#CCC',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  boardKeyLit: {
    backgroundColor: '#F0C',
  },
  oneKey: {
    flex: 1,
  },
  oneHalfKey: {
    flex: 1.5,
  },
  twoKey: {
    flex: 2,
  },
  twoHalfKey: {
    flex: 2.5,
  },
  fiveKey: {
    flex: 5,
  },
});
