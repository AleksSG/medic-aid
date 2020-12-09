import * as React from 'react';
import { Button, View, StyleSheet, Image } from 'react-native';
import Text from '../../ui/components/Text';
import Header from '../../ui/components/Header';
import PillsContainer from '../containers/PillsContainer';

const PillsScreen = ({ navigation }) => {
    return (
        <View style={styles.containerStyle}>
            <Header
                title='My Pills'
                backButton={() => navigation.goBack()}
                headerImage={<Image source={require("../../../assets/images/pills.png")} style={styles.imageStyle} />}
            >
            </Header>
            <PillsContainer />
        </View>
    );
}

export default PillsScreen;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    imageStyle: {
        height: 70,
        width: 85,
        resizeMode: 'stretch'
    },
});