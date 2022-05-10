import {PermissionsAndroid} from 'react-native';
import {launchCamera} from 'react-native-image-picker';

const openCamera = async setPhoto => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      await launchCamera(
        {
          mediaType: 'photo',
          includeBase64: true,
          maxHeight: 512,
          maxWidth: 512,
          quality: 0.5,
        },
        response => {
          console.log(response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('Image Picker Error: ', response.error);
          } else {
            setPhoto(response.assets[0]);
            console.log('response', response);
          }
        },
      );
    } else if (PermissionsAndroid.RESULTS.DENIED) {
      alert(
        'Izinkan fitur Kamera terlebih dahulu, di pengaturan aplikasi perangkatmu',
      );
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    }
  } catch (err) {
    alert(
      'Izinkan fitur Kamera terlebih dahulu, di pengaturan aplikasi perangkatmu',
    );
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
  }
};
export default openCamera;
