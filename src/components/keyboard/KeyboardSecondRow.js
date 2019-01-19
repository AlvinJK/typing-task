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
export default function KeyboardSecondRow(props: Props) {
  let {keyboardKeys} = props;
  return (
    <View style={styles.boardRow}>
      <BoardKey
        text={'~\n`'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['`'] || keyboardKeys['~'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'!\n1'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['1'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'@\n2'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['2'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'#\n3'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['3'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'$\n4'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['4'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'%\n5'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['5'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'^\n6'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['6'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'&\n7'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['7'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'*\n8'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['8'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'(\n9'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['9'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={')\n0'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['0'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'—\n-'}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['-'] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'+\n='}
        styles={[
          styles.boardKey,
          styles.oneKey,
          keyboardKeys['='] ? styles.boardKeyLit : null,
        ]}
      />
      <BoardKey
        text={'Backspace'}
        styles={[
          styles.boardKey,
          styles.twoKey,
          keyboardKeys.backspace ? styles.boardKeyLit : null,
        ]}
      />
    </View>
  );
}
