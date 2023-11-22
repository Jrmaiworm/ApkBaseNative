// SplashScreen.js


import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';



const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('Login');
        }, 3000); // Altere 3000 para o número de milissegundos desejados
      }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')} // Substitua pelo caminho do seu logo
      />
      <Text style={styles.title}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Altere para a cor desejada
  },
  logo: {
    flex: 1, // Faz a imagem se ajustar ao espaço disponível
    resizeMode: 'contain',
    alignSelf: 'center', // Centraliza a imagem
  },
  title: {
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a90e2',
  },
});

export default SplashScreen;
