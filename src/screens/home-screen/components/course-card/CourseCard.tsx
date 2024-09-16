import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Course } from '@core/entities/Course';

export const CourseCard: React.FC<Course> = ({
    id,
    name,
    description,
    lessons,
    coverImage,
}) => {
    const numberOfLessons = lessons.length;
    const totalDuration = lessons.reduce((total, lesson) => total + lesson.duration, 0);
    const estimatedCompletionTime = Math.ceil(totalDuration / 3600); // in hours

    return (
        <View style={styles.card}>
            <View style={styles.imageContainer} ><Image resizeMode='contain' source={{ uri: coverImage }} style={styles.coverImage} /></View>
            <View style={styles.statusCourseContainer}>
                <View style={styles.percentageContainer}>
                    <Text style={styles.progress}>100%  completed</Text>
                </View>
                <TouchableOpacity onPress={() => null} style={styles.bookmarkButton}>
                    <Ionicons name={'bookmark-outline'} size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.courseContentContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.courseTimeDetails}>
                    <Text style={styles.numberLessons}>{numberOfLessons} lessons</Text>
                    <Text>Time: {estimatedCompletionTime} hr</Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    card: {
        width: 200,
        flexGrow: 1,
        backgroundColor: "#fff",
        borderRadius: 15,
        paddingVertical: 5,
        margin: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 1,
    },
    numberLessons: {
        marginRight: 10
    },
    courseTimeDetails: {
        flexDirection: 'row',
        marginTop: 10
    },
    courseContentContainer: {
        borderTopWidth: 1,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    statusCourseContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    imageContainer: {
        width: 130,
        height: 130,
        alignSelf: 'center'
    },
    percentageContainer: {
        backgroundColor: '#FFFF00',
        minWidth: 50,
        borderRadius: 15,
        borderWidth: 1
    },
    coverImage: {
        height: "100%",
        width: "100%",
        borderRadius: 8,
    },
    details: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    progress: {
        padding: 5,
        fontSize: 14,
        color: '#000',
    },
    bookmarkButton: {
        marginTop: 8,
    },
});