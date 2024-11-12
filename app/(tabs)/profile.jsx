import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  
  const handleLogout = () => {
    // Logic to handle logout
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: () => navigation.navigate('index') }, // Navigate to Login screen
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Top Header Section */}
      <View style={styles.header}>
        <Text style={styles.logoText}>My Kicks</Text>
        <Text style={styles.subText}>Your Personalized Football Gear</Text>
      </View>

      {/* Profile Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        
        {/* Favorite Items Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Favorite Items</Text>
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7d99dd1f-507b-4649-a182-0ead21c3fa64/PHANTOM+GX+II+PRO+FG.png' }} // Replace with actual image URL
              style={styles.itemImage}
            />
            <Text style={styles.itemName}>Nike Phantom GX 2 Pro</Text>
            <Text style={styles.itemAction}>View Details</Text>
          </View>
        </View>

        {/* Saved Custom Designs Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Saved Custom Designs</Text>
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/24a574bd-4afe-4d7b-b2db-73b93fdfa961/PHANTOM+GX+II+PRO+AG-PRO.png' }} // Replace with actual image URL
              style={styles.itemImage}
            />
            <Text style={styles.itemName}>Customized by Janbie</Text>
            <Text style={styles.itemAction}>Edit Design</Text>
          </View>
        </View>

        {/* Purchase History Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Purchase History</Text>
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/67497a90-6cbe-4c16-a516-fae7f8a460d3/NIKE+VAPOR+EDGE+PRO+360+2.png' }} // Replace with actual image URL
              style={styles.itemImage}
            />
            <Text style={styles.itemName}>Nike Vapor Edge Pro 360 2</Text>
            <Text style={styles.itemAction}>Reorder</Text>
          </View>
        </View>


        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
        
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13250e', // Black background for consistency
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  logoText: {
    color: '#FFD700', // Gold for the elite feel
    fontSize: 36,
    fontWeight: 'bold',
  },
  subText: {
    color: '#FFFFFF', // White for clarity
    fontSize: 18,
    fontWeight: '300',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  sectionContainer: {
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    color: '#32CD32', // Green for football grass feel
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    width: '100%',
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  itemImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#FFFFFF', // White border for item images
  },
  itemName: {
    fontSize: 18,
    color: '#FFFFFF', // White text for item names
    marginBottom: 5,
  },
  itemAction: {
    fontSize: 16,
    color: '#FFD700', // Gold for action text (e.g., View Details, Edit Design)
    marginBottom: 10,
  },
  itemStatus: {
    fontSize: 16,
    color: '#FFFFFF', // White text for order status
    marginBottom: 10,
  },
  trackButton: {
    backgroundColor: '#32CD32', // Green button for tracking
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  trackButtonText: {
    color: '#000000', // Black text on green button
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF6347', // Red for logout button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#FFFFFF', // White text on logout button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
