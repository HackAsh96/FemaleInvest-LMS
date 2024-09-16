import type React from 'react'
import { useCallback, useEffect, useState, useRef, type FunctionComponent, useMemo } from 'react';
import { View, StyleSheet, TouchableOpacity, ActivityIndicator, type NativeSyntheticEvent, type NativeScrollEvent } from 'react-native';
import { FlashList, type ListRenderItem } from '@shopify/flash-list';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { type CommunityPost } from '@core/entities/CommunityPost';
import { getPostsList, toggleLikePost } from '../../redux/community/CommunityActions';
import { type RootStoreState } from '../../redux/types';
import { useAppDispatch } from '../../utils/reducer-utils/ReducerUtils';
import { PostCard } from './components/post-card/PostCard';

export const CommunityScreen: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { communityPosts } = useSelector((state: RootStoreState) => state.community);

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const listRef = useRef<FlashList<CommunityPost>>(null);


    useEffect(() => {
        fetchPosts(1);
    }, []);

    const fetchPosts = useCallback(async (pageNum: number) => {
        setLoading(true);
        await dispatch(getPostsList(pageNum));
        setPage(pageNum);
        setLoading(false);
    }, [dispatch, page]);

    const onLike = useCallback((id: string) => {
        dispatch(toggleLikePost(id));
    }, [dispatch]);

    const renderPostCard: ListRenderItem<CommunityPost> = useCallback(({ item }) => {
        return <PostCard {...item} onLike={onLike} />;
    }, [onLike]);

    // Handle scroll and display "Scroll to top" button
    const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const yOffset = event.nativeEvent.contentOffset.y;
        setShowScrollToTop(yOffset > 100);
    }, []);

    // Scroll to top functionality
    const scrollToTop = useCallback(() => {
        listRef.current?.scrollToOffset({ offset: 0, animated: true });
    }, []);

    const onEndReached = useCallback(() => {
        if (!loading) {
            fetchPosts(page + 1);
        }
    }, [loading, page, fetchPosts]);

    const ListFooterComponent = useMemo(() => loading ? <ActivityIndicator size="large" color="#000" /> : null, [loading])
    return (
        <View style={styles.container}>
            <FlashList
                ref={listRef}
                data={communityPosts}
                renderItem={renderPostCard}
                keyExtractor={(item, index) => `item-${item.id + index}`}
                estimatedItemSize={200}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.5}
                showsVerticalScrollIndicator={false}
                onScroll={handleScroll}
                ListFooterComponent={ListFooterComponent}
            />

            {/* Floating Button to scroll to top */}
            {showScrollToTop && (
                <TouchableOpacity onPress={scrollToTop} style={styles.scrollToTopButton}>
                    <AntDesign name="arrowup" size={24} color="white" />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 16,
    },
    scrollToTopButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});