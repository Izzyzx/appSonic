 import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function NoticiasScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Novidades do Sonic</Text>
      <Text style={styles.description}>
        Fique por dentro das últimas notícias sobre Sonic e suas aventuras.
      </Text>

      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Sonic_the_Hedgehog.png' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Sonic_Runners.png' }}
        style={styles.image}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});
