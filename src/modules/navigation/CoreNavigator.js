import React, { useCallback, useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './mainTabNavigator/MainTabNavigator';


const CoreNavigator = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChanged = useCallback(
        (usr) => {
            setUser(usr);
            if (initializing) setInitializing(false);
        }, [initializing]);

    if (initializing) return null;

    return (
        <>
            { user
                ? <NavigationContainer>
                    <MainTabNavigator />
                </NavigationContainer>
                : <></>
            }
        </>
    );
};

export default CoreNavigator;