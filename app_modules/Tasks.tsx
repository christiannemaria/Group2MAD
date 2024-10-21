import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg' }} 
        style={styles.backgroundImage}
      >
        <View style={styles.header}>
          <Text style={styles.logoText}>Group2MAD</Text>
          <View style={styles.nav}>
            <Button title="Home" onPress={() => {}} />
            <Button title="Gallery" onPress={() => {}} />
            <Button title="About" onPress={() => {}} />

          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.mainText}>IceCream Yummy IceCream Good</Text>
          
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,

  },
  mainText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomePage;
