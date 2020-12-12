import React, { useCallback, useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../../ui/components/Text';

const DoctorComponent = (props) => {
    return (
        <View style={[{ backgroundColor: props.color }, styles.containerStyle]}>
            <Image source={require('../../../assets/images/medic_stuff.png')} style={styles.medicStuff}></Image>
            <View style={styles.textContainer}>
                <Text style={[{ fontWeight: 'bold' }, styles.textStyle]}>{props.doctor.firstName} {props.doctor.lastName}</Text>
                <Text style={styles.textStyle}>{props.doctor.speciality}</Text>
                <Text style={styles.textStyle}>{props.doctor.address}</Text>
                <Text style={styles.textStyle}>{props.doctor.phone}</Text>
                <Text style={styles.textStyle}>{props.doctor.notes}</Text>
            </View>
            <Image source={require('../../../assets/images/phone.png')} style={styles.medicStuff}></Image>
        </View>
    );
};

export default DoctorComponent;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        paddingHorizontal: 16,
        marginVertical: 16,
    },
    medicStuff: {
        height: 72,
        width: 72,
        marginVertical: 16,
        resizeMode: 'stretch',
    },
    textContainer: {
        padding: 8,
    },
    textStyle: {
        color: 'white',
        fontSize: 24,
    },
});