import React, { useCallback, useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';
import PillComponent from '../components/PillComponent';

import { LocalNotification, ScheduledNotification } from '../../services/LocalPushController';

import { API_URL, COLORS } from '../../../utils/global';

import auth from '@react-native-firebase/auth';

import PushNotification from "react-native-push-notification";
import { date } from 'yup';

const PillsContainer = ({ navigation }) => {

    const [pills, setPills] = useState([]);

    useEffect(
        async () => {
            // try {
            //     //${auth().currentUser.uid}
            //     const response = await fetch(`${API_URL}get_prescription/TESTINGUID123456789`);
            //     const json = await response.json();
            //     console.log(json);
            // } catch (error) {
            //    console.log(error);
            //    setPills([]);
            // }

            setPills([
                {
                    name: "Paracetamol",
                    pill: {

                    },
                    remain: 11,
                    frequency: "3 times per day",
                    time: ["9:00", "12:00", "23:05"],
                    video: "vQMujAI69Hg",
                },
                {
                    name: "Ibuprofen",
                    remain: -1,
                    frequency: "1 time per day",
                    time: ["4:00"],
                    video: "QhGxwX9yvRA",
                },
                {
                    name: "Daily Pill",
                    remain: -1,
                    frequency: "1 time per day",
                    time: ["16:00"],
                },
                {
                    name: "Once Pill",
                    remain: 4,
                    frequency: "1 time per day",
                    time: ["9:00"],
                },
                {
                    name: "First Pill",
                    remain: 11,
                    frequency: "3 times per day",
                    time: ["9:00", "12:00", "19:00"],
                },
                {
                    name: "Night Pill",
                    remain: -1,
                    frequency: "1 time per day",
                    time: ["4:00"],
                },
                {
                    name: "Daily Pill",
                    remain: -1,
                    frequency: "1 time per day",
                    time: ["16:00"],
                },
                {
                    name: "Once Pill",
                    remain: 4,
                    frequency: "1 time per day",
                    time: ["9:00"],
                },
            ]);
        }, []);


    const onPress = () => {
        ScheduledNotification("Aleks", pills[0].name, new Date(Date.now() + 5000));
        ScheduledNotification("Aleks", pills[0].name, new Date(Date.now() + 2000));
        ScheduledNotification("Aleks", pills[1].name, new Date(Date.now() + 3000));
        ScheduledNotification("Aleks", pills[2].name, new Date(Date.now() + 7000));
        ScheduledNotification("Aleks", pills[2].name, new Date(Date.now() + 6000));
        ScheduledNotification("Aleks", pills[3].name, new Date(Date.now() + 10000));
    };
    const addNotification = (name, date) => {
        ScheduledNotification("Aleks", name, date);
    }

    return (
        <>
            <ScrollView style={styles.containerStyle}>
                {pills.map((pill, index) => {
                    pill.time.map(time => {
                        const hour = time.split(':')[0];
                        const minute = time.split(':')[1];
                        const current = new Date();
                        let notificationDate = new Date();
                        notificationDate.setHours(hour);
                        notificationDate.setMinutes(minute);
                        if (current.getHours() > hour && current.getMinutes() > minute) { 
                            notificationDate.setDate(current.getDate() + 1)
                        }
                        addNotification(pill.name, notificationDate);
                        
                    });
                    const color = `#${COLORS[index % COLORS.length]}`;
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('PillDetails', { ...pill, color })}>
                            <PillComponent key={index} pill={pill} color={color} />
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
            <Button onPress={onPress} title="Notification"></Button>
        </>
    );
};

export default PillsContainer;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        margin: 8,
        padding: 8,
        width: '95%',
    }
});