// @flow
import React from 'react';
import {View} from 'react-native';

import styles from '../../styles/keyboard';
type Props = {
  keyboardKeys: {
    [string]: boolean,
  },
};
export default function KeyboardFirstRow(props: Props) {
  //let {keyboardKeys} = props;
  return <View style={styles.boardRow} />;
}
