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
export default function KeyboardFifthRow(props: Props) {
  let {keyboardKeys} = props;
  return (
    <View style={styles.boardRow}>
      <BoardKey
        text={'Shift'}
        styles={[
          styles.boardKey,
          styles.twoKey,
          keyboardKeys.shift ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'Z'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.z ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'X'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.x ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'C'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.c ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'V'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.v ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'B'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.b ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'N'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.n ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'M'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.m ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'<\n,'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys[','] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'>\n.'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['.'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'?\n/'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['/'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'Shift'}
        styles={[
          styles.boardKey,
          styles.twoKey,
          keyboardKeys.shift ? styles.boardKeyLit : null,
        ]}
      />
    </View>
  );
}
