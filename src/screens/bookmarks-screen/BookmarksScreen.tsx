import type React from 'react'
import { type FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BookmarksScreen: FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <Text>Coming soon!! 🥳</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});