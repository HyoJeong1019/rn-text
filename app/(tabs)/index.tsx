import { StyleSheet, View, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text0}>Display 안녕하세요</Text> 
      <ThemedText  style={styles.text1} type="default">Display 안녕하세요</ThemedText> 
    </View>
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
});
