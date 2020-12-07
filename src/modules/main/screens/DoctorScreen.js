import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Text from '../../ui/components/Text';
import Header from '../../ui/components/Header';

const DoctorScreen = ({ navigation }) => {
    return (
        <View style={styles.containerStyle}>
            <Header
                title='My Doctor'
                backButton={() => navigation.goBack()}>

            </Header>
        </View>
    );
}

export default DoctorScreen;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});