import axios from 'axios';
import {isEmpty} from 'lodash';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Button from '../components/atoms/Button';
import Gap from '../components/atoms/Gap';
import DropdownSearch from '../components/molecules/DropdownSearch';
import Header from '../components/molecules/Header';
import InputItem from '../components/molecules/InputItem';
import {com} from '../config/API';
import {Colors} from '../utils/colors';
import toastMessage from '../utils/toastMessage';

const Wizard1 = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [biodata, setBiodata] = useState();

  const [searchRegion, setSearchRegion] = useState('');
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [dataKota, setDataKota] = useState([]);
  const [dataKecamatan, setDataKecamatan] = useState([]);
  const [dataKelurahan, setDataKelurahan] = useState([]);

  const [chooseProvinsi, setChooseProvinsi] = useState();
  const [chooseKota, setChooseKota] = useState();
  const [chooseKecamatan, setChooseKecamatan] = useState();
  const [chooseKelurahan, setChooseKelurahan] = useState();
  useEffect(() => {
    getProvinsi();
  }, []);

  useEffect(() => {
    getKota();
  }, [chooseProvinsi]);

  useEffect(() => {
    getKecamatan();
  }, [chooseKota]);

  useEffect(() => {
    getKelurahan();
  }, [chooseKecamatan]);

  const getProvinsi = async () => {
    await axios.get(com.provinsi).then(item => {
      setDataProvinsi(item?.data?.provinsi);
    });
  };

  const getKota = async () => {
    await axios.get(com.kota(chooseProvinsi.id)).then(item => {
      setDataKota(item?.data?.kota_kabupaten);
    });
  };
  const getKecamatan = async () => {
    await axios.get(com.kecamatan(chooseKota.id)).then(item => {
      setDataKecamatan(item.data?.kecamatan);
    });
  };
  const getKelurahan = async () => {
    await axios.get(com.kelurahan(chooseKecamatan.id)).then(item => {
      setDataKelurahan(item?.data.kelurahan);
    });
  };

  const data = {
    firstName: firstName,
    lastName: lastName,
    biodata: biodata,
    provinsi: chooseProvinsi?.nama,
    kota: chooseKota?.nama,
    kecamatan: chooseKecamatan?.nama,
    kelurahan: chooseKelurahan?.nama,
  };

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
          <DropdownSearch
            dataRegion={dataProvinsi}
            // searchData={setSearchRegion}
            chooseRegion={setChooseProvinsi}
            label="Provinsi"
            type="Provinsi"
            placeholder="Pilih Provinsi"
            open={open}
            setOpen={setOpen}
            value={chooseProvinsi?.nama}
          />
          <DropdownSearch
            dataRegion={dataKota}
            // searchData={setSearchRegion}
            chooseRegion={setChooseKota}
            label="Kota"
            type="Kota"
            placeholder="Pilih Kota"
            open={open}
            setOpen={setOpen}
            value={chooseKota?.nama}
          />
          <DropdownSearch
            dataRegion={dataKecamatan}
            // searchData={setSearchRegion}
            chooseRegion={setChooseKecamatan}
            label="Kecamatan"
            type="Kecamatan"
            placeholder="Pilih Kecamatan"
            open={open}
            setOpen={setOpen}
            value={chooseKecamatan?.nama}
          />

          <DropdownSearch
            dataRegion={dataKelurahan}
            // searchData={setSearchRegion}
            chooseRegion={setChooseKelurahan}
            label="Kelurahan"
            type="Kelurahan"
            placeholder="Pilih Kelurahan"
            open={open}
            setOpen={setOpen}
            value={chooseKelurahan?.nama}
          />

          <Gap height={20} />
          <Button onPress={nextPage} text="Selanjutnya" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wizard1;
