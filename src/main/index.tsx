import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export const MainComponent = () => {
    return (
        <View style={styles.container}>
            <Text>{helloMessage("Learning Nexus")}</Text>
            <StatusBar style="auto"/>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

const helloMessage = (name: string) => `Hello, ${name}!`;
