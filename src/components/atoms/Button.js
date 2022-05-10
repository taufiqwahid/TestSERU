import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const Button = ({onPress, text, bgColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 10,
        backgroundColor: bgColor ? bgColor : Colors.default,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
        minWidth: 120,
      }}>
      <Text
        style={{
          ...Texts.regular1,
          color: 'white',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
