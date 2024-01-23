import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useQueryClient } from 'react-query';
import { useNavigation } from '@react-navigation/native';

export default function City(props) {

    const queryClient = useQueryClient();

    const id = `${props.id}-${props.name}`;
    const name = props?.name ? props.name : '--';
    const parseIntTemp = props?.main?.temp ? parseInt(props.main.temp) : '--';
    const icon = props?.weather?.[0]?.icon ? `http://openweathermap.org/img/wn/${props.weather[0].icon}.png` : null;

    function removeItem(id) {
        queryClient.setQueryData('monitorar', (currentData) => {
            const removeItem = currentData.filter(item => `${item.id}-${item.name}` !== id);

            return removeItem;
        })
    }

    const { navigate } = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                navigate('Details', { name });
            }}
        >
            <View style={styles.nameAndTempContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.temp}>{parseIntTemp} ºC</Text>
            </View>
            <Image
                style={styles.icon}
                source={{ uri: icon }}
            />
            <TouchableOpacity
                style={{
                    position: "absolute",
                    right: 5,
                    top: 5,
                }}
                onPress={() => {
                    removeItem(id);
                }}
            >
                <AntDesign name="close" size={24} color="darkred" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}