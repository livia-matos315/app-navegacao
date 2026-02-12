import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Sobre(){
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre o App</Text>
            <Text style={styles.description}>Este é o meu primeiro aplicativo mobile desenvolvido com React Native. O projeto foi criado com o objetivo de aplicar na prática os conhecimentos adquiridos em desenvolvimento mobile, explorando conceitos como componentes, navegação, estados e estilização. 
O app foi pensado para oferecer uma experiência simples, intuitiva e funcional, focando na organização do código e em uma interface agradável para o usuário. Durante o desenvolvimento, foram utilizados recursos modernos do ecossistema React, permitindo a criação de uma aplicação multiplataforma (Android e iOS) com um único código.</Text>
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
        backgroundColor: "#ffcffbff"
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
        color: '#1d1d1dff',
        fontWeight: '500',
        marginBottom: 20
    },

})