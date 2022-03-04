import { Button, Text, StyleSheet, View } from "react-native";

export function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Tabs");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
