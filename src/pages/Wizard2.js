import {isEmpty} from 'lodash';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from '../components/atoms/Button';
import Gap from '../components/atoms/Gap';
import Header from '../components/molecules/Header';
import UploadImage from '../components/molecules/UploadImage';
import {Colors} from '../utils/colors';
import {Texts} from '../utils/texts';
import toastMessage from '../utils/toastMessage';

const Wizard2 = ({navigation, route}) => {
  const [photoSelfie, setPhotoSelfie] = useState();
  const [photoKTP, setPhotoKTP] = useState();
  const [noKtp, setNoKtp] = useState();
  const [photoBebas, setPhotoBebas] = useState();
  const dataRoute = route?.params?.data;
  const data = {
    ...dataRoute,
    photoSelfie,
    photoKTP,
    noKtp,
    photoBebas,
  };

  const nextPage = () => {
    if (
      isEmpty(photoSelfie) ||
      isEmpty(photoKTP) ||
      isEmpty(noKtp) ||
      isEmpty(photoBebas)
    ) {
      toastMessage('Pastikan data tidak ada yang kosong !', 'info');
    } else {
      navigation.navigate('Wizard3', {data: data});
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.default,
      }}>
      <Header
        title="Registration Form"
        subtitle="Upload Image"
        onPress={() => navigation.goBack()}
      />
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
            value={photoSelfie}
            setPhoto={setPhotoSelfie}
            source={photoSelfie}
            type="selfie"
          />
          <UploadImage
            value={photoKTP}
            setPhoto={setPhotoKTP}
            source={photoKTP}
            type="ktp"
          />

          <View>
            <Text style={{...Texts.regular1, marginBottom: 10}}>No KTP</Text>
            <TextInput
              value={noKtp}
              placeholder="Masukkan No KTP"
              onChangeText={t => setNoKtp(t)}
              style={styles.textinput}
              maxLength={120}
              keyboardType="number-pad"
            />
          </View>

          <UploadImage
            value={photoBebas}
            setPhoto={setPhotoBebas}
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
