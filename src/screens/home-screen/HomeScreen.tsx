import type React from 'react'
import { type FunctionComponent, useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { FlashList, type ListRenderItem } from '@shopify/flash-list';
import { useSelector } from 'react-redux';
import { type RootStoreState } from '../../redux/types';
import { getCoursesList } from '../../redux/courses/CoursesActions';
import { type Course } from '@core/entities/Course';
import { CourseCard } from './components/course-card/CourseCard';
import { useAppDispatch } from '../../utils/reducer-utils/ReducerUtils';

export const HomeScreen: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { courses } = useSelector((state: RootStoreState) => state.courses);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            try {
                await dispatch(getCoursesList());
            } catch (error) {
                console.error('Failed to fetch courses', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, [dispatch]);

    const renderCourseCard: ListRenderItem<Course> = useCallback(({ item }) => <CourseCard {...item} />, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#000" />
            ) : (
                <View>
                    <Text>This screen has no interaction yet 🤓</Text>
                    <FlashList
                        data={courses}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderCourseCard}
                        keyExtractor={(item) => item.id}
                        estimatedItemSize={200}
                    /></View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});