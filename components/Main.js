import React from "react";
import BirthdaysDatas from "../data/birthdaysData";
import {View, Text, StyleSheet} from "react-native";
import BirthdayItem from './BirthdayItem';

const Main = () => {

    const birthdays = BirthdaysDatas.map(birthday => <BirthdayItem key={birthday.id} birthday={birthday}/>);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Coming soon</Text>
            {birthdays}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 115,
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 100,
    },
    title: {
        fontSize: 22,
        fontWeight: 700,
        paddingBottom: 13
    }
});

export default Main;