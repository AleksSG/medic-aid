import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../../ui/components/Text';
import Header from '../../ui/components/Header';
import DoctorsContainer from '../containers/DoctorsContainer';

const DoctorScreen = ({ navigation }) => {
    return (
        <View style={styles.containerStyle}>
            <Header
                title='Doctors'
                backButton={() => navigation.goBack()}
                headerImage={<Image source={require("../../../assets/images/doctor.png")} style={styles.imageStyle} />}
            >
            </Header>
            <DoctorsContainer />
        </View>
    );
}

export default DoctorScreen;

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