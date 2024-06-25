import React, {useContext} from "react";
import { AppContext } from "../appContext";
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingScreen from "./SettingScreen";



export default function HomeScreen(){
  const {theme} = useContext(AppContext);
    return(
        <SafeAreaView style={[styles.container, theme === 'light' ? styles.lightContainer : styles.darkContainer,]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileInfo}>
                        <View style={styles.profileIconContainer}>
                        <Icon name='account-circle' size={70} style={[styles.profileIcon, theme === 'light' ? styles.profileIcon : {color: '#fff'}]} />
                        </View>
                        <View style={styles.profile}>
                            <Text style={styles.profileMessage}>Welcome Back,</Text>
                            <Text style={[styles.profileName, theme === 'light' ? styles.profileName : styles.darkText]}>Ohene Kwadwo</Text>
                        </View>
                    </View>
                    <View style={[styles.search, theme === 'light' ? styles.topup : styles.darkIconContainer]}>
                        <Icon name="magnify" size={40} style={[ theme === 'light' ? {color: '#000'} : {color: '#fff'}]}/>
                    </View>
                </View>
                <View style={styles.card}>
                  <Image source={require('../assets/Card.png')}/>
                </View>
                <View style={styles.actionIcons}>
                      <View style={styles.actionItem}>
                        <View style={[styles.sent, theme === 'light' ? styles.topup : styles.darkIconContainer]}>
                          <Icon name="arrow-up-thin" size={40} style={[ theme === 'light' ? {color: '#000'} : {color: '#fff'}]}/>
                        </View>
                        <Text style={styles.actionText}>Send</Text>
                      </View>
                      <View style={styles.actionItem}>
                        <View style={[styles.receive, theme === 'light' ? styles.topup : styles.darkIconContainer]}>
                          <Icon name="arrow-down-thin" size={40} style={[ theme === 'light' ? {color: '#000'} : {color: '#fff'}]}/>
                        </View>
                        <Text style={styles.actionText}>Receive</Text>
                      </View>
                      <View style={styles.actionItem}>
                        <View style={[styles.loan, theme === 'light' ? styles.topup : styles.darkIconContainer]}>
                          <Icon name="currency-usd" size={40}  style={[ theme === 'light' ? {color: '#000'} : {color: '#fff'}]}/>
                        </View>
                      <Text style={styles.actionText}>Loan</Text>
                      </View>
                      <View style={styles.actionItem}>
                        <View style={[styles.topup, theme === 'light' ? styles.topup : styles.darkIconContainer]}>
                          <Icon name="progress-upload" size={40} style={[ theme === 'light' ? {color: '#000'} : {color: '#fff'}]}/>
                        </View>
                        <Text style={styles.actionText}>Top Up</Text>
                      </View>
                </View>
                <View style={styles.transactionTexts}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>Transaction</Text>
                  <Text style={{color:'blue', fontSize: 16}}>Sell all</Text>
                </View>
                <View style={styles.transactionContainer}>
                  <View style={styles.transactionInfo}>
                    <View style={[styles.transactionIconContainer, theme === 'light' ? styles.transactionIconContainer : styles.darkIconContainer]}>
                      <Icon name="apple" size={30} style={[ theme === 'light' ? {color: '#000'} : {color: '#fff'}]}/>
                    </View>
                    <View style={styles.transaction}>
                      <Text style={[styles.transactionName, theme === 'light' ? styles.transactionName : styles.darkText]}>Apple Store</Text>
                      <Text style={styles.transactionType}>Entertainment</Text>
                    </View>
                  </View>
                  <View style={styles.amount}>
                    <Text style={{fontSize: 24}}>-$5.99</Text>
                  </View>
                </View>
                <View style={styles.transactionContainer}>
                  <View style={styles.transactionInfo}>
                    <View style={[styles.transactionIconContainer, theme === 'light' ? styles.transactionIconContainer : styles.darkIconContainer]}>
                      <Icon name="spotify" size={30} style={[ theme === 'light' ? {color: 'green'} : {color: 'green'}]}/>
                    </View>
                    <View style={styles.transaction}>
                      <Text style={[styles.transactionName, theme === 'light' ? styles.transactionName : styles.darkText]}>Spotify</Text>
                      <Text style={styles.transactionType}>Music</Text>
                    </View>
                  </View>
                  <View style={styles.amount}>
                    <Text style={{fontSize: 24}}>-$12.99</Text>
                  </View>
                </View>
                <View style={styles.transactionContainer}>
                  <View style={styles.transactionInfo}>
                    <View style={[styles.transactionIconContainer, theme === 'light' ? styles.transactionIconContainer : styles.darkIconContainer]}>
                      <Icon name="download" size={30} style={[ theme === 'light' ? {color: '#000'} : {color: '#fff'}]}/>
                    </View>
                    <View style={styles.transaction}>
                      <Text style={[styles.transactionName, theme === 'light' ? styles.transactionName : styles.darkText]}>Money Transfer</Text>
                      <Text style={styles.transactionType}>Transaction</Text>
                    </View>
                  </View>
                  <View style={styles.amount}>
                    <Text style={{fontSize: 24, color: 'blue'}}>- $300</Text>
                  </View>
                </View>
                <View style={styles.transactionContainer}>
                  <View style={styles.transactionInfo}>
                    <View style={[styles.transactionIconContainer, theme === 'light' ? styles.transactionIconContainer : styles.darkIconContainer]}>
                      <Icon name="cart" size={30} style={[ theme === 'light' ? {color: '#000'} : {color: '#fff'}]}/>
                    </View>
                    <View style={styles.transaction}>
                      <Text style={[styles.transactionName, theme === 'light' ? styles.transactionName : styles.darkText]}>Grocery</Text>
                      <Text style={styles.transactionType}>Shopping</Text>
                    </View>
                  </View>
                  <View style={styles.amount}>
                    <Text style={{fontSize: 24}}>- $88</Text>
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
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
      },
      card:{
        alignItems: 'center',
      },
      actionIcons:{
        paddingHorizontal: 25,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      actionItem:{
        alignItems: 'center',
      },
      sent:{
        width: 40,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
      },
      receive:{
        width: 40,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
      },
      loan:{
        width: 40,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
      },
      topup:{
        width: 40,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
      },
      actionText: {
        marginTop: 8,
        fontSize: 14,
        color: '#666',
      },
      transactionTexts:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 25,
        marginBottom: -5,
      },
      transactionContainer:{
        paddingVertical: 5,
        paddingHorizontal: 24,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      transactionInfo:{
        flexDirection: 'row',
        alignItems: 'center',
      },
      transactionIconContainer:{
        backgroundColor: '#f0f0f0',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginRight: -30,
        marginLeft: -10,
      },
      transaction:{
        marginRight: 20
      },
      transactionName:{
        fontSize: 20,
        marginLeft: 50,
      },
      transactionType:{
        fontSize: 15,
        marginLeft: 52,
        color: 'gray'
      },
      amount:{
        justifyContent: 'center',
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
      darkIconContainer:{
        backgroundColor: '#000435'
      },
      lightText: {
        color: '#000',
      },
      darkText: {
        color: '#fff',
      },
});