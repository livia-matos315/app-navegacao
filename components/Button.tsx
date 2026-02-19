import { StyleSheet, Text, TouchableOpacity } from 'react-native';

///Definindo o tipo da Props
type ButtonProps = {
    title: string;
    onPress: () => void;
    color?: string; //? significa que é opcional
}

export default function Button ({title, onPress, color = '#007aff'}: ButtonProps){
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
             <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f92727ff',
        width: '50%',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 12,
        padding: 12
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },
});