import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Button from '../components/atoms/Button';
import Header from '../components/molecules/Header';
import {Colors} from '../utils/colors';
import {Texts} from '../utils/texts';
import toastMessage from '../utils/toastMessage';

const Wizard3 = ({navigation, route}) => {
  console.log(route);
  const dataRoute = route?.params?.data;
  const formData = new FormData();

  const submitData = () => {
    formData.append('firstName', dataRoute.firstName);
    formData.append('lastName', dataRoute.lastName);
    formData.append('biodata', dataRoute.biodata);
    formData.append('provinsi', dataRoute.provinsi);
    formData.append('kota', dataRoute.kota);
    formData.append('kecamatan', dataRoute.kecamatan);
    formData.append('kelurahan', dataRoute.kelurahan);
    formData.append('noKtp', dataRoute.noKtp);
    formData.append('firstName', {
      uri: dataRoute?.photoSelfie.uri,
      name: dataRoute?.photoSelfie.fileName,
      type: 'image/*',
    });
    formData.append('firstName', {
      uri: dataRoute?.photoKTP.uri,
      name: dataRoute?.photoKTP.fileName,
      type: 'image/*',
    });
    formData.append('firstName', {
      uri: dataRoute?.photoBebas.uri,
      name: dataRoute?.photoBebas.fileName,
      type: 'image/*',
    });
    console.log('formData JSON yang ingin dikirim', formData);
    toastMessage('Data telah dikirim', 'success');
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 80,
      }}>
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
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
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
  );
};

export default Wizard3;

const styles = StyleSheet.create({});
