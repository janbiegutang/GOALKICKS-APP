import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Shop = () => {
    const navigation = useNavigation();

    // State to track selected sizes for each product
    const [selectedSizes, setSelectedSizes] = useState({});

    // Function to handle the Buy Now button click
    const handleBuyNow = () => {
        Alert.alert('Thank you', 'Your order is being processed.', [
            { text: 'Proceed to Ordered Items', onPress: () => navigation.navigate('order') },
            { text: 'Order More' }
        ]);
    };

    // Function to handle size selection
    const handleSizeSelect = (productId, size) => {
        setSelectedSizes({ ...selectedSizes, [productId]: size });
        Alert.alert('Size Selected', `You have selected US size ${size}.`);
    };

    // Sizes data for each product
    const sizes = {
        1: ['9', '10', '11', '12'],
        2: ['8', '9', '10', '11'],
        3: ['7', '8', '9', '10'],
        4: ['9', '10', '11', '12'],
        5: ['9', '10', '11', '12'],
    };

    return (
        <View style={styles.container}>
            {/* Top Header Section */}
            <View style={styles.header}>
                <Text style={styles.logoText}>Goal Kicks</Text>
                <Text style={styles.subText}>Shop Elite Football Shoes</Text>
            </View>

            {/* Shop Section */}
            <ScrollView contentContainerStyle={styles.contentContainer}>
                
                {/* Product 1 */}
                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/58d74d9d-f976-4a00-8a1c-43748a233ae0/PHANTOM+GX+II+ACAD+EASE+FGMG.png' }}
                        style={styles.productImage}
                    />
                    <Text style={styles.productName}>Nike Phantom GX 2 Academy</Text>
                    <Text style={styles.productPrice}>$90</Text>
                    <View style={styles.sizesContainer}>
                        {sizes[1].map((size) => (
                            <TouchableOpacity
                                key={size}
                                onPress={() => handleSizeSelect(1, size)}
                                style={[
                                    styles.sizeButton,
                                    selectedSizes[1] === size && styles.selectedSizeButton
                                ]}
                            >
                                <Text style={[
                                    styles.sizeText,
                                    selectedSizes[1] === size && styles.selectedSizeText
                                ]}>
                                    {size}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.shopButton} onPress={handleBuyNow}>
                        <Text style={styles.shopButtonText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>

                {/* Product 2 */}
                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7d99dd1f-507b-4649-a182-0ead21c3fa64/PHANTOM+GX+II+PRO+FG.png' }}
                        style={styles.productImage}
                    />
                    <Text style={styles.productName}>Nike Phantom GX 2 Pro</Text>
                    <Text style={styles.productPrice}>$160</Text>
                    <View style={styles.sizesContainer}>
                        {sizes[2].map((size) => (
                            <TouchableOpacity
                                key={size}
                                onPress={() => handleSizeSelect(2, size)}
                                style={[
                                    styles.sizeButton,
                                    selectedSizes[2] === size && styles.selectedSizeButton
                                ]}
                            >
                                <Text style={[
                                    styles.sizeText,
                                    selectedSizes[2] === size && styles.selectedSizeText
                                ]}>
                                    {size}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.shopButton} onPress={handleBuyNow}>
                        <Text style={styles.shopButtonText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>

                {/* Product 3 */}
                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/24a574bd-4afe-4d7b-b2db-73b93fdfa961/PHANTOM+GX+II+PRO+AG-PRO.png' }}
                        style={styles.productImage}
                    />
                    <Text style={styles.productName}>Nike Phantom GX 2 Pro</Text>
                    <Text style={styles.productPrice}>$160.00</Text>
                    <View style={styles.sizesContainer}>
                        {sizes[3].map((size) => (
                            <TouchableOpacity
                                key={size}
                                onPress={() => handleSizeSelect(3, size)}
                                style={[
                                    styles.sizeButton,
                                    selectedSizes[3] === size && styles.selectedSizeButton
                                ]}
                            >
                                <Text style={[
                                    styles.sizeText,
                                    selectedSizes[3] === size && styles.selectedSizeText
                                ]}>
                                    {size}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.shopButton} onPress={handleBuyNow}>
                        <Text style={styles.shopButtonText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>

                {/* Product 4 */}
                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/67497a90-6cbe-4c16-a516-fae7f8a460d3/NIKE+VAPOR+EDGE+PRO+360+2.png' }}
                        style={styles.productImage}
                    />
                    <Text style={styles.productName}>Nike Vapor Edge Pro 360 2</Text>
                    <Text style={styles.productPrice}>$135</Text>
                    <View style={styles.sizesContainer}>
                        {sizes[4].map((size) => (
                            <TouchableOpacity
                                key={size}
                                onPress={() => handleSizeSelect(4, size)}
                                style={[
                                    styles.sizeButton,
                                    selectedSizes[4] === size && styles.selectedSizeButton
                                ]}
                            >
                                <Text style={[
                                    styles.sizeText,
                                    selectedSizes[4] === size && styles.selectedSizeText
                                ]}>
                                    {size}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.shopButton} onPress={handleBuyNow}>
                        <Text style={styles.shopButtonText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>

                {/* Product 5 */}
                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/76388b6b-f070-48ed-abf5-05e380f6198b/NIKE+ALPHA+MENACE+4+ELITE.png' }}
                        style={styles.productImage}
                    />
                    <Text style={styles.productName}>Nike Alpha Menace 4 Elite</Text>
                    <Text style={styles.productPrice}>$210</Text>
                    <View style={styles.sizesContainer}>
                        {sizes[5].map((size) => (
                            <TouchableOpacity
                                key={size}
                                onPress={() => handleSizeSelect(5, size)}
                                style={[
                                    styles.sizeButton,
                                    selectedSizes[5] === size && styles.selectedSizeButton
                                ]}
                            >
                                <Text style={[
                                    styles.sizeText,
                                    selectedSizes[5] === size && styles.selectedSizeText
                                ]}>
                                    {size}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.shopButton} onPress={handleBuyNow}>
                        <Text style={styles.shopButtonText}>Buy Now</Text>
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
    productContainer: {
        marginVertical: 20,
        alignItems: 'center',
        backgroundColor: '#1C1C1C',
        borderRadius: 10,
        padding: 15,
        width: '100%',
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
        color: '#FFFFFF', // White text for product names
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        color: '#FFD700', // Gold for price
        marginBottom: 5,
    },
    sizesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        width: '100%',
    },
    sizeButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#FFD700',
        borderRadius: 5,
    },
    selectedSizeButton: {
        backgroundColor: '#FFD700', // Highlight selected size
    },
    sizeText: {
        fontSize: 18,
        color: '#FFD700', // Gold for the size
    },
    selectedSizeText: {
        color: '#000000', // Black text on selected size
    },
    shopButton: {
        backgroundColor: '#FFD700', // Gold button for premium feel
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    shopButtonText: {
        color: '#000000', // Black text on gold button
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Shop;
