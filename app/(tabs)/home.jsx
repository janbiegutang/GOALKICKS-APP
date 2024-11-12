import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Top Header Section */}
      <View style={styles.header}>
        <Text style={styles.logoText}>Goal Kicks</Text>
        <Text style={styles.subText}>Elite Football Shoes</Text>
      </View>

      {/* Intro Section */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.introText}>
            Welcome to Goal Kicks!{'\n'}
            {'\n'}
            Ready to dominate the pitch? At Goal Kicks, we offer a curated selection of elite football boots designed for every playing style and surface. From firm ground to turf, find your perfect fit and elevate your game.{'\n'}
            {'\n'}
            Explore the latest releases, customize your boots, and gear up with reviews from other players. Goal Kicks isn't just about boots; it's about turning your passion into performance. Let's kickstart your next victory.
          </Text>
        </View>

        {/* Featured Product Section */}
        <View style={styles.featuredContainer}>
          <Text style={styles.sectionTitle}>Featured Cleats</Text>
          <Image
            source={{ uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f3d3824-ad57-49fe-bfda-dae262f6b598/PHANTOM+GX+II+ACADEMY+AG.png' }} // Replace with actual image URL
            style={styles.productImage}
          />
          <Text style={styles.productName}>Nike Phantom GX 2 Academy</Text>
          <TouchableOpacity style={styles.shopButton} onPress={() => navigation.navigate('shop')}>
            <Text style={styles.shopButtonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>

        {/* Customization Section */}
        <View style={styles.customizeContainer}>
          <Text style={styles.sectionTitle}>Customize Your Cleats</Text>
          <Text style={styles.customizeText}>
            Make your cleats personal! Choose your color, material, and engrave your name for that pro-level touch.
          </Text>
          <TouchableOpacity style={styles.customizeButton} onPress={() => navigation.navigate('customize')}>
            <Text style={styles.customizeButtonText}>Start Customizing</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13250e', // Black for a sleek background
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
  introContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  introText: {
    fontSize: 16,
    color: '#FFFFFF', // White text for contrast
    textAlign: 'center',
    lineHeight: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.6)', // Slight shadow for text clarity
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  featuredContainer: {
    marginVertical: 20,
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    padding: 15,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    color: '#32CD32', // Green for football grass
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#FFFFFF', // White border for a clean look
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    color: '#FFFFFF', // White for text
    marginBottom: 10,
  },
  shopButton: {
    backgroundColor: '#FFD700', // Gold button for a premium look
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  shopButtonText: {
    color: '#000000', // Black text on gold button
    fontSize: 16,
    fontWeight: 'bold',
  },
  customizeContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  customizeText: {
    fontSize: 16,
    color: '#FFFFFF', // White text
    textAlign: 'center',
    marginBottom: 10,
  },
  customizeButton: {
    backgroundColor: '#32CD32', // Green button to represent the pitch
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  customizeButtonText: {
    color: 'black', // White text on green button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
