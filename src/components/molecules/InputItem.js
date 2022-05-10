import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const InputItem = props => {
  console.log(props.onChangeText);
  return (
    <View style={{marginBottom: 20}}>
      <Text style={{...Texts.regular1, marginBottom: 10}}>{props.label}</Text>
      <TextInput
        {...props}
        onChangeText={t => props.onChangeText(t)}
        style={styles.textinput}
        maxLength={120}
      />
    </View>
  );
};

export default InputItem;

const styles = StyleSheet.create({
  textinput: {
    ...Texts.regular1,
    borderRadius: 10,
    borderColor: Colors.black,
    borderWidth: 1,
    padding: 10,
  },
});
