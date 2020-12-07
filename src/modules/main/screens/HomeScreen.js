import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Text from '../../ui/components/Text';
import Header from '../../ui/components/Header';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.containerStyle}>
            <Header title='MedicAid'></Header>
            <Button
                title="My Medicine"
                onPress={() => navigation.navigate('Pills')}
            />
            <Button
                title="My Doctor"
                onPress={() => navigation.navigate('Doctor')}
            />
            <Button
                title="My Wristlet"
                onPress={() => navigation.navigate('Wristlet')}
            />

        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});