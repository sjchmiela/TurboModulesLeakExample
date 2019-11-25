import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TurboModuleRegistry,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function performanceTest() {
  const SampleTurboModule = TurboModuleRegistry.get('SampleTurboModule');

  let i = 0;
  while (i < 100000) {
    SampleTurboModule.getNumber(i);
    i += 1;
  }
  console.log(i);
}

const codeBlock = `
let i = 0;
while (i < 100000) {
  SampleTurboModule.getNumber(i);
  i += 1;
}
`;

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.code}>{codeBlock}</Text>
        <TouchableOpacity onPress={performanceTest} style={styles.button}>
          <Text style={styles.buttonText}>Run</Text>
        </TouchableOpacity>
        <Text style={styles.description}>
          Code runs for about 3–4 seconds, the memory usage increases by ~60 MB.
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  code: {
    fontFamily: 'Courier',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#1292B4',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    // fontSize: 16,
    marginHorizontal: 20,
    marginTop: 30,
  },
});

export default App;
