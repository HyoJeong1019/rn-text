<<<<<<< HEAD
import { StyleSheet, View, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text0}>Display 안녕하세요</Text> 
      <ThemedText  style={styles.text1} type="default">Display 안녕하세요</ThemedText> 
    </View>
=======
import { StyleSheet, Text, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { PaperProvider, Text as PaperText, Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';

export default function HomeScreen() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <LottieView
          source={require('@/assets/animations/card.json')}
          autoPlay
          loop
          style={styles.lottieAnimation}
        />
      </View>
    </PaperProvider>
>>>>>>> 98e4593 (test: lottie)
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 60,
    padding:10,
    height: "100%",
    backgroundColor:"green"
  },
  text0: {
    fontSize: 30,
    backgroundColor: "red",
    // includeFontPadding:false,
  },
  text1: {
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: "pink",
    // includeFontPadding:false,
  },
  lottieAnimation: {
    width: 200,
    height: 200,
  },
});
