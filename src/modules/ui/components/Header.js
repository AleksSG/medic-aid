import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';

const Header = ({
    backButton,
    headerImage,
    title,
}) => {
    return (
        <View style={styles.containerStyle}>
            {backButton
                ? <TouchableOpacity onPress={backButton}>
                    <Text style={styles.backTextStyle}>{'< Back'}</Text>
                </TouchableOpacity>
                : null
            }
            {headerImage}
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
        fontSize: 56,
        fontWeight: 'bold',

    }
});