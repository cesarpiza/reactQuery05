import React, { useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    LogBox,
    Alert,
} from 'react-native';
import { styles } from './styles';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

LogBox.ignoreLogs(['Request failed with status code 404']);

export default function CityInput() {

    const [cityInputValue, setCityInputValue] = useState('');

    const queryClient = useQueryClient();

    const queryKey = 'monitorar';
    const mutation = useMutation({
        mutationFn: async (cityInputValue) => {
            const myKey = "d5f31228b621584b007e3c3db1411446";

            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputValue}&units=metric&appid=${myKey}&lang=pt_br`);

            return data;
        },
        onMutate: (cityInputValue) => {

            const previousData = queryClient.getQueryData(queryKey);

            const optimisticData = {
                name: cityInputValue,
            }

            queryClient.setQueryData(queryKey, (currentData) => {
                return [...currentData, optimisticData]
            });

            return previousData;
        },
        onSuccess: (data, cityInputValue, context) => {
            queryClient.setQueryData(queryKey, () => {
                return [...context, data]
            });
        },
        onError: (data, cityInputValue, context) => {
            queryClient.setQueryData(queryKey, () => {
                return [...context]
            })
        },
        onSettled: () => {
            setCityInputValue('');
        }
    });

    return (
        <View style={styles.container}>
            <Text
                style={styles.logo}
            >
                monitora clima
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    value={cityInputValue}
                    onChangeText={text => setCityInputValue(text)}
                />
                <TouchableOpacity
                    disabled={mutation.isLoading}
                    style={styles.button}
                    onPress={() => {
                        if (cityInputValue === '') {
                            Alert.alert('', 'Campo vazio!')
                            return;
                        };

                        const monitorarCacheData = queryClient.getQueryData(queryKey);
                        const checkIfNameExistsInTheMonitorarCache = monitorarCacheData.some((item) => {
                            return item.name.toLowerCase() === cityInputValue.trim().toLowerCase();
                        });
                        if (checkIfNameExistsInTheMonitorarCache) {
                            Alert.alert('', 'Cidade já adicionada na lista!');
                            return;
                        };

                        mutation.mutate(cityInputValue.trim())
                    }}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        monitorar
                    </Text>
                </TouchableOpacity>
            </View>
            <Text
                style={styles.text}
            >
                cidades sendo monitoradas
            </Text>
        </View>
    );
}