import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../../ui/components/Text';
import Header from '../../ui/components/Header';

const PillDetailsScreen = ({ navigation, route }) => {

    const styles = StyleSheet.create({
        containerStyle: {
            flex: 1,
            alignItems: 'center',
        },
        nameContainerStyle: {
            height: 85,
            width: '95%',
            borderRadius: 20,
            paddingHorizontal: 16,
            marginVertical: 16,
            backgroundColor: route.params.color,
        },
        quantityContainerStyle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',

            padding: 16,
        },
        quantityTextStyle: {
            color: 'black',
            fontSize: 24,
        },
        boxStyle: {
            width: '90%',
            marginVertical: 8,
        },
        textStyle: {
            color: 'black',
            fontSize: 20,
        },
        whiteBoxStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 85,
            borderRadius: 20,
            marginVertical: 8,
            backgroundColor: '#cccccc',
        },
        imageStyle: {
            height: 70,
            width: 85,
            resizeMode: 'stretch'
        },
    });

    return (
        <View style={styles.containerStyle}>
            <Header
                title={route.params.name}
                backButton={() => navigation.goBack()}
                containerStyle={[styles.nameContainerStyle]}
            >
            </Header>
            <View style={styles.quantityContainerStyle}>
                <Text style={styles.quantityTextStyle}>Remain quantity</Text>
                <Text style={styles.quantityTextStyle}>{route.params.remain >= 0 ? route.params.remain : "Always"}</Text>
            </View>
            <View style={styles.boxStyle}>
                <Text style={styles.textStyle}>Name</Text>
                <View style={[{ width: '100%' }, styles.whiteBoxStyle]}>
                    <Text style={styles.textStyle}>{route.params.name}</Text>
                </View>
            </View>
            <View style={styles.boxStyle}>
                <Text style={styles.textStyle}>Frequency</Text>
                <View style={[{ width: '100%' }, styles.whiteBoxStyle]}>
                    <Text style={styles.textStyle}>{route.params.frequency}</Text>
                </View>
            </View>
            <View style={styles.boxStyle}>
                <Text style={styles.textStyle}>Time</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {route.params.time.map((time, index) =>
                    <View key={index} style={[{marginHorizontal: 8, paddingHorizontal: 26}, styles.whiteBoxStyle]}>
                        <Text style={styles.textStyle}>{time}</Text>
                    </View>
                )}
                </View>
            </View>
        </View>
    );
};

export default PillDetailsScreen;

