import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home(){
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo ao React Native!</Text>
            <Text style={styles.subtitle}>Esta é a tela inicial do nosso app</Text>
            <TouchableOpacity style={styles.button}> <Text style={styles.buttonText} onPress={() => router.push('/detalhes')}>Ir para detalhes</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}> <Text style={styles.buttonText} onPress={() => router.push('/sobre')}>Ir para sobre</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#e7e6ffff"
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: "#333",
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#555',
        marginBottom: 28
    },
    button: {
        backgroundColor: "#75b8ffff",
        paddingVertical: 8,
        paddingHorizontal: 22,
        borderRadius: 12,
        marginBottom: 12
    },
    buttonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: '600'
    },
})