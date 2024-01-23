import React from 'react';
import {
    ActivityIndicator,
    Image,
    SafeAreaView, Text, View
} from 'react-native';
import { styles } from './styles';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function Details({ route }) {

    const { name: city } = route.params;

    const { data, isLoading } = useQuery(['monitorar', city], async () => {
        const myKey = "d5f31228b621584b007e3c3db1411446";

        // Simular delay da requisição
        // const delay = await new Promise((resolve) => setTimeout(() => {
        //     resolve();
        // }, 3000));
        
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myKey}&lang=pt_br`);

        return data;
    });

    if (isLoading) {
        return <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightblue',
        }}>
            <ActivityIndicator size={'large'} />
        </View>
    }

    const {
        name,
        weather: [{ description, icon: iconKey }],
        main: {
            temp,
            feels_like,
            temp_max,
            temp_min,
        },
    } = data;

    const icon = `http://openweathermap.org/img/wn/${iconKey}.png`;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.text}>
                no momento: <Text style={[styles.value, {
                    textTransform: undefined,
                }]}>{description}</Text>
            </Text>
            <Text style={styles.text}>
                temperatura: <Text style={styles.value}>{parseInt(temp)} ºC</Text>
            </Text>
            <Text style={styles.text}>
                sensação térmica: <Text style={styles.value}>{parseInt(feels_like)} ºC</Text>
            </Text>
            <Text style={styles.text}>
                máxima: <Text style={styles.value}>{parseInt(temp_max)} ºC</Text>
            </Text>
            <Text style={styles.text}>
                mínima: <Text style={styles.value}>{parseInt(temp_min)} ºC</Text>
            </Text>
            <Image
                style={styles.icon}
                source={{ uri: icon }}
            />
        </SafeAreaView>
    );
}