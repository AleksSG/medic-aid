import React from 'react';
import { Button as RButton, StyleSheet } from 'react-native';

const Button = (props) => {
    return <RButton style={[styles.buttonStyle, props.style]} {...props} />;
};

export default Button;

const styles = StyleSheet.create({
    buttonStyle: {

    }
});