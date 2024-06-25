import React, {useContext, useState} from "react";
import { AppContext } from "../appContext";
import { Text, StyleSheet, View, } from "react-native";
import { Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform } from "react-native";

export default function SettingScreen(){
    const {theme, setTheme} = useContext(AppContext);
    const [isToggled, setIsToggled] = useState(theme === 'dark');

    const toggleTheme = () => {
        const newTheme = isToggled ? 'light': 'dark';
        setTheme(newTheme);
        setIsToggled(!isToggled);
    }
    return(
        <SafeAreaView style={[styles.container, theme === 'light' ? styles.lightContainer : styles.darkContainer,]}>
        <View style={styles.header}>
            <Text style={[styles.headerText, theme === 'light' ? styles.lightText : styles.darkText]}>Settings</Text>
        </View>
        <View style={styles.settingList}>
            <View style={styles.settingItem}>
                <Text style={[styles.settingText, theme === 'light' ? styles.lightText : styles.darkText]}>Language</Text>
                <Icon name='chevron-right' size={40} color={'gray'}/>
            </View>
            <View style={styles.divider} />
        </View>
        <View style={styles.settingList}>
            <View style={styles.settingItem}>
                <Text style={[styles.settingText, theme === 'light' ? styles.lightText : styles.darkText]}>My Profile</Text>
                <Icon name='chevron-right' size={40} color={'gray'}/>
            </View>
            <View style={styles.divider} />
        </View>
        <View style={styles.settingList}>
            <View style={styles.settingItem}>
                <Text style={[styles.settingText, theme === 'light' ? styles.lightText : styles.darkText]}>Contact Us</Text>
                <Icon name='chevron-right' size={40} color={'gray'}/>
            </View>
            <View style={styles.divider} />
        </View>
        <View style={styles.settingList}>
            <View style={styles.settingItem}>
                <Text style={[styles.settingText, theme === 'light' ? styles.lightText : styles.darkText]}>Change Password</Text>
                <Icon name='chevron-right' size={40} color={'gray'}/>
            </View>
            <View style={styles.divider} />
        </View>
        <View style={styles.settingList}>
            <View style={styles.settingItem}>
                <Text style={[styles.settingText, theme === 'light' ? styles.lightText : styles.darkText]}>Policy</Text>
                <Icon name='chevron-right' size={40} color={'gray'}/>
            </View>
            <View style={styles.divider} />
        </View>
        <View style={styles.settingList}>
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, theme === 'light' ? styles.lightText : styles.darkText]}>Theme</Text>
        <View style={styles.radioButtonContainer}>
          {Platform.OS === 'android' ? (
            <>
              <Switch
                value={isToggled}
                onValueChange={toggleTheme}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isToggled ? '#f5dd4b' : '#f4f3f4'}
              />
              <Text style={styles.settingText}>
                {isToggled ? 'Dark' : 'Light'}
              </Text>
            </>
          ) : (
            <>
              <Switch
                value={isToggled}
                onValueChange={toggleTheme}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isToggled ? '#f4f3f4' : '#f5dd4b'}
              />
              <Text style={styles.settingText}>
              </Text>
            </>
          )}
        </View>
      </View>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      header:{
          alignItems: 'center',
          marginBottom: 70,
          marginTop: 20,
      },
      headerText:{
          fontSize: 30,
      },
      settingList:{
          marginLeft: 25,
      },
      settingItem: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
      },
      settingText: {
          fontSize: 22,
      },
      divider: {
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          marginVertical: 16,
      },
      radioButtonContainer: {
        marginTop: 40,
      },
      settingText:{
        fontSize: 24,
      },
      lightContainer: {
        backgroundColor: '#fff',
      },
      darkContainer: {
        backgroundColor: '#222',
      },
      lightText: {
        color: '#000',
      },
      darkText: {
        color: '#fff',
      },
});