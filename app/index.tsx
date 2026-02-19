import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/card";

export default function Home(){
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo ao React Native!</Text>
            <Text style={styles.subtitle}>Esta é a tela inicial do nosso app</Text>
            <Card 
                title="Página de Detalhes"
                description="Acesse esta página para ver mais informações detalhadas sobre o funcionamento do app."
                buttonText="Ir para Detalhes"
                onPress={() => router.push('/detalhes')}
            />
            <Card 
                title="Sobre Nós"
                description="Conheça mais sobre a nossa equipe e a história por trás da criação deste projeto."
                buttonText="Ir para Sobre"
                onPress={() => router.push('/sobre')}
            />
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
    }
})