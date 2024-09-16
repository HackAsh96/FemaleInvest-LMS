import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heart } from './components/heart/Heart';
import { CommunityPost } from '@core/entities/CommunityPost';

interface PostCardProps extends CommunityPost {
    onLike: (id: string) => void;
}

export const PostCard: FunctionComponent<PostCardProps> = ({ author, content, id, isLiked, timestamp, onLike }) => {

    const avatarName = author.split(' ')
        .map((name: string) => name[0])
        .join('');

    return (
        <View key={id} style={styles.postCard}>
            <View style={styles.header}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{avatarName}</Text>
                </View>
                <View>
                    <Text style={styles.author}>{author}</Text>
                    <Text style={styles.timeAgo}>{timestamp}</Text>
                </View>
            </View>
            <Text style={styles.content}>{content}</Text>
            <Heart key={`like-post-${id}`} isLiked={isLiked} id={id} onLike={onLike} />
        </View>
    );
};

const styles = StyleSheet.create({

    postCard: {
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 5,
        borderWidth: 2,
        width: 350,
        alignSelf: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#fff',
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    avatarText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    author: {
        fontFamily: 'PatrickHand-Regular',
        fontSize: 20,
        fontWeight: 'bold',
    },
    timeAgo: {
        fontFamily: 'PatrickHand-Regular',
        fontSize: 15,
        color: '#999',
    },
    content: {
        fontFamily: 'PatrickHand-Regular',
        fontSize: 18,
        marginVertical: 8,
    },
    likeButton: {
        alignSelf: 'flex-start',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
});