import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';

const Customize = () => {
  // States for customization options
  const [bootColor, setBootColor] = useState('Red');
  const [material, setMaterial] = useState('Leather');
  const [engraving, setEngraving] = useState('');

  const handleCustomization = () => {
    console.log(`Boot Color: ${bootColor}, Material: ${material}, Engraving: ${engraving}`);
    // Here, add functionality to handle customization changes, save to a server, etc.
  };

  return (
    <View style={styles.container}>
      {/* Top Header Section */}
      <View style={styles.header}>
        <Text style={styles.logoText}>Customize Your Cleats</Text>
        <Text style={styles.subText}>Design Football Boots Your Way</Text>
      </View>

      {/* Customization Options */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        
        {/* Boot Color Section */}
        <View style={styles.customizationSection}>
          <Text style={styles.sectionTitle}>Select Boot Color</Text>
          <View style={styles.colorOptions}>
            <TouchableOpacity onPress={() => setBootColor('Red')} style={[styles.colorBox, { backgroundColor: 'red' }]}>
              {bootColor === 'Red' && <Text style={styles.selectedText}>Selected</Text>}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBootColor('Blue')} style={[styles.colorBox, { backgroundColor: 'blue' }]}>
              {bootColor === 'Blue' && <Text style={styles.selectedText}>Selected</Text>}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBootColor('Black')} style={[styles.colorBox, { backgroundColor: 'black' }]}>
              {bootColor === 'Black' && <Text style={styles.selectedText}>Selected</Text>}
            </TouchableOpacity>
          </View>
        </View>

        {/* Material Section */}
        <View style={styles.customizationSection}>
          <Text style={styles.sectionTitle}>Select Material</Text>
          <TouchableOpacity onPress={() => setMaterial('Leather')} style={styles.materialOption}>
            <Text style={[styles.materialText, material === 'Leather' && styles.selectedMaterial]}>Leather</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMaterial('Synthetic')} style={styles.materialOption}>
            <Text style={[styles.materialText, material === 'Synthetic' && styles.selectedMaterial]}>Synthetic</Text>
          </TouchableOpacity>
        </View>

        {/* Engraving Section */}
        <View style={styles.customizationSection}>
          <Text style={styles.sectionTitle}>Add Personalized Engraving</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter name or number"
            placeholderTextColor="#ccc"
            value={engraving}
            onChangeText={(text) => setEngraving(text)}
          />
        </View>

        {/* Preview Section */}
        <View style={styles.featuredContainer}>
        <View style={styles.previewSection}>
            
          <Text style={styles.sectionTitle}>Preview Your Custom Cleats</Text>
          
          <Image
            source={{ uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/24a574bd-4afe-4d7b-b2db-73b93fdfa961/PHANTOM+GX+II+PRO+AG-PRO.png' }} // Replace with a 3D model of the boot
            style={styles.bootPreview}
          />
          
          <Text style={styles.previewText}>Color: {bootColor}</Text>
          <Text style={styles.previewText}>Material: {material}</Text>
          {engraving ? <Text style={styles.previewText}>Engraving: {engraving}</Text> : null}
        </View>
        </View>

        {/* Save Customization Button */}
        <TouchableOpacity style={styles.customizeButton} onPress={handleCustomization}>
          <Text style={styles.customizeButtonText}>Save Customization</Text>
        </TouchableOpacity>
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13250e', // Black for sleek background
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  logoText: {
    color: '#FFD700', // Gold for elite feel
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
  customizationSection: {
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    color: '#32CD32', // Green for grass pitch feel
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  colorBox: {
    width: 70,
    height: 70,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF', // White border for color options
  },
  selectedText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  materialOption: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  materialText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  selectedMaterial: {
    color: '#FFD700', // Gold to indicate selected material
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  previewSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  bootPreview: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 10,
  },
  previewText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginVertical: 5,
  },
  customizeButton: {
    backgroundColor: '#FFD700', // Gold button for a premium look
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  customizeButtonText: {
    color: '#000000', // Black text on gold button
    fontSize: 16,
    fontWeight: 'bold',
  },
  marginVertical: 20,
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    
});

export default Customize;
