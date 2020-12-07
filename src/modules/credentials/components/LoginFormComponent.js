import React, { useCallback } from 'react';

import * as Yup from 'yup';

import { KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native';
import Button from '../../ui/components/Button';
import Text from '../../ui/components/Text';

import { Formik } from 'formik';

const LoginFormComponent = ({
    onPressSubmit
}) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(values, actions) => {
                    onPressSubmit(values);
                    //actions.setSubmitting(false);
                }}
            validationSchema={LoginSchema}>

            {useCallback(
                ({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => {
                    return (
                        <KeyboardAvoidingView


                        >

                            {touched.email && errors.email &&
                                <Text style={{ fontSize: 14, color: 'red' }}>{errors.email}</Text>
                            }
                            
                            <TextInput
                                label='Email'
                                placeholder='Email'
                                onChangeText={handleChange('email')}
                                onBlur={() => setFieldTouched('email')}
                                value={values.email}                               
                            >
                            </TextInput>

                            {touched.password && errors.password &&
                                <Text style={{ fontSize: 14, color: 'red' }}>{errors.password}</Text>
                            }
                            <TextInput
                                placeholder='Password'
                                label='Password'
                                
                                value={values.password}
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                onBlur={() => setFieldTouched('password')}
                          
                            ></TextInput>

                            <Button
                                disabled={!isValid}
                                onPress={handleSubmit}
                                title="Log In"
                            />

                        </KeyboardAvoidingView>
                    )
                }, [])
            }

        </Formik>
    );
}

export default LoginFormComponent;

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
});