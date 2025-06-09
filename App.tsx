import React from 'react';
import { SafeAreaView, View, Text, PermissionsAndroid, Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ textAlign: 'center', margin: 10 }}>FaceApp Camera Test</Text>
      <RNCamera
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.front}
        captureAudio={false}
      />
    </SafeAreaView>
  );
};

export default App;
