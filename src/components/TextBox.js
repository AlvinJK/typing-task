// @flow
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

type Props = {
  text: string,
  changeText: (string) => void,
};
export default function TextBox(props: Props) {
  let {text, changeText} = props;
  return (
    <View style={styles.textBoxContainer}>
      <TextInput
        style={styles.textContainer}
        placeholder="Type here!"
        value={text}
        onChangeText={(text) => {
          changeText(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textBoxContainer: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: 50,
    width: 600,
    borderWidth: 1,
    borderColor: '#000',
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
