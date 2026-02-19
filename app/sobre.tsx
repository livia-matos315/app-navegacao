import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/card";

export default function Sobre(){
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Sobre o App</Text>
                <Text style={styles.description}>     Este é o meu primeiro aplicativo mobile desenvolvido com React Native. O projeto foi criado com o objetivo de aplicar na prática os conhecimentos adquiridos em desenvolvimento mobile, explorando conceitos como componentes, navegação, estados e estilização. </Text>
                <Text style={styles.description}>     O app foi pensado para oferecer uma experiência simples, intuitiva e funcional, focando na organização do código e em uma interface agradável para o usuário. Durante o desenvolvimento, foram utilizados recursos modernos do ecossistema React, permitindo a criação de uma aplicação multiplataforma (Android e iOS) com um único código.</Text>
                <Card 
                    title="Sobre Nós"
                    description="Volte para a página inicial."
                    buttonText="Ir para Início"
                    onPress={() => router.push('/')}
                /> 
                <Image style={styles.image} source={{uri: "https://static.wixstatic.com/media/6cd7ee_826553afe9a9424181d7e60ab6f6b34d~mv2.jpg/v1/fill/w_568,h_352,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6cd7ee_826553afe9a9424181d7e60ab6f6b34d~mv2.jpg"}} />
            </ScrollView>
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
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: "#333",
        marginBottom: 12,
    },
    description: {
        fontSize: 14,
        color: '#1d1d1dff',
        fontWeight: '400',
        marginBottom: 20,
        textAlign: 'justify' 
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
        marginTop: 10
    }
});