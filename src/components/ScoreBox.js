// @flow
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {};
export default function ScoreBox(props: Props) {
  return (
    <View style={styles.scoreContainer}>
      <Text>Scoring</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scoreContainer: {
    flex: 1,
    backgroundColor: '#212121',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
