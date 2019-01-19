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
export default function KeyboardThirdRow(props: Props) {
  let {keyboardKeys} = props;
  return (
    <View style={styles.boardRow}>
      <BoardKey
        text={'Tab'}
        styles={[
          styles.boardKey,
          styles.oneHalfKey,
          keyboardKeys.Tab ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'Q'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.q ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'W'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.w ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'E'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.e ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'R'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.r ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'T'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.t ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'Y'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.y ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'U'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.u ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'I'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.i ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'O'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.o ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'P'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.p ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'['}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['['] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={']'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys[']'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'|\n\\'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['\\'] ? styles.boardKeyLit : null,
        ]}
      />
    </View>
  );
}
