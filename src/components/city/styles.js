import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(200,200,200)',
        borderWidth: 4,
        borderColor: 'rgb(170,170,170)',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 30,
        paddingRight: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: 120,
    },
    nameAndTempContainer: {

    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    temp: {

    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
    }
});