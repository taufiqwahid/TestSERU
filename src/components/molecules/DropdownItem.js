import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';
import DropDownPicker from 'react-native-dropdown-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import Button from '../atoms/Button';

const DropdownItem = props => {
  const refRBSheet = useRef();

  return (
    <View style={{marginBottom: 20}}>
      <Text style={{...Texts.regular1, marginBottom: 10}}>{props.label}</Text>
      <View>
        <Pressable onPress={() => refRBSheet?.current?.open()}>
          <View style={styles.textinput}>
            <Text>{props.value}</Text>
          </View>
        </Pressable>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack
        height={350}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <DropDownPicker
            searchable
            open={props.open}
            value={props.value}
            items={props.items}
            setOpen={props.setOpen}
            setValue={props.setValue}
            // setItems={setItemProvinsi}
            placeholder={props.value}
            searchPlaceholder={`Masukkan nama ${props.type}`}
          />
          <Button onPress={() => refRBSheet?.current?.close()} text="Oke" />
        </View>
      </RBSheet>
    </View>
  );
};

export default DropdownItem;

const styles = StyleSheet.create({
  textinput: {
    ...Texts.regular1,
    borderRadius: 10,
    borderColor: Colors.black,
    borderWidth: 1,
    padding: 10,
  },
});
