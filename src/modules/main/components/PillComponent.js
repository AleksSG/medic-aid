import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../../ui/components/Text';

const PillComponent = (props) => {
    return (
        <View style={[{ backgroundColor: props.color }, styles.containerStyle]}>
            <Text style={styles.textStyle}>Pill 1</Text>
            <Text style={styles.nextArrowStyle}>{"➤"}</Text>
        </View>
    );
};

export default PillComponent;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        height: 85,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        paddingHorizontal: 16,
    },
    textStyle: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 48,
    },
    nextArrowStyle: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 48,
    }

});