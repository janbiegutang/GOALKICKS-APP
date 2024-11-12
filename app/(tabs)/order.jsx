import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Order = () => {
  const orders = [
    {
      id: 1,
      name: 'Nike Phantom GX 2 Academy',
      price: 90,
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/58d74d9d-f976-4a00-8a1c-43748a233ae0/PHANTOM+GX+II+ACAD+EASE+FGMG.png',
      orderId: '12345',
      status: 'Shipped',
    },
    {
      id: 2,
      name: 'Nike Vapor Edge Pro 360 2',
      price: 135,
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/67497a90-6cbe-4c16-a516-fae7f8a460d3/NIKE+VAPOR+EDGE+PRO+360+2.png',
      orderId: '12346',
      status: 'Processing',
    },
    {
      id: 3,
      name: 'Nike Alpha Menace 4 Elite',
      price: 210,
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/76388b6b-f070-48ed-abf5-05e380f6198b/NIKE+ALPHA+MENACE+4+ELITE.png',
      orderId: '12347',
      status: 'Delivered',
    },
  ];


  return (
    <View style={styles.container}>
      {/* Top Header Section */}
      <View style={styles.header}>
        <Text style={styles.logoText}>My Orders</Text>
      </View>

      {/* Order List */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {orders.map(order => (
          <View key={order.id} style={styles.orderContainer}>
            <Image source={{ uri: order.image }} style={styles.orderImage} />
            <View style={styles.orderDetails}>
              <Text style={styles.orderName}>{order.name}</Text>
              <Text style={styles.orderPrice}>${order.price}</Text>
              <Text style={styles.orderId}>Order ID: {order.orderId}</Text>
              <Text style={styles.orderStatus}>Status: {order.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13250e', // Black background
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
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '100%',
  },
  orderImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  orderDetails: {
    flex: 1,
  },
  orderName: {
    fontSize: 18,
    color: '#FFFFFF', // White text for product names
    marginBottom: 5,
  },
  orderPrice: {
    fontSize: 16,
    color: '#FFD700', // Gold text for price
    marginBottom: 5,
  },
  orderId: {
    fontSize: 14,
    color: '#FFFFFF', // White text for order ID
  },
  orderStatus: {
    fontSize: 14,
    color: '#32CD32', // Green text for status
    marginTop: 5,
  },
  totalContainer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    color: '#FFD700', // Gold text for total price
    fontWeight: 'bold',
  },
});

export default Order;
