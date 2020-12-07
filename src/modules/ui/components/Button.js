import React from 'react';
import { Button as RButton, StyleSheet } from 'react-native';

const Button = (props) => {
    return <RButton style={[props.style, styles.buttonStyle]} {...props} />;
};

export default Button;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'transparent'
    }
});