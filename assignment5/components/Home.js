import React, {useContext} from "react";
import { AppContext } from "../appContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "./HomeScreen";
import SettingScreen from "./SettingScreen";
import CardScreen from "./CardScreen";
import Stats from "./Stats";

const Tab = createBottomTabNavigator();

export default function Home(){
    const {theme} = useContext(AppContext);
    return (
        <Tab.Navigator
            screenOptions={{
                activeTintColor: theme === 'light' ? '#f53412': '#fff',
                inactiveTintColor: theme === 'light' ? 'blue': '#aaa',
                tabBarStyle: {
                    backgroundColor: theme === 'light' ? '#fff': '#222'
                }
            }}>
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <Icon name="home" size={35} color={color}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name='My Cards'
                    component={CardScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <Icon name="wallet" size={35} color={color}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name='Stats'
                    component={Stats}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <Icon name="chart-pie" size={35} color={color}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name='SettingScreen'
                    component={SettingScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <Icon name="cog" size={35} color={color}/>
                        ),
                    }}
                />

        </Tab.Navigator>
    )
}