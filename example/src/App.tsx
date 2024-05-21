import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import BottomSheet from '../../src/components/bottomSheet';

export default function App() {
  const sheetRef = React.useRef<any>(null);

  return (
    <View style={styles.container}>
      <Button title="Open Sheet" onPress={() => sheetRef.current?.open()} />
      <BottomSheet ref={sheetRef}>
        <View style={{ height: 300, backgroundColor: 'red' }}></View>
        <Text style={styles.text}>
          The 😎smart, 📦tiny, and 🎗flexible bottom sheet your app craves
        </Text>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
