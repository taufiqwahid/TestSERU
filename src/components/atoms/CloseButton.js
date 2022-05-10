import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Texts} from '../../utils/texts';

const CloseButton = ({onPress, text, bgColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 10,
        backgroundColor: 'transparent',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
        minWidth: 120,
      }}>
      <Text
        style={{
          ...Texts.regular1,
          color: 'white',
          fontSize: 30,
        }}>
        x
      </Text>
    </TouchableOpacity>
  );
};

export default CloseButton;

const styles = StyleSheet.create({});
