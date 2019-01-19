// @flow
import React from 'react';
import {View} from 'react-native';

import BoardKey from '../BoardKey';
import styles from '../../styles/keyboard';
type Props = {
  keyboardKeys: {
    [string]: boolean,
  },
};
export default function KeyboardSixthRow(props: Props) {
  let {keyboardKeys} = props;
  return (
    <View style={styles.boardRow}>
      <BoardKey
        text={'control'}
        styles={[
          styles.boardKey,
          styles.oneHalfKey,
          keyboardKeys.control ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'option'}
        styles={[
          styles.boardKey,
          styles.oneHalfKey,
          keyboardKeys.alt ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'command'}
        styles={[
          styles.boardKey,
          styles.oneHalfKey,
          keyboardKeys.meta ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={' '}
        styles={[
          styles.boardKey,
          styles.fiveKey,
          keyboardKeys[' '] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'command'}
        styles={[
          styles.boardKey,
          styles.oneHalfKey,
          keyboardKeys.meta ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'option'}
        styles={[
          styles.boardKey,
          styles.oneHalfKey,
          keyboardKeys.alt ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey text={' '} styles={[styles.boardKey, styles.twoHalfKey]} />
    </View>
  );
}
