import React, { useCallback, useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import DoctorComponent from '../components/DoctorComponent';

import { API_URL, COLORS } from '../../../utils/global';

import auth from '@react-native-firebase/auth';

const DoctorsContainer = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(
        () => {
            // try {
            //     const response = await fetch(`${API_URL}doctors/${auth().currentUser.uid}`);
            //     const json = await response.json();
            //     console.log(json);
            // } catch (error) {
            //    console.log(error);
            //    setPills([]);
            // }

            setDoctors([
                {
                    name: "Ruben Lopez",
                    speciality: "COVID-19",
                    address: "Hospital Baia, 19",
                    phoneNumber: "61616161",
                    notes: "",
                },
                {
                    name: "Name Doctor 2",
                    speciality: "Sight",
                    address: "Clinic Bruh, 19",
                    phoneNumber: "111111111",
                    notes: "",
                },
                {
                    name: "Bruh Doctor",
                    speciality: "Corpse Analysis",
                    address: "Home service",
                    phoneNumber: "000000000",
                    notes: "Works great with dead bodies",
                },
            ]);
        }, []);
  
    return (
        <ScrollView style={styles.containerStyle}>
            { doctors.map((doctor, index) => {
                const color = `#${COLORS[index % COLORS.length]}`;
                return (
                    <TouchableOpacity onPress={() => {}}>
                        <DoctorComponent key={index} doctor={doctor} color={color} />
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};

export default DoctorsContainer;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        margin: 8,
        padding: 8,
        width: '95%',
    }
});