import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {Texts} from '../../utils/texts';
import {Colors} from '../../utils/colors';

const Header = ({title, subtitle, onPress, firstPage}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.default,
        paddingVertical: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      {!firstPage && (
        <Pressable onPress={onPress}>
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
