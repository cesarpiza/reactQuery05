import { Dimensions, StyleSheet } from 'react-native';
const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        height: height * 0.25,
        backgroundColor: 'lightblue',
        padding: 20,
    },
    logo: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        columnGap: 10,
        height: 40,
        marginTop: 10,
    },
    textInput: {
        backgroundColor: 'white',
        flex: 0.7,
        fontSize: 16,
        padding: 10,
    },
    button: {
        backgroundColor: 'darkblue',
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        textTransform: 'capitalize',
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'capitalize',
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
});