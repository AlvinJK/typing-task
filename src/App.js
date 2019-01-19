// @flow
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ScoreBox from './components/ScoreBox';
import TextBox from './components/TextBox';
import Keyboard from './components/Keyboard';

import './App.css';

type Props = {};
type State = {
  textValue: string,
  keyboardKeys: {[string]: boolean},
};
class App extends Component<Props, State> {
  state = {
    textValue: '',
    keyboardKeys: {
      '`': false,
      '1': false,
      '2': false,
      '3': false,
      '4': false,
      '5': false,
      '6': false,
      '7': false,
      '8': false,
      '9': false,
      '0': false,
      '-': false,
      '=': false,
      ';': false,
      "'": false,
      ',': false,
      '.': false,
      '/': false,
      ' ': false,
      Backspace: false,
      Tab: false,
      CapsLock: false,
      Enter: false,
      Shift: false,
      Control: false,
      Alt: false,
      Meta: false,
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
      j: false,
      k: false,
      l: false,
      m: false,
      n: false,
      o: false,
      p: false,
      q: false,
      r: false,
      s: false,
      t: false,
      u: false,
      v: false,
      w: false,
      x: false,
      y: false,
      z: false,
      '[': false,
      ']': false,
      '\\': false,
    },
  };
  componentDidMount() {
    document.addEventListener('keyup', this._onKeyUp);
    document.addEventListener('keydown', this._onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this._onKeyUp);
    document.removeEventListener('keydown', this._onKeyDown);
  }
  render() {
    let {textValue, keyboardKeys} = this.state;
    return (
      <View style={styles.container}>
        <TextBox text={textValue} changeText={this._changeText} />
        <ScoreBox />
        <Keyboard keyboardKeys={keyboardKeys} />
        <View style={{flex: 1}}>
          <Text>Footer</Text>
        </View>
      </View>
    );
  }
  _changeText = (newValue: string) => {
    this.setState({
      textValue: newValue,
    });
  };
  _onKeyUp = (event: KeyboardEvent) => {
    let key = event.key;
    let tempState = {...this.state.keyboardKeys};
    if (tempState.hasOwnProperty(key)) {
      if (tempState[key]) {
        tempState[key] = false;
      }
    }
    this.setState({keyboardKeys: tempState});
  };
  _onKeyDown = (event: KeyboardEvent) => {
    let key = event.key;
    if (key === 'Tab') {
      event.preventDefault();
    }
    let tempState = {...this.state.keyboardKeys};
    if (tempState.hasOwnProperty(key)) {
      if (key === 'CapsLock') {
        tempState[key] = !tempState[key];
      } else {
        if (!tempState[key]) {
          tempState[key] = true;
        }
      }
    }
    this.setState({keyboardKeys: tempState});
  };
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
