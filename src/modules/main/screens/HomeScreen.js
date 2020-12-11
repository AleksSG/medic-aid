import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../ui/components/Header';
import ImageButton from '../../ui/components/ImageButton';
import Button from '../../ui/components/Button';

import auth from '@react-native-firebase/auth';

const HomeScreen = ({ navigation }) => {

    const logoutButton = async () => { await auth().signOut(); }

    return (
        <View style={styles.containerStyle}>
            <Header title='MedicAid'></Header>
            <View style={styles.buttonsContainer}>
                <ImageButton
                    title="My Medicine"
                    imageUri={require("../../../assets/images/pills.png")}
                    buttonContainerStyle={styles.buttonContainerStyle}
                    buttonStyle={styles.buttonsStyle}
                    textStyle={styles.buttonTextStyle}
                    onPress={() => { navigation.navigate('Pills') }}
                />
                <ImageButton
                    title="My Doctor"
                    imageUri={require("../../../assets/images/doctor.png")}
                    buttonContainerStyle={styles.buttonContainerStyle}
                    buttonStyle={styles.buttonsStyle}
                    textStyle={styles.buttonTextStyle}
                    onPress={() => { navigation.navigate('Doctor') }}
                />
                <ImageButton
                    title="My Wristlet"
                    imageUri={require("../../../assets/images/wristlet.png")}
                    buttonContainerStyle={styles.buttonContainerStyle}
                    buttonStyle={styles.buttonsStyle}
                    textStyle={styles.buttonTextStyle}
                    onPress={() => { navigation.navigate('Wristlet') }}
                />
                <Button
                    title={"Log Out"}
                    onPress={logoutButton}
                    textStyle={{fontSize: 24}}
                />

            </View>
        </View>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        width: "80%",
    },
    buttonContainerStyle: {
        backgroundColor: "#8acaef",
        borderColor: 'black',
        borderRadius: 20,
        justifyContent: 'flex-start',
        padding: 4
    },
    buttonsStyle: {
        justifyContent: 'center',
        padding: 8
    },
    buttonTextStyle: {
        fontSize: 24,
        padding: 8,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
    }
});