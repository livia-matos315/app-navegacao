import { StyleSheet, Text, View } from "react-native";

export default function Footer (){
    return (
        <View style={styles.footer}> 
        <Text style={styles.text}> © 2026 - App de navegação em React</Text>
    </View>
    )
};


const styles = StyleSheet.create({
    footer: {
    backgroundColor: "#222",
    textAlign: "center" as const,
    position: "fixed" as const,
    bottom: 0,
    width: "100%",
    padding: 16
  },
  text: {
    color: "#fff",
    fontSize: 14,
  },
});


