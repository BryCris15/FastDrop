import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FastDrop</Text>
      <Text style={styles.subtitle}>Base inicial con Expo Router</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F6F3",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#537A5A",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#696969",
  },
});