import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import Text from './Text';

const Button = (props) => {
    return (
        <TouchableOpacity style={[props.buttonStyle, styles.buttonStyle]} onPress={props.onPress} >
            <Text style={[props.textStyle, styles.textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    buttonStyle: {

    },
    textStyle: {

    }
});