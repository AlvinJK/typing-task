// @flow
import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  text: string,
  styles: any,
};
export default function BoardKey(props: Props) {
  let {text, styles} = props;
  return (
    <View style={styles}>
      <Text>{text}</Text>
    </View>
  );
}
