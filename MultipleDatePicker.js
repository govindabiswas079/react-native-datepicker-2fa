import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, SafeAreaView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { subWeeks, addWeeks, format, subDays } from 'date-fns';
import RNMaterialDatetimePicker, {
  AndroidDateInputMode,
  AndroidPickerMode,
  AndroidTimeInputMode,
  MaterialDatetimePickerAndroid,
  AndroidDatePickerType,
} from 'react-native-material-datetime-picker';

const today = new Date();
const start = subWeeks(today, 1);
const end = addWeeks(today, 2);

const MultipleDatePicker = () => {
  const [currentTime, setCurrentTime] = useState(today);
  const [currentDate, setCurrentDate] = useState(today);
  const [currentStartDate, setCurrentStartDate] = useState(start);
  const [currentEndDate, setCurrentEndDate] = useState(end);
  const [isVisible, setIsVisible] = useState(false);
  const [is24Hour, setIs24Hour] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const handleShowTimePicker = () => {
    MaterialDatetimePickerAndroid.show({
      value: currentTime,
      titleText: 'Select flight time',
      mode: AndroidPickerMode.TIME,
      is24Hour,
      positiveButtonText: 'OK',
      negativeButtonText: 'Cancle',
      inputMode: AndroidTimeInputMode.CLOCK,
      onConfirm: (date) => {
        setCurrentTime(date);
      },
    });
  };

  const handleShowDatePicker = () => {
    MaterialDatetimePickerAndroid.show({
      value: currentDate,
      titleText: 'Select booking date',
      mode: AndroidPickerMode.DATE,
      // minimumDate: subWeeks(today, 3),
      // maximumDate: addWeeks(today, 4),
      positiveButtonText: 'OK',
      negativeButtonText: 'Cancle',
      inputMode: AndroidDateInputMode.CALENDAR,
      fullscreen,
      type: AndroidDatePickerType.DEFAULT,
      onConfirm: (date) => {
        setCurrentDate(date);
      },
    });
  };

  const handleShowDateRangePicker = () => {
    MaterialDatetimePickerAndroid.show({
      value: currentDate,
      titleText: 'Select duration of trip',
      mode: AndroidPickerMode.DATE,
      // minimumDate: subDays(currentDate, 1),
      // maximumDate: addWeeks(today, 4),
      startDate: currentStartDate,
      endDate: currentEndDate,
      positiveButtonText: 'OK',
      negativeButtonText: 'Cancle',
      inputMode: AndroidDateInputMode.CALENDAR,
      type: AndroidDatePickerType.RANGE,
      onConfirmDateRange: (startDate, endDate) => {
        setCurrentStartDate(startDate);
        setCurrentEndDate(endDate);
      },
    });
  };

  return (
    <>
      {isVisible && (
        <RNMaterialDatetimePicker
          mode={AndroidPickerMode.TIME}
          value={currentDate}
          is24Hour={is24Hour}
          positiveButtonText="OK"
          negativeButtonText="Calcle"
          onConfirm={(date) => {
            setCurrentTime(date);
            setIsVisible(false);
          }}
        />
      )}
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.flight}>SIN ✈ JPN</Text>
          <Text style={styles.detail}>
            <Text style={styles.detailLabel}>Booked on: </Text>
            {format(currentDate, 'PP')}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.detailLabel}>Flight time: </Text>
            {format(currentTime, 'p')}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.detailLabel}>Duration: </Text>
            {format(currentStartDate, 'PP')} ✈ {format(currentEndDate, 'PP')}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonGroup}>
            <View style={styles.button}>
              <Button title="Show Time Picker" onPress={handleShowTimePicker} />
            </View>
            <View style={styles.checkboxGroup}>
              <Text>24 Hour</Text>
              <CheckBox
                value={is24Hour}
                onValueChange={(value) => {
                  setIs24Hour(value);
                }}
              />
            </View>
          </View>
          <View style={styles.buttonGroup}>
            <View style={styles.button}>
              <Button title="Show Date Picker" onPress={handleShowDatePicker} />
            </View>
            <View style={styles.checkboxGroup}>
              <Text>Fullscreen</Text>
              <CheckBox
                value={fullscreen}
                onValueChange={(value) => {
                  setFullscreen(value);
                }}
              />
            </View>
          </View>
          <View style={styles.buttonGroup}>
            <View style={styles.button}>
              <Button
                title="Show Date Range Picker"
                onPress={handleShowDateRangePicker}
              />
            </View>
          </View>
          <View style={styles.buttonGroup}>
            <View style={styles.button}>
              <Button
                title="Show Time Picker Declaratively"
                onPress={() => {
                  setIsVisible(true);
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default MultipleDatePicker;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 16,
  },
  flight: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginBottom: 16,
  },
  detail: {
    fontSize: 20,
    marginBottom: 8,
  },
  detailLabel: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 16,
  },
  button: {
    flex: 1,
    paddingVertical: 8,
  },
  checkboxGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
});