// @flow
import React from 'react';
import {View, StyleSheet} from 'react-native';

import KeyboardFirstRow from './keyboard/KeyboardFirstRow';
import KeyboardSecondRow from './keyboard/KeyboardSecondRow';
import KeyboardThirdRow from './keyboard/KeyboardThirdRow';
import KeyboardFourthRow from './keyboard/KeyboardFourthRow';
import KeyboardFifthRow from './keyboard/KeyboardFifthRow';
import KeyboardSixthRow from './keyboard/KeyboardSixthRow';

type Props = {
  keyboardKeys: {
    [string]: boolean,
  },
};
export default function Keyboard(props: Props) {
  let {keyboardKeys} = props;
  return (
    <View style={styles.board}>
      <KeyboardFirstRow keyboardKeys={keyboardKeys} />
      <KeyboardSecondRow keyboardKeys={keyboardKeys} />
      <KeyboardThirdRow keyboardKeys={keyboardKeys} />
      <KeyboardFourthRow keyboardKeys={keyboardKeys} />
      <KeyboardFifthRow keyboardKeys={keyboardKeys} />
      <KeyboardSixthRow keyboardKeys={keyboardKeys} />
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: '90%',
    height: 400,
  },
});
