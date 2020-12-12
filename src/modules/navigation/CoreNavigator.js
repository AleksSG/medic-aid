import React, { useCallback, useState, useEffect } from 'react';

import auth from '@react-native-firebase/auth';

import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator/MainStackNavigator';
import LoginContainer from '../credentials/containers/LoginContainer';


const CoreNavigator = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);

    if (initializing) return null;

    return (
        <>
            <NavigationContainer>
                <MainStackNavigator />
            </NavigationContainer>
            {/* { user
                ? <NavigationContainer>
                    <MainStackNavigator />
                </NavigationContainer>
                : <LoginContainer setUser={setUser}/>
            } */}
        </>
    );
};

export default CoreNavigator;