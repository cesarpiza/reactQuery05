import { Dimensions, StyleSheet } from 'react-native';
const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        height: height * 0.75,
    },
    contentContainerStyle: {
        padding: 5,
        rowGap: 5,
    }
});