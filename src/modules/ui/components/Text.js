import React from 'react';
import { Text as RText, StyleSheet } from 'react-native';

const Text = (props) => {
    return <RText style={[styles.textStyle, props.style]} {...props} />;
};

export default Text;

const styles = StyleSheet.create({
    textStyle: {

    }
});