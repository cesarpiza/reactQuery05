import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { styles } from './styles';
import City from '../../components/city';
import axios from 'axios';
import { useQuery } from 'react-query';

export default function CitiesList() {

    const { data } = useQuery('monitorar', () => [], {

    });

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={data}
                keyExtractor={item => `${item.id}-${item.name}`}
                renderItem={({ item }) => {
                    return <City {...item} />
                }}
            />
        </View>
    );
}