import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    StatusBar,
} from 'react-native';
import Home from './pages/home';
import Details from './pages/details';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

// Detalhes do projeto: pesquisar no fb: app meteorologia de cidades

export default function App() {

    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <StatusBar hidden />
                <Navigator screenOptions={{
                    headerShown: false,
                }}>
                    <Screen
                        name='Home'
                        component={Home}
                    />
                    <Screen
                        options={{
                            headerShown: true,
                            headerTitle: '',
                        }}
                        name='Details'
                        component={Details}
                    />
                </Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );
}