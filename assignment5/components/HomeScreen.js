import React from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function HomeScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileInfo}>
                        <View style={styles.profileIconContainer}>
                        <Icon name='account-circle' size={70} style={styles.profileIcon} />
                        </View>
                        <View style={styles.profile}>
                            <Text style={styles.profileMessage}>Welcome Back,</Text>
                            <Text style={styles.profileName}>Ohene Kwadwo</Text>
                        </View>
                    </View>
                    <View style={styles.search}>
                        <Icon name="magnify" size={40}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    profileContainer: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      profileIconContainer: {
        marginRight: -45,
        marginLeft: -15,
      },
      profile:{
       marginRight: 20
      },
      profileIcon: {
        marginRight: 0,
      },
      profileMessage: {
        fontSize: 15,
        marginLeft: 52,
        color: 'gray'
      },
      profileName:{
        fontSize: 20,
        marginLeft: 50
      },
      search: {
        marginTop: 5,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#f0f0f0'
      }
});