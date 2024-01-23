import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 2.5,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 16,
    },
    value: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
    }
});