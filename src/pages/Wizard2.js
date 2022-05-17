import {isEmpty} from 'lodash';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../components/atoms/Button';
import Gap from '../components/atoms/Gap';
import UploadImage from '../components/molecules/UploadImage';
import {getData, mergeData, storeData} from '../utils/asyncStorage';
import {Colors} from '../utils/colors';
import {Texts} from '../utils/texts';
import toastMessage from '../utils/toastMessage';

const Wizard2 = ({navigation, route}) => {
  const [photoSelfie, setPhotoSelfie] = useState();
  const [photoKTP, setPhotoKTP] = useState();
  const [noKtp, setNoKtp] = useState();
  const [photoBebas, setPhotoBebas] = useState();
  const dataRoute = route?.params?.data;
  const dispatch = useDispatch();

  const data = {
    photoSelfie,
    photoKTP,
    noKtp,
    photoBebas,
  };

  useEffect(() => {
    // storeData('@activeStep', 1);
    dispatch({type: 'SET_LOADING', value: false});
    getDataLocal();
  }, []);

  const getDataLocal = () => {
    getData('photoSelfie').then(item => {
      setPhotoSelfie(item);
    });
    getData('photoKTP').then(item => {
      setPhotoKTP(item);
    });
    getData('photoBebas').then(item => {
      setPhotoBebas(item);
    });
    getData('noKtp').then(item => {
      setNoKtp(item);
    });
  };

  const nextPage = () => {
    if (
      isEmpty(photoSelfie) ||
      isEmpty(photoKTP) ||
      isEmpty(noKtp) ||
      isEmpty(photoBebas)
    ) {
      toastMessage('Pastikan data tidak ada yang kosong !', 'info');
      storeData('@statusFirstStep', false);
      dispatch({type: 'SET_LOADING', value: false});
    } else {
      // navigation.navigate('Wizard3', {data: data});

      storeData('@statusFirstStep', true);
      // storeData('@activeStep', 2);
      storeData('@dataWizard2', data);
      storeData('@title', 'Upload Image');
      dispatch({type: 'SET_LOADING', value: true});
      dispatch({type: 'SET_STEPACTIVE', value: 2});
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.default,
      }}>
      {/* <Header
        title="Registration Form"
        subtitle="Upload Image"
        onPress={() => navigation.goBack()}
      /> */}
      <ScrollView
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 20}}>
          <Gap height={20} />
          <UploadImage
            label="Foto Selfie"
            value={photoSelfie}
            setPhoto={item => {
              setPhotoSelfie(item);
              mergeData('photoSelfie', item);
            }}
            source={photoSelfie}
            type="selfie"
          />
          <UploadImage
            label="Foto KTP"
            value={photoKTP}
            setPhoto={item => {
              setPhotoKTP(item);
              mergeData('photoKTP', item);
            }}
            source={photoKTP}
            type="ktp"
          />

          <View>
            <Text style={{...Texts.regular1, marginBottom: 10}}>No KTP</Text>
            <TextInput
              value={noKtp}
              placeholder="Masukkan No KTP"
              onChangeText={item => {
                setNoKtp(item);
                mergeData('noKtp', item);
              }}
              style={styles.textinput}
              maxLength={120}
              keyboardType="number-pad"
            />
          </View>

          <UploadImage
            label="Foto Bebas"
            value={photoBebas}
            setPhoto={item => {
              setPhotoBebas(item);
              mergeData('photoBebas', item);
            }}
            source={photoBebas}
            type="bebas"
          />
          <Gap height={30} />
          <Button text="Selanjutnya" onPress={() => nextPage()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wizard2;

const styles = StyleSheet.create({
  textinput: {
    ...Texts.regular1,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: Colors.grey,
  },
});
