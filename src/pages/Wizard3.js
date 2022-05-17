import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {getData, storeData} from '../utils/asyncStorage';
import {Colors} from '../utils/colors';
import {Texts} from '../utils/texts';
import toastMessage from '../utils/toastMessage';

const Wizard3 = ({navigation, route}) => {
  const dataRoute = route?.params?.data;
  const formData = new FormData();
  const dispatch = useDispatch();

  const submitData = () => {
    getData('@dataWizard1').then(item => {
      formData.append('firstName', item.firstName);
      formData.append('lastName', item.lastName);
      formData.append('biodata', item.biodata);
      formData.append('provinsi', item.provinsi);
      formData.append('kota', item.kota);
      formData.append('kecamatan', item.kecamatan);
      formData.append('kelurahan', item.kelurahan);
    });

    getData('@dataWizard2').then(item => {
      formData.append('noKtp', item.noKtp);
      formData.append('photoSelfie', {
        uri: item?.photoSelfie.uri,
        name: item?.photoSelfie.fileName,
        type: 'image/*',
      });
      formData.append('photoKTP', {
        uri: item?.photoKTP.uri,
        name: item?.photoKTP.fileName,
        type: 'image/*',
      });
      formData.append('photoBebas', {
        uri: item?.photoBebas.uri,
        name: item?.photoBebas.fileName,
        type: 'image/*',
      });
    });
    console.log('formData JSON yang ingin dikirim', formData);
    toastMessage('Data telah dikirim', 'success');

    storeData('@isComplete', true);
    dispatch({type: 'SET_STEP_COMPLETED', value: true});
    dispatch({type: 'SET_LOADING', value: true});

    setTimeout(() => {
      AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() => {
          // storeData('@activeStep', 0);
          storeData('@isComplete', false);
          dispatch({type: 'SET_LOADING', value: false});
          dispatch({type: 'SET_STEPACTIVE', value: 0});
          dispatch({type: 'SET_STEP_COMPLETED', value: false});
        });
    }, 2000);
  };

  useEffect(() => {
    // storeData('@activeStep', 2);
    dispatch({type: 'SET_LOADING', value: false});
  }, []);

  return (
    <ScrollView enabled={false}>
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 80,
          paddingVertical: '30%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <Image
              source={require('../assets/confirm.png')}
              style={{width: 150, height: 170, marginLeft: 55}}
            />
            <View>
              <Text
                style={{
                  ...Texts.regular2,
                  color: Colors.default,
                  textAlign: 'center',
                  fontSize: 30,
                }}>
                Thanks You
              </Text>
              <Text
                style={{
                  ...Texts.regular1,
                  color: Colors.default,
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                have filled in the registration form
              </Text>
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end', marginTop: 30}}>
            <TouchableOpacity
              onPress={() => submitData()}
              style={{
                padding: 10,
                backgroundColor: Colors.default,
                borderRadius: 10,
                alignItems: 'center',
                marginBottom: 30,
                minWidth: 300,
                alignSelf: 'flex-end',
              }}>
              <Text
                style={{
                  ...Texts.regular1,
                  color: 'white',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Wizard3;

const styles = StyleSheet.create({});
