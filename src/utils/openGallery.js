import {launchImageLibrary} from 'react-native-image-picker';

const openGallery = setPhoto => {
  console.log('setPhoto', setPhoto);
  launchImageLibrary(
    {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 512,
      maxWidth: 512,
      quality: 0.5,
    },
    response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      } else {
        setPhoto(response.assets[0]);
        console.log('responses', response.assets[0]);
        // modal.current?.close();
      }
    },
  );
};

export default openGallery;
