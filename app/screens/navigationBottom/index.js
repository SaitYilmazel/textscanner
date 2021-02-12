import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import documentsScreen from './../documentsScreen';
import settingsScreen from './../settingsScreen';
import cameraScreen from './../cameraScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconn from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

class NavigationBottom extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ size, color }) => {
                            switch (route.name) {
                                case "Camera":
                                    return <Icon name="camera-iris" size={size} color={color} />
                                case "Documents":
                                    return <Icon name="view-dashboard" size={size} color={color} />
                                case "Settings":
                                    return <Iconn name="settings" size={size} color={color} />
                            }
                        }
                    })}
                    tabBarOptions={{
                        inactiveTintColor: 'gray',
                        activeTintColor: '#303F9F',
                        labelStyle: {
                            marginBottom: 2,
                            fontSize: 12,
                        }
                    }}>
                    <Tab.Screen
                        name="Camera"
                        component={cameraScreen}

                    />
                    <Tab.Screen
                        name="Documents"
                        component={documentsScreen}
                    />
                    <Tab.Screen
                        name="Settings"
                        component={settingsScreen}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}
export default NavigationBottom;
