import React from 'react';
import DeviceInfo from 'react-native-device-info';
import { Button, View } from "react-native";

const DevicePhoneNumber = () => {

  const getPhoneNumber = () => {
    DeviceInfo.getPhoneNumber().then((phoneNumber) => {
      console.log(phoneNumber)
    });
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF', }}>
      <Button onPress={getPhoneNumber} title="Phone Number" />
    </View>
  )
}

export default DevicePhoneNumber