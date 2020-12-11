import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../main/screens/HomeScreen';
import PillsScreen from '../../main/screens/PillsScreen';
import DoctorScreen from '../../main/screens/DoctorScreen';
import WristletScreen from '../../main/screens/WristletScreen';
import PillDetailsScreen from '../../main/screens/PillDetailsScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {


    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Pills" component={PillsScreen} />
            <Stack.Screen name="PillDetails" component={PillDetailsScreen} />
            <Stack.Screen name="Doctor" component={DoctorScreen} />
            <Stack.Screen name="Wristlet" component={WristletScreen} />
        </Stack.Navigator>
    );
};

export default MainStackNavigator;