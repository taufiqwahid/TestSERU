import {isEmpty} from 'lodash';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Button from '../components/atoms/Button';
import Gap from '../components/atoms/Gap';
import DropdownItem from '../components/molecules/DropdownItem';
import Header from '../components/molecules/Header';
import InputItem from '../components/molecules/InputItem';
import {dataProvinsi} from '../config/dataStatic';
import {Colors} from '../utils/colors';
import toastMessage from '../utils/toastMessage';

const Wizard1 = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [biodata, setBiodata] = useState();
  const [provinsi, setProvinsi] = useState();
  const [kota, setKota] = useState();
  const [kecamatan, setKecamatan] = useState();
  const [kelurahan, setKelurahan] = useState();
  const [itemProvinsi, setItemProvinsi] = useState([
    {value: {id: 14, nama: 'Riau'}, label: 'Riau'},
    {value: {id: 15, nama: 'Jambi'}, label: 'Jambi'},
    {value: {id: 16, nama: 'Sumatera Selatan'}, label: 'Sumatera Selatan'},
    {value: {id: 17, nama: 'Bengkulu'}, label: 'Bengkulu'},
    {value: {id: 18, nama: 'Lampung'}, label: 'Lampung'},
    {
      value: {id: 19, nama: 'Kepulauan Bangka Belitung'},
      label: 'Kepulauan Bangka Belitung',
    },
    {value: {id: 21, nama: 'Kepulauan Riau'}, label: 'Kepulauan Riau'},
  ]);

  const data = {
    firstName: firstName,
    lastName: lastName,
    biodata: biodata,
    provinsi: provinsi?.nama,
    kota: kota?.nama,
    kecamatan: kecamatan?.nama,
    kelurahan: kelurahan?.nama,
  };
  console.log(provinsi);
  const nextPage = () => {
    if (
      isEmpty(data.firstName) ||
      isEmpty(data.lastName) ||
      isEmpty(data.biodata) ||
      isEmpty(data.provinsi) ||
      isEmpty(data.kota) ||
      isEmpty(data.kecamatan) ||
      isEmpty(data.kelurahan)
    ) {
      toastMessage('Pastikan data tidak ada yang kosong !', 'info');
    } else {
      navigation.navigate('Wizard2', {data: data});
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
        subtitle="Enter Bio and Region"
        onPress={() => alert('asdasdas')}
        firstPage
      />
      <ScrollView
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 20}}>
          <Gap height={40} color="white" />
          <InputItem
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <InputItem
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          <InputItem
            label="Biodata"
            multiline
            numberOfLines={4}
            value={biodata}
            onChangeText={setBiodata}
            textAlignVertical="top"
          />
          <DropdownItem
            label="Provinsi"
            type="Provinsi"
            placeholder="Pilih Provinsi"
            open={open}
            items={itemProvinsi}
            setOpen={setOpen}
            value={provinsi?.nama}
            setValue={setProvinsi}
          />
          <DropdownItem
            label="Kota"
            type="Kota"
            placeholder="Pilih Kota"
            open={open}
            items={itemProvinsi}
            setOpen={setOpen}
            value={kota?.nama}
            setValue={setKota}
          />
          <DropdownItem
            label="Kecamatan"
            type="Kecamatan"
            placeholder="Pilih Kecamatan"
            open={open}
            items={itemProvinsi}
            setOpen={setOpen}
            value={kecamatan?.nama}
            setValue={setKecamatan}
          />
          <DropdownItem
            label="Kelurahan"
            type="Kelurahan"
            placeholder="Pilih Kelurahan"
            open={open}
            items={itemProvinsi}
            setOpen={setOpen}
            value={kelurahan?.nama}
            setValue={setKelurahan}
          />
          <Gap height={20} />
          <Button onPress={nextPage} text="Selanjutnya" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wizard1;
