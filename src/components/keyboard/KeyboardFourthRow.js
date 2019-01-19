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
export default function KeyboardFourthRow(props: Props) {
  let {keyboardKeys} = props;
  return (
    <View style={styles.boardRow}>
      <BoardKey
        text={'Caps Lock'}
        styles={[
          styles.boardKey,
          styles.oneHalfKey,
          keyboardKeys.capslock ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'A'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.a ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'S'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.s ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'D'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.d ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'F'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.f ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'G'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.g ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'H'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.h ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'J'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.j ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'K'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.k ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'L'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys.l ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={':\n;'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys[';'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'"\n\''}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys["'"] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'Enter'}
        styles={[
          styles.boardKey,
          styles.oneHalfKey,
          keyboardKeys.enter ? styles.boardKeyLit : null,
        ]}
      />
    </View>
  );
}
