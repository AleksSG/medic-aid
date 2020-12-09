import React, { useCallback, useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PillComponent from '../components/PillComponent';

import { API_URL, COLORS } from '../../../utils/global';

const PillsContainer = () => {

    const [pills, setPills] = useState([]);

    useEffect(
        () => {
            // try {
            //     const response = await fetch(`${API_URL}pills/${UID}`);
            //     const json = await response.json();
            //     console.log(json);
            // } catch (error) {
            //    console.log(error);
            //    setPills([]);
            // }

            setPills([
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

    return (
        <ScrollView style={styles.containerStyle}>
            {pills.map((pill, index) => <PillComponent key={index} pill={pill} color={`#${COLORS[index%COLORS.length]}`} />,)}
        </ScrollView>
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