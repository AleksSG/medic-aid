import React, { useCallback, useState, useEffect } from 'react';

import auth from '@react-native-firebase/auth';

import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './mainTabNavigator/MainTabNavigator';
import LoginContainer from '../credentials/containers/LoginContainer';


const CoreNavigator = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChanged = (usr) => {
        console.log(usr);
        setUser(usr);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;
    console.log(user);
    return (
        <>
            { user
                ? <NavigationContainer>
                    <MainTabNavigator />
                </NavigationContainer>
                : <LoginContainer setUser={onAuthStateChanged}/>
            }
        </>
    );
};

export default CoreNavigator;