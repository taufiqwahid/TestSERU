import AsyncStorage from '@react-native-async-storage/async-storage';
import toastMessage from './toastMessage';

const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    toastMessage('Gagal menyimpan data dari localstorage');
  }
};

const getData = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    toastMessage('Gagal mengambil data dari localstorage');
  }
};

const mergeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    toastMessage('Gagal menyimpan data dari localstorage');
  }
};

const clearAllData = () => {
  AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    .then(() => alert('success'));
};

const getAllData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);

    return items;
  } catch (error) {
    toastMessage('Gagal menyimpan data dari localstorage');
  }
};

export {getData, storeData, mergeData, getAllData, clearAllData};
