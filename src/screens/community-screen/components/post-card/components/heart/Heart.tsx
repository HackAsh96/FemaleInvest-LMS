import type React from 'react'
import { useCallback, type FunctionComponent } from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

type HeartProps = {
    isLiked: boolean
    onLike: (id: string) => void
    id: string
}

const Button = Animated.createAnimatedComponent(TouchableOpacity)
export const Heart: FunctionComponent<HeartProps> = ({ isLiked, onLike, id }) => {
    const scaleProgress = useSharedValue(1)

    const handleLikePress = useCallback(() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        scaleProgress.value = withTiming(1.2, { easing: Easing.linear }, () => {
            scaleProgress.value = withTiming(1, { duration: 350 });
        })
        onLike(id);
    }, [isLiked]);

    const heartScaleStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scaleProgress.value }]
        }
    })

    return <Button hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} onPress={handleLikePress} style={[styles.likeButton, heartScaleStyle]}>
        <FontAwesome
            name={isLiked ? 'heart' : 'heart-o'}
            size={24}
            color={isLiked ? 'pink' : 'black'}
        />
    </Button>
}

const styles = StyleSheet.create({
    likeButton: {
        alignSelf: 'flex-start',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
})