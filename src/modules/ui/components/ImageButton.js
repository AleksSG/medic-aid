
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {TouchableOpacity} from 'react-native'
import Button from './Button';
import Text from './Text';

const ImageButton = (props) => {
    return (
        <TouchableOpacity style={[styles.containerStyle, props.buttonContainerStyle]} onPress={props.onPress}>
            <Image style={styles.imageStyle} source={props.imageUri}></Image>
            <Text style={[props.textStyle, styles.textStyle]}>{props.title}</Text>
            {/* <Button title={props.title} buttonStyle={props.buttonStyle} textStyle={props.textStyle} onPress={props.onPress}/> */}
        </TouchableOpacity>

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