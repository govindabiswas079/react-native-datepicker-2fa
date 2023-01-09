/* import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import TouchID from "react-native-touch-id";

const App = () => {
  const [state, setState] = useState()


  useEffect(() => {
    TouchID.isSupported()
      .then(biometryType => {
        setState({ biometryType });
      })
  }, [])

  const _clickHandler = () => {
    TouchID.isSupported()
      .then(authenticate)
      .catch(error => {
        alert('TouchID not supported');
      });
  }

  function authenticate() {
    return TouchID.authenticate('to demo this react-native component', optionalConfigObject)
      .then(success => {
        alert('Authenticated Successfully');
      })
      .catch(error => {
        console.log(error)
        alert(error.message);
      });
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
      <TouchableHighlight style={{ borderRadius: 3, marginTop: 200, paddingTop: 15, paddingBottom: 15, paddingLeft: 15, paddingRight: 15, backgroundColor: '#0391D7' }} onPress={_clickHandler} underlayColor="#0380BE" activeOpacity={1}>
        <Text style={{ color: '#fff', fontWeight: '600' }}>
          {`Authenticate with ${state}`}
        </Text>
      </TouchableHighlight>
    </View>
  );
}


export default App

const optionalConfigObject = {
  title: 'Authentication Required',
  imageColor: 'blue',
  imageErrorColor: 'red',
  sensorDescription: 'Touch sensor',
  sensorErrorDescription: 'Failed',
  cancelText: 'Cancel',
  fallbackLabel: 'Show Passcode',
  unifiedErrors: false,
  passcodeFallback: true,
}; */





import React from "react";
import { Button, View } from "react-native";
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true })

let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString()
let payload = epochTimeSeconds + 'some message'

const App = () => {

  rnBiometrics.isSensorAvailable()
    .then((resultObject) => {
      const { available, biometryType } = resultObject

      if (available && biometryType === BiometryTypes.TouchID) {
        console.log('TouchID is supported')
      } else if (available && biometryType === BiometryTypes.FaceID) {
        console.log('FaceID is supported')
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        console.log('Biometrics is supported')
      } else {
        console.log('Biometrics not supported')
      }
    })

  // rnBiometrics.createKeys()
  //   .then((resultObject) => {
  //     const { publicKey } = resultObject
  //     console.log(publicKey)
  //   })

  // rnBiometrics.createSignature({
  //   promptMessage: '2FA',
  //   payload: payload,
  //   cancelButtonText: 'Cancel'
  // })
  //   .then((resultObject) => {
  //     const { success, signature } = resultObject
  // 
  //     if (success) {
  //       console.log(signature)
  //     }
  //   })

  const onOpenAuth = () => {
    rnBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint', payload: payload, cancelButtonText: 'Cancel' })
      .then((resultObject) => {
        const { success } = resultObject

        if (success) {
          console.log('successful biometrics provided')
        } else {
          console.log('user cancelled biometric prompt')
        }
      })
      .catch(() => {
        console.log('biometrics failed')
      })
  }



  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF', }}>
        <Button onPress={onOpenAuth} title="Auth" />
      </View>
    </>
  )
}

export default App

