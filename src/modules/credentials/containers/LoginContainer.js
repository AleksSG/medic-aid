import React, { useCallback } from 'react';

import { SafeAreaView, StyleSheet, View, Image } from 'react-native';
import Text from '../../ui/components/Text';
import LoginFormComponent from '../components/LoginFormComponent';
import { API_URL } from '../../../utils/global';

import auth from '@react-native-firebase/auth';

const LoginContainer = ({
    setUser,
}) => {

    const onPressLogIn = useCallback(
        async (values) => {
            try {
                const firstRegister = await fetch(`${API_URL}checkpatient`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values),
                });
                if (firstRegister.status !== 200) throw "Could not check if the user exists"

                //const fb_answer = await auth().createUserWithEmailAndPassword(values.email, values.password);

                const sendUID = await fetch(`${API_URL}updatepatient`, {
                    method: 'PATCH',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: values.email,
                        UID: "TESTINGUID123456789",
                    }),
                });
                if (sendUID.status !== 200) throw "Error in assigning the UID"

                setUser(values.email)
            } catch (error) {
                if (error.code === 'auth/user-not-found') {

                }
                if (error.code === 'auth/wrong-password') {

                }
                if (error.code === 'auth/email-already-in-use') {
                    await auth().signInWithEmailAndPassword(values.email, values.password)
                }
                console.log(error);
            }
        }, []);

    return (
        <View style={styles.layoutStyles}>
            {/* <View style={styles.upperViewStyle}>
                <Image source={require('../../../assets/images/heart.png')}></Image>
            </View> */}
            {/* <View style={styles.bottomViewStyles}> */}
            <Text style={styles.textStyle}>Login with email</Text>
            <LoginFormComponent onPressSubmit={onPressLogIn} />
            {/* </View> */}
        </View>
    );
};

export default LoginContainer;

const styles = StyleSheet.create({
    layoutStyles: {

    },
    upperViewStyle: {
        flex: 1,
        backgroundColor: "#b6b6b6",
    },
    bottomViewStyles: {
        flex: 1,
        backgroundColor: "#f0f2f6"

    },
    textStyle: {
        fontSize: 24,
    }
})