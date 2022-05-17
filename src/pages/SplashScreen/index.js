import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Colors} from '../../utils/colors';
import {Texts} from '../../utils/texts';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'SET_STEP_COMPLETED', value: false});

    setTimeout(() => {
      navigation.replace('StepRegister');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 80,
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          ...Texts.regular2,
          color: Colors.default,
          textAlign: 'center',
          marginTop: -50,
          fontSize: 40,
        }}>
        Test SERU
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
