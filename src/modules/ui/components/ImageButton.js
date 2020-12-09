
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Button from './Button';

const ImageButton = (props) => {
    return (
        <View style={[styles.containerStyle, props.buttonContainerStyle]}>
            <Image style={styles.imageStyle} source={props.imageUri}></Image>
            <Button {...props} />
        </View>

    );
};

export default ImageButton;

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        
    },
    imageStyle: {
        height: 70,
        width: 85,
        resizeMode: 'stretch'
    },
});