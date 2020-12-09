import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Text from '../../ui/components/Text';
import PillComponent from '../components/PillComponent';

const colors = ["ffbd59", "ff5757", "8c52ff", "7ed957", "ff66c4", "ae826a"];

const PillsContainer = () => {
    return (
        <ScrollView style={styles.containerStyle}>
            <PillComponent color={`#${colors[0]}`}/>
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
        backgroundColor: 'aqua'
    }
});