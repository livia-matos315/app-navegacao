import Card from "@/components/card";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Detalhes(){
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Tela de Detalhes</Text>
            <Image style={styles.image} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2MymOLnSteCiV8K-BjEwava-4xReOOjIwQ&s"}} />
            <Text style={styles.description}>Aqui você pode obter mais informações</Text>
            <Card 
                title="Detalhes"
                description="Volte para a página inicial."
                buttonText="Ir para Início"
                onPress={() => router.push('/')}
            />            <View style={styles.imageAddContainer}>
            <Image style={styles.imageAddContainer} source={{uri: "https://external-preview.redd.it/sNNnVMmWJdgya-RMt3SHSxHjkD6UglK7bDN6jRLl2jc.jpg?auto=webp&s=9e2d1d6b214411f351e7055758722d2877a8b336"}} />
            <Image style={styles.imageAddContainer} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfXIXNoecGd3gZ4yEool6MbsdkgHnWcqNZw&s"}} />
            <Image style={styles.imageAddContainer} source={{uri: "https://i.pinimg.com/736x/18/40/bb/1840bb317c076291553cba15904501d8.jpg"}} />
            </View>
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
    imageAddContainer: {
        width: 100,
        height: 100,
        flexDirection: "row",
        justifyContent: "center",
        margin: 8
    }

})