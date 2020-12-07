import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import Button from './Button';

const Header = ({
    backButton,
    title,
}) => {
    return (
        <View style={styles.containerStyle}>
            {backButton
                ? <TouchableOpacity onPress={backButton}>
                    <Text style={styles.backTextStyle}>{'< Back'}</Text>
                </TouchableOpacity>
                //<Button style={styles.backButtonStyle} title='< Back' onPress={backButton}></Button>
                : null
            }
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        width: '100%',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    backButtonStyle: {
        backgroundColor: 'transparent'
    },
    backTextStyle: {
        fontSize: 24,
    },
    titleStyle: {
        color: 'purple',
        fontSize: 64,
        fontWeight: 'bold',

    }
});