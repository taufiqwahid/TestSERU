import {isEmpty, isError} from 'lodash';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Colors} from '../../utils/colors';
import openCamera from '../../utils/openCamera';
import openGallery from '../../utils/openGallery';
import {Texts} from '../../utils/texts';
import Button from '../atoms/Button';
import CloseButton from '../atoms/CloseButton';

const UploadImage = ({type, setPhoto, source, label}) => {
  const width = Dimensions.get('window').width;
  const refRBSheet = useRef();
  const [chooseFile, setChooseFile] = useState('');
  const [previewImg, setPreviewImg] = useState(false);

  const checkType = () => {
    if (type == 'selfie') {
      openCamera(setPhoto);
      setChooseFile('camera');
    }
    if (type == 'ktp') {
      openGallery(setPhoto);
      setChooseFile('galery');
    }
    if (type == 'bebas') {
      refRBSheet?.current?.open();
    }
  };

  console.log('chooseFile', chooseFile);

  const images = [
    {
      url: source?.uri,
    },
  ];

  return (
    <View style={{marginVertical: 20}}>
      <Text style={{...Texts.regular1, marginBottom: 10}}>Upload Image</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={checkType}
          style={{
            height: 250,
            width: width,
            maxWidth: 350,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Colors.grey,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderStyle: 'dotted',
          }}>
          {type == 'selfie' && (
            <Image
              source={
                source ? {uri: source?.uri} : require(`../../assets/camera.png`)
              }
              style={{width: source ? 300 : 40, height: source ? 220 : 40}}
            />
          )}
          {type == 'ktp' && (
            <Image
              source={
                source ? {uri: source?.uri} : require(`../../assets/galery.png`)
              }
              style={{width: source ? 300 : 40, height: source ? 220 : 40}}
            />
          )}
          {type == 'bebas' && (
            <Image
              source={
                source
                  ? {
                      uri: chooseFile == 'camera' ? source?.uri : source?.uri,
                    }
                  : require(`../../assets/addPhoto.png`)
              }
              style={{width: source ? 300 : 40, height: source ? 220 : 40}}
            />
          )}
          {source && (
            <TouchableOpacity
              onPress={() => setPreviewImg(true)}
              style={{
                position: 'absolute',
                backgroundColor: 'rgba(f1,f1,f1,0.5)',
                borderRadius: 10,
                right: 0,
                bottom: 0,
              }}>
              <Image source={require('../../assets/preview.png')} />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </View>
      <Modal visible={previewImg} transparent={true}>
        <ImageViewer imageUrls={images} />

        <View style={{position: 'absolute', right: 0}}>
          <CloseButton
            onPress={() => {
              setPreviewImg(false);
            }}
          />
        </View>
      </Modal>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack
        height={200}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              ...Texts.regular2,
              textAlign: 'center',
              color: Colors.grey,
            }}>
            Kamu mau upload menggunakan apa ?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 10,
            }}>
            <Button
              bgColor={Colors.default}
              onPress={() => {
                refRBSheet?.current?.close();
                openCamera(setPhoto);
                setChooseFile('camera');
              }}
              text="Camera"
            />
            <Button
              bgColor={Colors.default2}
              onPress={() => {
                refRBSheet?.current?.close();
                openGallery(setPhoto);
                setChooseFile('galery');
              }}
              text="Gallery"
            />
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default UploadImage;

const styles = StyleSheet.create({});
