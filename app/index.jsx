import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor="yellow" style="dark" />
      <ImageBackground
        source={require('../assets/bg.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>GOAL KICKS</Text>
              <Image
                source={require('../assets/imagelogo.png')}
                style={styles.image}
              />
              <Text style={styles.subtitle}>
                A Football Footwear Designed for Players Who Demand the Best.
              </Text>
            </View>
            <Text style={styles.slogan}>Let Your Goals, Be Our Passion!</Text>
          </View>
          <Link style={styles.buttonText} href="/signin">
            Get Started
          </Link>
        </View>
      </ImageBackground>
      
      
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  textContainer: {
    alignItems: 'center',
    marginHorizontal: 25,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  slogan: {
    fontSize: 18,
    fontWeight: '200',
    marginTop: 20,
    marginBottom: -100,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    marginTop: 100,
  },
});
