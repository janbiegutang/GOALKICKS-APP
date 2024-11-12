import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={icon}
                resizeMode="contain" // Use resizeMode instead of resizeMethod
                style={{ width: 24, height: 24, tintColor: color }} // Adjust size here
            />
        </View>
    );
}

const TabLayout = () => {
    return (
        <>
            <Tabs>
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="shop"
                    options={{
                        title: 'Shop',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon={icons.shop}
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="order"
                    options={{
                        title: 'Ordered Items',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon={icons.order}
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="customize"
                    options={{
                        title: 'Customize',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon={icons.customize}
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                            />
                        )
                    }}
                />
                
            </Tabs>
        </>
    );
}

export default TabLayout;
