import { Image, StyleSheet, Platform, Text, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { PaperProvider, Text as PaperText, Button } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.text0}> 안녕하세요</Text>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          안녕하세요
        </Button>
        <PaperText style={styles.text1} variant="displayLarge">안녕하세요</PaperText>
        <PaperText style={styles.text2} variant="displayMedium">Display 한글</PaperText>
        <ThemedText style={styles.text3} type="default">한글 Display</ThemedText>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    backgroundColor:"green"
  },
  text0: {
    fontSize: 30,
    backgroundColor: "red", 
    marginVertical: 10,
  },
  text1: {
    backgroundColor: "blue",
  },
  text2: {
    backgroundColor: "orange",
  },
  text3: {
    backgroundColor: "white",
  },
});
