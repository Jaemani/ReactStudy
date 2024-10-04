import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Alert, Text, Vibration } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function triggerVibration() {
    Vibration.vibrate(200); // Vibrate for 200ms
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera 
        ref={cameraRef}
        style={{ flex: 1 }} 
        type={CameraType.back}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            marginBottom: 20,
          }}>
          <Button
            title="Show Message"
            onPress={() => Alert.alert('Message', 'This is a message box!')}
          />
          <Button title="Vibrate" onPress={triggerVibration} />
        </View>
      </Camera>
    </View>
  );
}