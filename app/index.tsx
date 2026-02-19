import Footer from "@/components/Footer";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Card from "../components/card";

export default function Home(){
    const router = useRouter();
    const handlePress = () => {
        console.log('Botão Pressionado!');
    }
    return (
         <SafeAreaView style={styles.safeArea}>
             <ScrollView contentContainerStyle={styles.scrollContainer}>       
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
            <Button title="Salvar" onPress={handlePress} color = '#00c853ff'/>
            <Button title="Editar" onPress={handlePress} color="#f92727ff"/>
            <Button title="Cancelar" onPress={handlePress} color = '#fda01dff' />
            
        </View>
    </ScrollView>
        <Footer />
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
        safeArea: {
        flex: 1,
        backgroundColor: "#ffcffbff"
    },
    scrollContainer: {
        flexGrow: 1, 
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#ffcffbff"
    },
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#e7e6ffff",
        gap: 4
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