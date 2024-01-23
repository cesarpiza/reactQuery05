import React from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { styles } from './styles';
import CityInput from '../../components/cityInput';
import CitiesList from '../../components/citiesList';

export default function Home() {

    return (
        <SafeAreaView style={styles.container}>
            <CityInput />
            <CitiesList />
        </SafeAreaView>
    );
}