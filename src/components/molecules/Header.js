import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const Header = ({title, subtitle, onPress, firstPage}) => {
  const dispatch = useDispatch();
  const numberStep = useSelector(state => state.numberStepActive);

  const onBack = () => {
    dispatch({type: 'SET_STEPACTIVE', value: numberStep - 1});
  };

  return (
    <View
      style={{
        backgroundColor: Colors.default,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      {!numberStep == 0 && (
        <Pressable onPress={onBack}>
          <Image
            source={require('../../assets/arrow_back.png')}
            style={{width: 20, height: 20}}
          />
        </Pressable>
      )}
      <View style={{marginLeft: 20}}>
        <Text style={{...Texts.regular2, color: 'white'}}>{title}</Text>
        <Text style={{...Texts.regular1, color: 'white'}}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
