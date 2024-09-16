import type React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home-screen/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { CommunityScreen } from '../screens/community-screen/CommunityScreen';
import { BookmarksScreen } from '../screens/bookmarks-screen/BookmarksScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="My courses" component={BookmarksScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="bookmark" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Community" component={CommunityScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="people" size={size} color={color} />
                ),
            }} />
        </Tab.Navigator>
    );
};
