import React, { useCallback } from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import Text from '../../ui/components/Text';
import LoginFormComponent from '../components/LoginFormComponent';

import auth from '@react-native-firebase/auth';

const LoginContainer = ({
    setUser,
}) => {

    const onPressLogIn = useCallback(
        async (values) => {
            setUser(values);
            // try {
            //     // const response = await fetch(`192.168.43.221:8080/api/login`, {
            //     //     method: 'POST',
            //     //     headers: {
            //     //         Accept: 'application/json',
            //     //         'Content-Type': 'application/json'
            //     //     },
            //     //     body: JSON.stringify(values),
            //     // });
            //     // console.log(response);
                
            //     // const user = await auth().createUserWithEmailAndPassword(values.email, values.password);
            //     //Connect to server
            //     //Wait for answer
            //     //Connect to FB
            //     //Wait for answer
            //     //Send UID to server
            // } catch (error) {
            //     console.log(error);
            //     if (error.code === 'auth/user-not-found') {

            //     }
            //     if (error.code === 'auth/wrong-password') {

            //     }
            // }
        }, []);

    return (
        <SafeAreaView style={styles.layoutStyles}>
            <Text style={styles.textStyle}>Login with email</Text>
            <LoginFormComponent onPressSubmit={onPressLogIn} />
        </SafeAreaView>
    );
};

export default LoginContainer;

const styles = StyleSheet.create({
    layoutStyles: {

    },
    textStyle: {
        fontSize: 24,
    }
})