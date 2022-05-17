import React, {useRef} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';
import Button from '../atoms/Button';

const DropdownSearch = props => {
  const refRBSheet = useRef();

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          padding: 5,
          borderBottomColor: '#f2f2f2',
          borderBottomWidth: 1,
        }}
        onPress={() => {
          props.chooseRegion(item);
          refRBSheet?.current?.close();
          props.searchData();
        }}>
        <Text style={{...Texts.regular1}}>{item.nama}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginBottom: 20}}>
      <Text style={{...Texts.regular1, marginBottom: 10}}>{props.label}</Text>
      <View>
        <Pressable onPress={() => refRBSheet?.current?.open()}>
          <View style={styles.textinput}>
            <Text style={{...Texts.regular1}}>{props.value}</Text>
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
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextInput
                style={styles.textinput}
                maxLength={40}
                placeholderTextColor={Colors.grey}
                placeholder="Cari nama wilayah . . ."
                onChangeText={props.searchData}
                // value={props.value}
              />
              {/* <Text
                onPress={() => props.searchData('')}
                style={{
                  ...Texts.regular1,
                  color: 'grey',
                  position: 'absolute',
                  right: 10,
                  fontSize: 30,
                }}>
                x
              </Text> */}
            </View>

            <FlatList
              data={props.dataRegion}
              renderItem={renderItem}
              extraData={props.dataRegion}
              keyExtractor={item => item}
            />
          </View>
          <Button onPress={() => refRBSheet?.current?.close()} text="Oke" />
        </View>
      </RBSheet>
    </View>
  );
};

export default DropdownSearch;

const styles = StyleSheet.create({
  textinput: {
    ...Texts.regular1,
    borderRadius: 10,
    borderColor: Colors.black,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
});
