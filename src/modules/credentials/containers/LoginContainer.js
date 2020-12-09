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
            setUser(JSON.stringify(values));
            // try {
            //     const response = await fetch(`${API_URL}patient`);
            //     const json = await response.json();
            //     console.log(json);
            // } catch (error) {
            //     console.log(error);
            // }

            try {
                const response = await fetch(`${API_URL}checkpatient`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values),
                });
                const json = await response.json();
                console.log(json);

                //     // const user = await auth().createUserWithEmailAndPassword(values.email, values.password);
                //     //Connect to server
                //     //Wait for answer
                //     //Connect to FB
                //     //Wait for answer
                //     //Send UID to server
            } catch (error) {
                console.log(error);
                if (error.code === 'auth/user-not-found') {

                }
                if (error.code === 'auth/wrong-password') {

                }
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