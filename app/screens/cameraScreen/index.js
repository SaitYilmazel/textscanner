import styles from './styles';
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, Platform } from 'react-native';
import Slider from '@react-native-community/slider';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLight from 'react-native-vector-icons/Entypo';
import IconSearch from 'react-native-vector-icons/Fontisto';
import IconImage from 'react-native-vector-icons/Ionicons';
import ZoomView from './../../components/ZoomView';

class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      torchon: 'off',
    };
  };

  render() {
    return (
      <ZoomView
        onPinchStart={() => { }}
        onPinchEnd={() => { }}
        onPinchProgress={zoom => this.setState({ zoom })}>
        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={this.state.torchon}
            useNativeZoom={true}
            zoom={this.state.zoom}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <TouchableOpacity style={{ marginLeft: 15, marginTop: 15 }} onPress={() => this.toggleTorch()}>
                {this.state.torchon == RNCamera.Constants.FlashMode.torch ? (
                  <Icon name={'flash'} size={26} color={'white'} />
                ) : (
                    <Icon name={'flash-off'} size={26} color={'white'} />
                  )
                }
              </TouchableOpacity>
              <IconImage name={'images'} size={30} color={'white'} style={{ position: 'absolute', right: 0, marginRight: 15, marginTop: 15 }} />
            </View>
            <View style={{ flex: 1, position: 'relative' }}>
              <View style={{ flexDirection: 'row', position: 'absolute', left: 0, bottom: 0, marginLeft: 10 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <IconLight name={'light-up'} size={20} color={'white'} />
                  <IconLight name={'minus'} size={10} style={{ borderRadius: 5, position: 'absolute', backgroundColor: 'white' }} color={'black'} />
                </View>
                <Slider maximumValue={1} minimumValue={0} step={0.1} thumbTintColor={'#303F9F'} maximumTrackTintColor={'white'} minimumTrackTintColor={'white'} style={{ width: 100 }} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <IconLight name={'light-up'} size={20} color={'white'} />
                  <IconLight name={'minus'} size={10} style={{ borderRadius: 5, position: 'absolute', backgroundColor: 'white' }} color={'black'} />
                </View>
              </View>
              <View style={{ flexDirection: 'row', position: 'absolute', right: 0, bottom: 0, marginRight: 10 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                  <IconSearch name={'zoom'} size={20} color={'white'} />
                  <IconLight name={'minus'} color size={12} style={{ borderRadius: 5, top: 1.5, left: 2, position: 'absolute', backgroundColor: 'white', }} color={'black'} />
                </View>
                <Slider thumbTintColor={'#303F9F'} maximumTrackTintColor={'white'} minimumTrackTintColor={'white'} style={{ width: 100 }} minimumValue={0} maximumValue={1} step={0.1} value={this.state.zoom} onValueChange={(zoom) => this.setState({ zoom })} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <IconSearch name={'zoom'} size={20} color={'white'} />
                  <IconLight name={'plus'} size={12} style={{ borderRadius: 5, left: 2, top: 1.5, position: 'absolute', backgroundColor: 'white' }} color={'black'} />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
              <TouchableOpacity onPress={this.takePicture.bind(this)}>
                <Icon name="camera-iris" size={60} color={'white'} />
              </TouchableOpacity>
            </View>
          </RNCamera>
        </View>
      </ZoomView>
    )
  };

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
    console.log("takePicture");
  };

  toggleTorch() {
    let tstate = this.state.torchon;
    if (tstate == RNCamera.Constants.FlashMode.torch) {
      tstate = RNCamera.Constants.FlashMode.off;
    } else {
      tstate = RNCamera.Constants.FlashMode.torch;
    }
    this.setState({ torchon: tstate })
    console.log("toggleTorch");
  };

};
CameraScreen.defaultProps = {};
CameraScreen.propTypes = {};
export default CameraScreen
