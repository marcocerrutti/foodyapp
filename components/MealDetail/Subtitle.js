import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#e5c1abff",
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#ead4d4ff",
    borderBottomWidth: 2,
    padding: 6,
  },
});
