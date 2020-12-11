import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Text from '../../ui/components/Text';
import Header from '../../ui/components/Header';

const WristletScreen = ({ navigation }) => {
    return (
        <View style={styles.containerStyle}>
            <Header
                title='Wristlet'
                backButton={() => navigation.goBack()}>
            </Header>
            <Text>To be implemented...</Text>
        </View>
    );
}

export default WristletScreen;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});