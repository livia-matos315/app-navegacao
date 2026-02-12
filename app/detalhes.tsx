import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Detalhes(){
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Tela de Detalhes</Text>
            <Image style={styles.image} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2MymOLnSteCiV8K-BjEwava-4xReOOjIwQ&s"}} />
            <Text style={styles.description}>Aqui você pode obter mais informações</Text>
            <TouchableOpacity style={styles.button}> <Text style={styles.buttonText} onPress={() => router.back()}>Voltar</Text></TouchableOpacity>
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
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
    },
    buttonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: '600'
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 20
    },
    description: {
        fontSize: 14,
        color: '#8b8589ff',
        fontWeight: '500',
        marginBottom: 20
    },

})